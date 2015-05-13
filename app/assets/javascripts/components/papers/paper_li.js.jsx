var PaperLi = React.createClass({
  //TODO: Get the author in here - find out how
  handleClick: function(e) {
    debugger;
    this.props.onPaperClick(this.props.data.id);
  },
  render: function() {
    return (
      <li onClick={this.handleClick} >
        {this.props.data.title} 
      </li>
    );
  }
});