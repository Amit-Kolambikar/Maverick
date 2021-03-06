import React from 'react';

export default class ChatFeed extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.ChatBubbles
  }
  componentWillReceiveProps(nextProps) {
    this.ChatBubbles = nextProps.messageThread.map((item, key) => {
      if (item.data) {
        if (item.data.indexOf('http') != -1) {
          return (<div
                       className="clearfix"
                       key={ key }>
                    <img
                         src={ item.data }
                         alt={ key }
                         key={ key }
                         className="chat-gif-item" />
                    <div id="temp"></div>
                  </div>)
        } else {
          return (<div
                       className={ "chat-bubble " + item.type }
                       key={ key }>
                    <div
                         className="talktext"
                         dangerouslySetInnerHTML={ { __html: item.data } }>
                    </div>
                    <div id="temp"></div>
                  </div>);
        }
      }
    });
  }
  componentDidUpdate() {
    document.querySelector('.chat-box').scrollTop = 10000
  }
  render() {
    return (
      <div>
        { this.ChatBubbles }
      </div>
      );
  }
}
