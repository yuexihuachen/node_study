var React = require('react');
var Layout = require('./layout');


class Index extends React.Component {
  render() {
    return (
      <Layout tempSetting={this.props.tempSetting}>
        <h1>{this.props.tempSetting.title}</h1>
        <div id='root' dangerouslySetInnerHTML={{__html:this.props.tempSetting.body}}>
        </div>
      </Layout>
    );
  }
}

Index.propTypes = {
  title: React.PropTypes.string
};

module.exports = Index;