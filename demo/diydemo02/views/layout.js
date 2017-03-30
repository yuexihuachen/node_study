var React = require('react');

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
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
             <link rel="stylesheet" href="/stylesheets/daterangepicker.css?v=1490866882860" />
            <script type="text/javascript" async="" src={this.props.data.initScript}></script>
            <script dangerouslySetInnerHTML={{__html:`  
            var script = document.createElement("script");
            script.src = './lib/xdomain.js';
            document.body.appendChild(script);`}}/>
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string
};


module.exports = Layout;