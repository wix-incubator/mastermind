import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
  results?: string[];
}

export default class SearchResults extends React.PureComponent<IProps> {
  private el: HTMLDivElement;
  private modalRoot: any;

  constructor(props: IProps) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modalRoot');
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  renderOverlay() {
    return <h1 style={{ color: 'green' }}>I AM THE MODAL!</h1>;
  }

  render() {
    return ReactDOM.createPortal(this.renderOverlay(), this.el);
  }
}
