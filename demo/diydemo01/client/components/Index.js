var React = require('react');
var Button = require('react-bootstrap').Button;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Modal = require('react-bootstrap').Modal;
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var Table = require('react-bootstrap').Table;
var Checkbox = require('react-bootstrap').Checkbox;



class ProductComponent extends React.Component {
  constructor(props){
      super(props);
  }
  componentWillMount() {
    this.state={ showModal: false };
  }
  componentDidMount(){
    //this.state={ showModal: false };
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render(){
  const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];
  const tabData = [{'Firstname':'Default', 'Lastname':'Primary', 'Username':'Success'}, {'Firstname':'Info', 'Lastname':'Warning', 'Username':'Danger'},{'Firstname':'Default', 'Lastname':'Primary', 'Username':'Success'}, {'Firstname':'Info', 'Lastname':'Warning', 'Username':'Danger'}];
    return (
      <div>
        <div style={{width:"100%",display:"flex",flexFlow:"row wrap",justifyContent:"center",height:"60px",alignItems:"center",fontWeight:"bold",fontSize:"20px"}}>Component</div>
        <div style={{margin:"20px",fontWeight:"bold",fontSize:"20px"}}>
          <Button bsSize="large">Default button</Button>
          <hr />
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        <hr />
        <ButtonToolbar>
          {
              BUTTONS.map((item,i)=>{
                return (
                    <DropdownButton bsStyle={item.toLowerCase()} title={item} key={i} id={`dropdown-basic-${i}`}>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
                )
              }
              )
          }
          </ButtonToolbar>
          <hr />
           <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.open.bind(this)}
          >
            Launch demo modal
          </Button>
           <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             One fine body...
         </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
        <hr />
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
          <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
          <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
        </Tabs>
        <hr />
          <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      {
        tabData.map((item,index)=>{
          return (<tr key={index}>
                  <td>
                    <Checkbox data-id={index} validationState="success"></Checkbox></td>
                  <td>{item.Firstname}</td>
                  <td>{item.Lastname}</td>
                  <td>{item.Username}</td>
                </tr>)
        })
      }
    </tbody>
  </Table>

        </div> 
      </div>
    )
  }
}

class ProductContentList extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  hasData(){
    var pageName=["Index","List","Other"];
      const data=this.props;
     return (
       <div className="cbody">     
         <div className="header">
            <div className="headcenter">
              {
                pageName.map((item,index)=>{
                  return (
                    <div key={index} className="url">
                      {item}
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="content">
         <h1>index</h1>
        </div>
        
      </div>
     );
  }
  render() {
        return this.hasData();
  }
}


class Index extends React.Component{
    constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  noData(){
    return (
      <div>没有更多数据了</div>
    )
  }
  render(){
      const data=this.props;
      if(data){
        return (
          <div>
             <ProductContentList {...this.props}/>
              <ProductComponent  {...this.props}/>
          </div>
        )
      } else {
        return this.noData();
      }
  }
}

module.exports = Index;


