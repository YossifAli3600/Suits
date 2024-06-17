class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("قتل") ||
      message.includes("Kill")
    ) {
      return this.actionProvider.handleTest({ withAvatar: true });
    }

    return this.actionProvider.handleOther({ withAvatar: true });
  }
}

export default MessageParser;
