import { Divider, teamsLightTheme, Theme } from "@fluentui/react-components";
import { Home, Send, Clock, SquarePen } from "lucide-react";
// import logo from "../../assets/Images/logo.png";
import "./main.css";
import { NavLink } from "react-router-dom";

interface IHeaderProps {
  theme: Theme;
}

export const Header = (props: IHeaderProps) => {
  return (
    <div className="header-section">
      <div className={props.theme === teamsLightTheme ? "cc-header-light" : "cc-header"}>
        <div className="cc-main-left">
          <img srcSet={""} alt="Logo" className="cc-logo" title="Header" />
          <span className="cc-divider">/</span>
          <span className="cc-title">F1 Communicator</span>
        </div>
      </div>

      <div>
        <nav className="cc-navbar">
          <NavLink className="cc-button" to="/home">
            <Home size={16} />
            Página Inicial
          </NavLink>

          <NavLink className="cc-button" to="/sendMessages">
            <Send size={16} />
            Enviados
          </NavLink>

          <NavLink className="cc-button" to="/draftMessages">
            <SquarePen size={16} />
            Rascunhos
          </NavLink>

          <NavLink className="cc-button" to="/scheduledMessages">
            <Clock size={16} />
            Agendados
          </NavLink>
        </nav>
      </div>
      <Divider className="divider" appearance="subtle" />
    </div>
  );
};
