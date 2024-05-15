import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./Components/config";
import MessageParser from "./Components/Messagner";
import ActionProvider from "./Components/ActionProvider";
import 'react-chatbot-kit/build/style.css';
import Header from "./Components/Header";


function App() {
  return (
    <div className="App">
        <Header/>
        <header className="bothead">
        <Chatbot className 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </header>
    </div>
  );
}

export default App;