import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classnames from 'classnames';
import Button from '../Button/Button';
const styles = require('./FeedbackModal.scss');
const {
  container,
  modal,
  fieldsContainer,
  title,
  textInput,
  nameInput,
  commentsInput,
  sendButton
} = styles;

interface IProps {
  name: string;
  onSend: () => void;
}

export default class FeedbackModal extends React.PureComponent<IProps> {
  private el: HTMLDivElement;
  private modalRoot: any;

  constructor(props: IProps) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modalRoot');
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    document.getElementsByTagName('body')[0].className = 'preventScrolling';
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    document.getElementsByTagName('body')[0].className = '';
  }

  renderFields() {
    return (
      <React.Fragment>
        <div className={fieldsContainer}>
          <input
            className={classnames(textInput, nameInput)}
            type="text"
            placeholder="Name"
          />
          <input className={textInput} type="text" placeholder="Email" />
        </div>
        <div className={fieldsContainer}>
          <input className={textInput} type="text" placeholder="Subject" />
        </div>
        <div className={fieldsContainer}>
          <textarea
            className={classnames(textInput, commentsInput)}
            placeholder="Comments"
          />
        </div>
      </React.Fragment>
    );
  }

  renderModal() {
    const { onSend, name } = this.props;
    return (
      <div className={container}>
        <div className={modal}>
          <span className={title}>{`Send feeback to ${name}`}</span>
          {this.renderFields()}
          <Button onClick={onSend} className={sendButton}>
            Send
          </Button>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(this.renderModal(), this.el);
  }
}
