var React = require('react');

class Error extends React.Component {
  handBack(){
    window.location.href="./";
  }
  render() {
    return (
        <div>
            <h2 style={{fontSize:'72px'}}>404 </h2>
        </div>
    );
  }
}


module.exports = Error;