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

interface IHomePage {
  theme: Theme;
}

export const HomePage = (props: IHomePage) => {
  const [lastSendMessage, setLastSendMessage] = useState<SendMessage | null>(null);
  const [lastDraftMessage, setLastDraftMessage] = useState<DraftMessage | null>(null);
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
    <>
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
        </section>
      </main>
    </>
  );
};
