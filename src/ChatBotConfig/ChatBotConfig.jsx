import { createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "./CoBotAvatar";
import OverviewGeneralOptions from "../assets/Widgets/Overview";
import { FormattedMessage, useIntl } from "react-intl";
import { Fragment } from "react";
const lang = localStorage.getItem("lang") || "ltr";
import React from 'react';
let botName = lang == "ltr" ? "SuitBot" : " SuitBot"
const config = {
  headerText:"test",
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
      <Fragment>
        <FormattedMessage id="hiIam" />  {botName} <FormattedMessage id="iamHereToHelp" />
      </Fragment>
    ),
    createChatBotMessage(
      <FormattedMessage id="typeYourCase" />,
      {
        withAvatar: true,
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
