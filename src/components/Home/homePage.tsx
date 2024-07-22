import React, { useEffect, useState } from "react";
import { Header } from "../Shared/header";
import { CardHome } from "../CardHome/cardHome";
import { Theme } from "@fluentui/react-components";
import "./homePage.css";
import {
  SendMessage,
  DraftMessage,
  ScheduledMessage,
  IMessage,
} from "../../interfaces/interfaces";
import { messages } from "../../services/data";
import { Image } from "@fluentui/react-components";
import { Notification } from "../StatusNotification/notifications";

interface IHomePage {
  theme: Theme;
}

export const HomePage = (props: IHomePage) => {
  const [lastSendMessage, setLastSendMessage] = useState<SendMessage | null>(null);
  const [lastDraftMessage, setLastDraftMessage] = useState<DraftMessage | null>(null);
  const [recentMessages, setRecentMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    // Assuming you want to display the last 6 messages
    setRecentMessages(messages.slice(-6));
  }, []);

  const renderStatus = (message: IMessage) => {
    if ("status" in message) {
      return message.status.send === "True" ? "sent" : "error";
    }
    return "sending"; // Assuming all scheduled messages are in sending state
  };

  const [lastScheduledMessage, setLastScheduledMessage] =
    useState<ScheduledMessage | null>(null);

  useEffect(() => {
    const findLastMessageByType = <T extends IMessage>(
      type: T["typeMessage"]
    ): T | null => {
      const specificMessages = messages.filter(
        (message): message is T => message.typeMessage === type
      );
      if (!specificMessages.length) return null;
      return specificMessages.reduce((prev, current) =>
        new Date(prev.data) > new Date(current.data) ? prev : current
      );
    };

    setLastSendMessage(findLastMessageByType<SendMessage>("SendMessage"));
    setLastDraftMessage(findLastMessageByType<DraftMessage>("DraftMessage"));
    setLastScheduledMessage(findLastMessageByType<ScheduledMessage>("ScheduledMessage"));
  }, []);

  return (
    <div className="root">
      <Header theme={props.theme} />

      <main className="cc-main">
        <section className="cc-section">
          <h1 className="cc-main-title">Visão geral</h1>
          <div className="cc-messages">
            <button className="cc-new-message">+ Nova mensagem</button>
          </div>
        </section>
        <section className="cc-content">
          <div className="cc-gridCards">
            {lastSendMessage && (
              <CardHome
                title="Última mensagem enviada"
                profileText={lastSendMessage.author}
                status={
                  lastSendMessage.status.send === "True" ? "Enviado" : "Não enviado"
                }
                recipients={lastSendMessage.recipients}
              />
            )}
            {lastDraftMessage && (
              <CardHome
                title="Último rascunho"
                profileText={lastDraftMessage.author}
                status="Rascunho"
                recipients={lastDraftMessage.recipients}
              />
            )}
            {lastScheduledMessage && (
              <CardHome
                title="Última mensagem agendada"
                profileText={lastScheduledMessage.author}
                status={`Agendado para ${new Date(
                  lastScheduledMessage.scheduledDate
                ).toLocaleString()}`}
                recipients={lastScheduledMessage.recipients}
              />
            )}
          </div>
          <div className="cc-gridMessages">
            <h2 className="cc-messages-title">Últimas Mensagens</h2>
            {recentMessages.map((message, index) => (
              <div className="cc-row" key={index}>
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong>{message.author}</strong> enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>
                      {message.title}
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>
                      {message.recipients}
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <Notification status={renderStatus(message)} />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
