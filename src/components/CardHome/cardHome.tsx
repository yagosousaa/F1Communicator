import { Ellipsis, Send, Edit, TextIcon } from "lucide-react";
import "./cardHome.css";
import {
  Image,
  Menu,
  MenuTrigger,
  Button,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";

interface ICardHome {
  title?: string;
}

export const CardHome = (props: ICardHome) => {
  return (
    <>
      <div className="card-border">
        <div className="card-header">
          <div className="card-content-section">
            <h1 className="card-title">{props.title}</h1>
            <div className="card-details">
              <Image
                shape="rounded"
                alt="Image"
                src="https://fabricweb.azureedge.net/fabric-website/placeholders/300x300.png"
                height={94}
                width={94}
              />
              <div>
                <p className="card-profile-txt">
                  <strong>Título: </strong> lorem ipsum!
                </p>
                <p className="card-profile-txt">
                  <strong>Status: </strong> Enviado
                </p>
                <p className="card-profile-txt">
                  <strong>Destinatários: </strong> 23
                </p>
              </div>
            </div>
          </div>
          <div className="card-menu-section">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <Ellipsis size={18} className="card-menu" />
              </MenuTrigger>

              <MenuPopover>
                <MenuList>
                  <MenuItem icon={<TextIcon size={18} />}>Abrir</MenuItem>
                  <MenuItem icon={<Send size={18} />}>Enviar</MenuItem>
                  <MenuItem icon={<Edit size={18} />}>Editar</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>
        </div>
        <div className="card-footer">
          <Image
            alt="Avatar"
            shape="circular"
            src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
            height={18}
            width={18}
          />
          <p className="card-profile-txt">
            <strong>Yago </strong>enviou à uma hora atras
          </p>
        </div>
      </div>
    </>
  );
};
