var TopBar = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.onNavigation(e.currentTarget.getAttribute("data-id"));
  },
  handleUpload: function(e) {
    e.preventDefault();
    this.props.onUpload();
  },
  handleLogout: function(e) {
    e.preventDefault();
    this.props.onLogOut();
  },
  render: function() {
    return (
      <div id="topbar-div">
        <button type="button" data-id="profile" onClick={this.handleClick}>Profile</button>
        <button type="button" data-id="search" onClick={this.handleClick}>Search</button>
        <button type="button" data-id="home" onClick={this.handleClick}>Home</button>
        <button type="button" data-id="upload" onClick={this.handleUpload}>Upload Your Work</button>
        <button type="button" data-id="logout" onClick={this.handleLogout}>Log Out</button> 
      </div>
    );
  }
});