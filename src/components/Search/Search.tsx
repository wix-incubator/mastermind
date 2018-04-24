import * as React from 'react';
import * as classnames from 'classnames';
import SearchResultsContainer from '../SearchResults/SearchResults.container';
const searchIcon = require('../../assets/images/search.svg');
const cancelButton = require('../../assets/images/cancelButton.svg');
const styles = require('./Search.scss');

interface ISearchState {
  expanded: boolean;
  collapsing: boolean;
}

interface IProps {
  searchGame: (query: string) => any;
  cancelSearch: () => any;
  query: string;
}

export default class Search extends React.PureComponent<IProps, ISearchState> {
  private inputField: any;

  constructor(props: IProps) {
    super(props);
    this.inputField = React.createRef();
    this.state = {
      expanded: false,
      collapsing: false
    };
  }

  expandSearch = () => {
    this.setState({ expanded: true });
    this.inputField.current.focus();
  };

  collapseSearch = () => {
    this.props.cancelSearch();
    this.setState({ collapsing: true });
    setTimeout(
      () => this.setState({ collapsing: false, expanded: false }),
      400
    );
  };

  onChange = (event: any) => {
    this.props.searchGame(event.target.value);
  };

  render() {
    const { expanded, collapsing } = this.state;
    const { query } = this.props;

    return (
      <React.Fragment>
        <div className={styles.container}>
          <img
            className={classnames(styles.searchIcon, {
              [styles.visible]: !expanded
            })}
            src={searchIcon}
            onClick={this.expandSearch}
          />
          <input
            className={classnames(styles.field, {
              [styles.visible]: expanded,
              [styles.collapsing]: collapsing
            })}
            type={'text'}
            ref={this.inputField}
            onChange={this.onChange}
            value={query || ''}
          />
          <img
            className={classnames(styles.cancelButton, {
              [styles.visible]: expanded
            })}
            src={cancelButton}
            onClick={this.collapseSearch}
            data-hook={'cancel-search-button'}
          />
        </div>
        <SearchResultsContainer />
      </React.Fragment>
    );
  }
}
