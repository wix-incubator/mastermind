import * as React from 'react';
import * as ReactDOM from 'react-dom';
const styles = require('./SearchResults.scss');

interface IProps {
  results: string[] | null;
  query: string | null;
  cancelSearch: () => any;
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
    document.getElementsByTagName('body')[0].className = 'preventScrolling';
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    document.getElementsByTagName('body')[0].className = '';
  }

  renderResults() {
    return <h1>WE HAVE RESULTS</h1>;
  }

  renderNoResults() {
    return (
      <div className={styles.noResultsContainer}>
        <span className={styles.noResults}>Nothing found</span>
        <span className={styles.backToGame} onClick={this.props.cancelSearch}>
          Back to game
        </span>
      </div>
    );
  }

  renderOverlay() {
    const { results } = this.props;

    return (
      <div className={styles.overlay}>
        {results && results.length
          ? this.renderResults()
          : this.renderNoResults()}
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(this.renderOverlay(), this.el);
  }
}
