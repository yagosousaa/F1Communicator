import React from "react";
import "./notification.css";

interface INotificationProps {
  status: "sending" | "sent" | "error";
}

export const Notification = ({ status }: INotificationProps) => {
  const renderNotification = () => {
    switch (status) {
      case "sending":
        return (
          <div className="sendingNotification">
            <div className="sendingTitle">ENVIANDO</div>
          </div>
        );
      case "sent":
        return (
          <div className="sendNotification">
            <div className="sendTitle">ENVIADO</div>
          </div>
        );
      case "error":
        return (
          <div className="erroNotification">
            <div className="erroTitle">ERRO</div>
          </div>
        );
      default:
        return null;
    }
  };

  return renderNotification();
};
