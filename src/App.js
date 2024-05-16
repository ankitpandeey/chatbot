import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./Components/config";
import MessageParser from "./Components/Messagner";
import ActionProvider from "./Components/ActionProvider";
import 'react-chatbot-kit/build/style.css';
import Header from "./Components/Header";
import Paragraph from "./Components/Paragraph";


function App() {
  return (
    <div>
        <Header/>
        <Paragraph/>
        <header className="bothead">
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </header>
    </div>
  );
}

export default App;