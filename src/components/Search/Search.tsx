import * as React from 'react';
import * as classnames from 'classnames';
const searchIcon = require('../../assets/images/search.svg');
const cancelButton = require('../../assets/images/cancelButton.svg');
const styles = require('./Search.scss');

interface ISearchState {
  expanded: boolean;
  collapsing: boolean;
}

export default class Search extends React.PureComponent<{}, ISearchState> {
  private inputField: any;

  constructor(props: any) {
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
    this.setState({ collapsing: true });
    setTimeout(
      () => this.setState({ collapsing: false, expanded: false }),
      400
    );
  };

  render() {
    const { expanded, collapsing } = this.state;

    return (
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
        />
        <img
          className={classnames(styles.cancelButton, {
            [styles.visible]: expanded
          })}
          src={cancelButton}
          onClick={this.collapseSearch}
        />
      </div>
    );
  }
}
