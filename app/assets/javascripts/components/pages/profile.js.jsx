//Shows the user's profile and any submitted papers
var Profile = React.createClass({
  //Informs the Main view that a paper has been clicked
  handlePaperClick: function(paperID) {
    this.props.onPaperSelect(paperID);
  },
  //Renders the profile
  render: function() {
    return (
      <div id="profile-div">
        <h2 className="name"> 
          {this.props.user.first_name} {this.props.user.last_name}
        </h2>
        <h4>Student at {this.props.user.school_name}</h4>
        <Feed data={this.props.data} onPaperClick={this.handlePaperClick}/>
      </div>
    );
  }
});