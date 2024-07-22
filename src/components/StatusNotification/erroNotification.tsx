import "./notification.css";

interface IErroNotification {}

export const ErroNotification = (props: IErroNotification) => {
  return (
    <div className="erroNotification">
      <div className="erroTitle">ERRO</div>
    </div>
  );
};
