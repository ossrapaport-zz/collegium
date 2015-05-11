var PaperLi = React.createClass({
  //TODO: Get the author in here - find out how
  render: function() {
    <li onClick={this.props.onPaperClick} >
      {this.props.data.title} 
    </li>
  }
});