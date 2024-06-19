import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import React from 'react';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleOther = (options) => {
    const message = this.createChatBotMessage(
      <FormattedMessage id="pleaseClarify" />,
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.addMessageToState(message);
  };

  handleThankYou = (options) => {
    const message = this.createChatBotMessage(
      <FormattedMessage id="thankYouMessage" />,
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.addMessageToState(message);
  };

  handleBusinessLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='business' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleBankruptcyLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='bankruptcy' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleConsumerProtectionLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='consumerProtectionLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleIslamicLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='islamicLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleAdministrativeLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='adminstrativeLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleHumanRightsLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='humanRights' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleElderLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='elderLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleCivilRightsLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='civilRight' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };
  handleEmploymentLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='employment' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };
  handleFamilyLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='familyLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };
  handlePersonalInjuryLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='personalInjury' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };
  handleIntellectualPropertyLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='intellectualProperty' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };
  handleImmigrationLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='immigration' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };
  handleTaxLawyer = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='taxLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };
  handleEnvironmentalLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='environmentLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };
  handleRealEstateLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='realEstate' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleCriminal = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='criminal' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleMedicalMalpracticeLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='medicalMalPractice' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleEstatePlanningLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='estatePlanning' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleConstitutionalLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='constitutionalLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleEntertainmentLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='entertainmentLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleConstructionLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='constructionalLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleEducationLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='educationalLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleHealthCareLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='healthCareLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleMilitaryLaw = () => {
    const message = this.createChatBotMessage(
      <Fragment>
        <FormattedMessage id='yourCaseBelongsTo' /> {" "}  ,
        <FormattedMessage id='militaryLaw' />
      </Fragment>,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
