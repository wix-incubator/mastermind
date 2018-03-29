import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
const hljs = window['hljs'];
const styles = require('./KeyPointsOfInterest.scss');

interface IProps {
  data?: string;
}

interface ICodeBlock {
  value: string;
  language: string;
}

class CodeBlock extends React.PureComponent<ICodeBlock> {
  private codeEl: any;

  setRef = (el: any) => {
    this.codeEl = el;
  };

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    return (
      <pre>
        <code ref={this.setRef} className={`language-${this.props.language}`}>
          {this.props.value}
        </code>
      </pre>
    );
  }
}

export default class KeyPointsOfInterest extends React.PureComponent<IProps> {
  render() {
    const { data } = this.props;
    return data ? (
      <ReactMarkdown
        className={styles.container}
        source={data}
        renderers={{ code: CodeBlock }}
      />
    ) : null;
  }
}
