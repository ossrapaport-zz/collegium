var App = React.createClass({
  getInitialState: function() {
    return {user: {}};
  },
  handleLogIn: function(logInInfo) {
    $.ajax({
      url: "/sessions",
      method: "POST",
      data: logInInfo
    }).done(function(user) {
      this.setState({user: user});
    }.bind(this));
    //.error(function()) TODO: Implement error handling here
  },
  render: function() {
    <p> here </p>
    /*if (this.state.user) {
      <Home user={this.state.user} />
    } else {
      <SignUp /> 
      //<LogIn  onLogIn={this.handleLogIn} /> //How can I feed this errors?
    }*/
  }
});

//React.render(<Main/>, $("#app-wrapper"));