var Profile = React.createClass({
  //TODO: What else should go here??
  //TODO: User profile pictures??
  render: function() {
    return (
      <div id="profile-div">
        <img src={this.props.user.photo} alt="Profile Picture" />
        <h2 className="name"> 
          {this.props.user.first_name} {this.props.user.last_name}
        </h2>
        <h4>Student at {this.props.user.school_name}</h4>
        <Feed data={this.props.data} />
      </div>
    );
  }
});