import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IGame } from '../../types/game';
import GameShowcase from '../GameShowcase/GameShowcase';
const styles = require('./SearchResults.scss');

interface IProps {
  results: string[] | null;
  query: string | null;
  games: { [key: string]: IGame };
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

  renderResults(): JSX.Element {
    const { results, query, games } = this.props;
    const resultsLength = (results || []).length;

    return (
      <React.Fragment>
        <span className={styles.resultsCount}>
          {`${resultsLength} ${
            resultsLength > 1 ? 'results' : 'result'
          } found for "${query}"`}
        </span>
        <div className={styles.gameShowcases}>
          {results &&
            results.map(resultId => (
              <GameShowcase key={resultId} game={games[resultId]} inSearch />
            ))}
        </div>
      </React.Fragment>
    );
  }

  clickOnCancelButton() {
    const cancelButton: HTMLElement = document.querySelector(
      `img[data-hook='cancel-search-button']`
    ) as HTMLElement;
    cancelButton.click();
  }

  renderNoResults(): JSX.Element {
    return (
      <React.Fragment>
        <span className={styles.noResults}>{`Nothing found for "${
          this.props.query
        }"`}</span>
        <span className={styles.backToGame} onClick={this.clickOnCancelButton}>
          Back to game
        </span>
      </React.Fragment>
    );
  }

  renderOverlay(): JSX.Element {
    const { results } = this.props;

    return (
      <div className={styles.overlay}>
        <div className={styles.resultsContainer}>
          {results && results.length
            ? this.renderResults()
            : this.renderNoResults()}
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(this.renderOverlay(), this.el);
  }
}
