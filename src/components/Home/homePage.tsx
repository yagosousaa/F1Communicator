import { Header } from "../Shared/header";
import { CardHome } from "../CardHome/cardHome";
import { Theme } from "@fluentui/react-components";
import { Image } from "@fluentui/react-components";
import "./homePage.css";
import { SendNotification } from "../StatusNotification/sendNotification";
import { SendingNotification } from "../StatusNotification/sendingNotification";
import { ErroNotification } from "../StatusNotification/erroNotification";

interface IHomePage {
  theme: Theme;
}

export const HomePage = (props: IHomePage) => {
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
          <div>
            <CardHome title="Última mensagem" />
            <CardHome title="Último rascunho" />
            <CardHome title="Última mensagem agendada" />
          </div>

          <div className="container-messages">
            <div>
              <h1 className="cc-messages-title">Últimas Mensagens</h1>
            </div>

            <div className="cc-rows-section">
              <div className="cc-row">
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong> Yago Sousa </strong>enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>lorem ipsum!
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>23
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <ErroNotification />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
              <div className="cc-row">
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong> Yago Sousa </strong>enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>lorem ipsum!
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>23
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <SendingNotification />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
              <div className="cc-row">
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong> Yago Sousa </strong>enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>lorem ipsum!
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>23
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <SendNotification />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
              <div className="cc-row">
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong> Yago Sousa </strong>enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>lorem ipsum!
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>23
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <SendNotification />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
              <div className="cc-row">
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong> Yago Sousa </strong>enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>lorem ipsum!
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>23
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <SendNotification />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
              <div className="cc-row">
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong> Yago Sousa </strong>enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>lorem ipsum!
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>23
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <SendNotification />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
              <div className="cc-row">
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong> Yago Sousa </strong>enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>lorem ipsum!
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>23
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <SendNotification />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
              <div className="cc-row">
                <div className="cc-container">
                  <Image
                    alt="Avatar"
                    shape="circular"
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
                    height={36}
                    width={36}
                  />
                  <div>
                    <p className="card-profile-txt">
                      <strong> Yago Sousa </strong>enviou uma mensagem
                    </p>
                    <p className="card-profile-txt">
                      <strong>Título: </strong>lorem ipsum!
                    </p>
                    <p className="card-profile-txt">
                      <strong>Destinatários: </strong>23
                    </p>
                  </div>
                </div>
                <div className="notification-section">
                  <SendNotification />
                  <p className="card-profile-txt">3 min atrás</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
