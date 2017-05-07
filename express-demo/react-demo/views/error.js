var React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div className="errorContent">
          <div className="errornav">
            <div className="imgpos">
              <span className="mes">404-{this.props.message}</span>
            </div>
          </div>
            <div style={{marginTop:"80px"}}>
              <a className="shua" href="javascript:window.location.reload();">刷新</a>
              <a className="shua" href="javascript:window.location.href=window.location.origin;">首页</a>
            </div>
            <link rel="stylesheet" href="/stylesheets/errorstyle.css" />
        </div>
    );
  }
}

module.exports = Index;