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
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IHomePage {
  theme: Theme;
}

export const HomePage = (props: IHomePage) => {
  const [lastSendMessage, setLastSendMessage] = useState<SendMessage | null>(null);
  const [lastDraftMessage, setLastDraftMessage] = useState<DraftMessage | null>(null);
  const [recentMessages, setRecentMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const recentSendMessages = messages
      .filter((message): message is SendMessage => message.typeMessage === "SendMessage")
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(1, 7);

    setRecentMessages(recentSendMessages);
  }, []);

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
        new Date(prev.date) > new Date(current.date) ? prev : current
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
                lastTitle={"Ultima Mensagem Enviada"}
                title={lastSendMessage.title}
                profileText={lastSendMessage.author}
                status={lastSendMessage.status}
                recipients={lastSendMessage.recipients}
                date={lastSendMessage.date}
                profileImage={lastSendMessage.imageProfile}
              />
            )}
            {lastDraftMessage && (
              <CardHome
                lastTitle={"Ultimo Rascunho"}
                title={lastDraftMessage.title}
                profileText={lastDraftMessage.author}
                status={lastDraftMessage.status}
                recipients={lastDraftMessage.recipients}
                date={lastDraftMessage.date}
                profileImage={lastDraftMessage.imageProfile}
              />
            )}
            {lastScheduledMessage && (
              <CardHome
                lastTitle={"Ultima Mensagem Agendada"}
                title={lastScheduledMessage.title}
                profileText={lastScheduledMessage.author}
                status={lastScheduledMessage.status}
                recipients={lastScheduledMessage.recipients}
                date={lastScheduledMessage.date}
                profileImage={lastScheduledMessage.imageProfile}
              />
            )}
          </div>
          <div className="cc-lastSendMessages">
            <h2 className="cc-messages-title">Últimas Mensagens</h2>
            <div className="cc-gridRow">
              {recentMessages.map((message, index) => (
                <div className="cc-row" key={index}>
                  <div className="cc-container">
                    <Image
                      alt="Avatar"
                      shape="circular"
                      src={message.imageProfile}
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
                    </div>
                  </div>
                  <div className="notification-section">
                    <Notification status={message.status} />
                    <p className="card-date-txt">
                      {formatDistanceToNow(new Date(message.date), {
                        locale: ptBR,
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
