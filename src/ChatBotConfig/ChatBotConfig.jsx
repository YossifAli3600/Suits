import { createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "./CoBotAvatar";
import OverviewGeneralOptions from "../assets/Widgets/Overview";
import { FormattedMessage } from "react-intl";
let botName = "Suits Helper";
const config = {
  lang: "no",
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#000"
    },
    chatButton: {
      backgroundColor: "#000"
    },
    closeButton: {
      backgroundColor: "#000"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm ${botName} I'm Here to Help You to Choose Your Lawyer Category!`
    ),
    createChatBotMessage(
      <FormattedMessage id="login" />,
      {
        withAvatar: false,
        delay: 2000,
      }
    )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <OverviewGeneralOptions {...props} />,
      mapStateToProps: ["messages"]
    },
  ]
};

export default config;
