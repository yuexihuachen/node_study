import React from 'react';
import PropTypes from 'prop-types';

class Layout extends React.Component {
  render() {
      var data = this.props.data;
    return (
      <html>
        <head>
          <title>{this.props.data.title}</title>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta name="keywords" content={this.props.data.keywords} />
          <meta name="description" content={this.props.data.description} />
        </head>
        <body>
            <div id='root' dangerouslySetInnerHTML={{__html:this.props.data.body}}></div>

            <link rel="stylesheet" href={this.props.data.initStyles} />
            <script type="text/javascript" src="https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js"></script>
            <script type="text/javascript" async="" src={this.props.data.initVendor}></script>
            <script type="text/javascript" async="" src={this.props.data.initIndex}></script>
            
            <script dangerouslySetInnerHTML={{__html:` console.log("hello world");`}}/>
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  data: PropTypes.object.isRequired
};


module.exports = Layout;