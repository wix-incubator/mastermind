import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classnames from 'classnames';
import Button from '../Button/Button';
const cancelButton = require('../../assets/images/cancelButton.svg');
const styles = require('./FeedbackModal.scss');
const {
  container,
  modal,
  fieldsContainer,
  title,
  textInput,
  nameInput,
  commentsInput,
  sendButton,
  cancel
} = styles;

interface IProps {
  name: string;
  onSend: () => void;
  closeModal: () => void;
}

interface IState {
  name: string;
  from: string;
  subject: string;
  body: string;
  isFormValid: boolean;
}

export default class FeedbackModal extends React.PureComponent<IProps, IState> {
  private el: HTMLDivElement;
  private modalRoot: any;

  constructor(props: IProps) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modalRoot');
    this.state = {
      name: '',
      from: '',
      subject: '',
      body: '',
      isFormValid: false
    };
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    document.getElementsByTagName('body')[0].className = 'preventScrolling';
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    document.getElementsByTagName('body')[0].className = '';
  }

  validateState(state: IState): IState {
    let isFormValid: boolean = true;
    ['name', 'subject', 'body'].forEach((key: string) => {
      if (isFormValid) {
        isFormValid = !!state[key];
      }
    });

    isFormValid =
      isFormValid &&
      !!state.from.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    return { ...state, isFormValid };
  }

  handleFieldChange = (event: any) => {
    const { fieldName } = event.target.dataset;
    const newState = { ...this.state, [fieldName]: event.target.value };
    const validatedState = this.validateState(newState);

    this.setState({
      ...validatedState
    });
  };

  renderFields() {
    const { name, from, subject, body } = this.state;

    return (
      <React.Fragment>
        <div className={fieldsContainer}>
          <input
            className={classnames(textInput, nameInput)}
            type="text"
            placeholder="Name"
            data-field-name="name"
            onChange={this.handleFieldChange}
            value={name}
          />
          <input
            className={textInput}
            type="text"
            placeholder="Email"
            data-field-name="from"
            onChange={this.handleFieldChange}
            value={from}
          />
        </div>
        <div className={fieldsContainer}>
          <input
            className={textInput}
            type="text"
            placeholder="Subject"
            data-field-name="subject"
            onChange={this.handleFieldChange}
            value={subject}
          />
        </div>
        <div className={fieldsContainer}>
          <textarea
            className={classnames(textInput, commentsInput)}
            placeholder="Comments"
            data-field-name="body"
            onChange={this.handleFieldChange}
            value={body}
          />
        </div>
      </React.Fragment>
    );
  }

  renderModal() {
    const { onSend, name, closeModal } = this.props;
    const { isFormValid } = this.state;
    return (
      <div className={container}>
        <div className={modal}>
          <img className={cancel} src={cancelButton} onClick={closeModal} />
          <span className={title}>{`Send feeback to ${name}`}</span>
          {this.renderFields()}
          <Button
            onClick={onSend}
            className={sendButton}
            disabled={!isFormValid}
          >
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
