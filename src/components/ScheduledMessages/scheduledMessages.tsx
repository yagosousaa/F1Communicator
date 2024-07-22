import { Header } from "../Shared/header";
import { Theme } from "@fluentui/react-components";
import "./scheduledMessages.css";

interface IScheduledMessages {
  theme: Theme;
}

export const ScheduledMessages = (props: IScheduledMessages) => {
  return (
    <>
      <Header theme={props.theme} />

      <main className="cc-scheduled">
        <h1 className="cc-scheduled-title">Scheduled Messages</h1>
      </main>
    </>
  );
};
