import { Ellipsis, Send, Edit, TextIcon } from "lucide-react";
import "./cardHome.css";
import {
  Image,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ICardHome {
  title?: string;
  profileText?: string;
  status: string;
  recipients?: number;
  date: string;
  lastTitle: string;
  profileImage: string;
}

export const CardHome = ({
  title,
  profileText,
  status,
  recipients,
  date,
  lastTitle,
  profileImage,
}: ICardHome) => {
  return (
    <div className="card-border">
      <div className="card-header">
        <div className="card-content-section">
          <h1 className="card-title">{lastTitle}</h1>
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
                <strong>Título: </strong> {title}
              </p>
              <p className="card-profile-txt">
                {status === "" ? null : <strong>Status: </strong>}
              </p>
              <p className="card-profile-txt">
                <strong>Destinatários: </strong> {recipients}
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
        <Image alt="Avatar" shape="circular" src={profileImage} height={18} width={18} />
        <p className="card-profile-txt">
          <strong>{profileText} </strong>
          {formatDistanceToNow(new Date(date), {
            locale: ptBR,
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};
