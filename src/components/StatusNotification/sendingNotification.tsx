import "./notification.css";

interface ISendingNotification {}

export const SendingNotification = (props: ISendingNotification) => {
  return (
    <div className="sendingNotification">
      <div className="sendingTitle">ENVIANDO</div>
    </div>
  );
};
