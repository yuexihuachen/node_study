var React = require('react');

class Layout extends React.Component {
  render() {
      var data = this.props.data;
    return (
      <html>
        <head>
          <title>{this.props.data.title}</title>
          <meta charSet='utf-8' />
          {/*需要使用 IE8 Standards Mode*/}
           <meta http-equiv="x-ua-compatible" content="ie=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta name="keywords" content={this.props.data.keywords} />
          <meta name="description" content={this.props.data.description} />
        </head>
        <body>
            <div id='root1'></div>
            <div id='root2'></div>
            <div id='root3'></div>
            <div id='root4'></div>
            <div id='root5'></div>
            <div id='root6'></div>
            <div id='root7'></div>
            <div id='root8'></div>
            <div id='root9'></div>
            <div id='root10'></div>

            <link rel="stylesheet" href={this.props.data.initStyles} />
            <script type="text/javascript"  src={this.props.data.initVendor}></script>
            <script type="text/javascript" async="" src={this.props.data.initScript}></script>

            
            <script dangerouslySetInnerHTML={{__html:` console.log("hello world");`}}/>
        </body>
      </html>
    );
  }
}

module.exports = Layout;