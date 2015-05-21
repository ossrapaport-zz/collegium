var TopBar = React.createClass({
  //Implements page navigation and informs the Main view
  //when it is desired
  handleClick: function(e) {
    e.preventDefault();
    this.props.onNavigation(e.currentTarget.getAttribute("data-id"));
  },
  //Implements uploading and informs the main view when
  //it is desired
  handleUpload: function(e) {
    e.preventDefault();
    this.props.onUpload();
  },
  //Implements log out and informs the main view when
  //it is desired
  handleLogout: function(e) {
    e.preventDefault();
    this.props.onLogOut();
  },
  //Renders the view with the necessary buttons
  render: function() {
    return (
      <div id="topbar-div">
        <button className="nav-button" type="button" data-id="profile" onClick={this.handleClick}>Profile</button>
        <button className="nav-button" type="button" data-id="search" onClick={this.handleClick}>Search</button>
        <button className="nav-button" type="button" data-id="home" onClick={this.handleClick}>Home</button>
        <button className="nav-button" type="button" data-id="upload" onClick={this.handleUpload}>Upload Your Work</button>
        <button className="nav-button" type="button" data-id="logout" onClick={this.handleLogout}>Log Out</button> 
      </div>
    );
  }
});