import React from "react";
import {
  FluentProvider,
  teamsDarkTheme,
  teamsLightTheme,
  Spinner,
  tokens,
} from "@fluentui/react-components";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useTeamsUserCredential } from "@microsoft/teamsfx-react";
import { HomePage } from "./components/Home/homePage";
import { SendMessages } from "./components/SendMessages/sendMessages";
import { DraftMessages } from "./components/DraftMessages/draftMessages";
import { ScheduledMessages } from "./components/ScheduledMessages/scheduledMessages";

export default function App() {
  const [fluentUITheme, setFluentUITheme] = React.useState(teamsDarkTheme);

  const { loading } = useTeamsUserCredential({
    clientId: process.env.REACT_APP_CLIENT_ID!,
    initiateLoginEndpoint: process.env.REACT_APP_START_LOGIN_PAGE_URL!,
  });

  return (
    <FluentProvider
      theme={fluentUITheme}
      style={{ background: tokens.colorNeutralBackground5 }}
    >
      <Router>
        {loading ? (
          <Spinner style={{ margin: 100 }} />
        ) : (
          <Routes>
            <Route path="/home" element={<HomePage theme={fluentUITheme} />} />
            <Route
              path="/sendMessages"
              element={<SendMessages theme={fluentUITheme} />}
            />
            <Route
              path="/draftMessages"
              element={<DraftMessages theme={fluentUITheme} />}
            />
            <Route
              path="/scheduledMessages"
              element={<ScheduledMessages theme={fluentUITheme} />}
            />
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        )}
      </Router>
    </FluentProvider>
  );
}
