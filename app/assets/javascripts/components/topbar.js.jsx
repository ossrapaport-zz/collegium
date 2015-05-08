var TopBar = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.onNavigation(React.findDOMNode)
  },
  render: function() {
    <div>
      <button type="button" ref="profile" onClick={this.handleClick}>Profile</button>
      <button type="button" ref="search" onClick={this.handleClick}>Profile</button>
      <button type="button" ref="feed" onClick={this.handleClick}>Profile</button>
    </div>
  }
});