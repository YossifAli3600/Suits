import './App.css'
import React from 'react';

import { messages } from './translations/messages'
import { IntlProvider } from 'react-intl';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { useStore } from './zustand/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import config from './ChatBotConfig/ChatBotConfig';
import MessageParser from './ChatBotConfig/MessageParser';
import ActionProvider from './ChatBotConfig/ActionProvider';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import botImg from './assets/images/bot.png';
import { useEffect, useState } from 'react';
function App() {
  const locale = useStore(state => state.lang) == "ltr" ? 'en' : 'ar';
  const translation = messages[locale];
  const [chatbot, setChatbot] = useState(false)

  function closeChatbot(e) {
    if (!e.target.closest(".botIcon")) {
      if (!e.target.closest(".react-chatbot-kit-chat-container")) {
        closeChatbotOnClick();
      }
    }

  }
  function closeChatbotOnClick() {
    setChatbot(false)
  }

  useEffect(() => {
    document.addEventListener("click", closeChatbot);
  }, []);
  return (

    <IntlProvider locale={locale} messages={translation} defaultLocale='en' >
      <ToastContainer position={"top-right"} autoClose={3000} />
      <div className='chatBotDiv'>
        <div onClick={() => setChatbot(!chatbot)} className={`icon relative cursor-pointer ${chatbot ? "hidden" : ""}`}>
          <img className='botIcon' src={botImg} alt="botIcon" />
        </div>
        {chatbot &&
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />}

      </div>
      <RouterProvider router={router} />
    </IntlProvider>
  )
}

export default App
