import "./notification.css";

interface ISendNotification {}

export const SendNotification = (props: ISendNotification) => {
  return (
    <div className="sendNotification">
      <div className="sendTitle">ENVIADO</div>
    </div>
  );
};
