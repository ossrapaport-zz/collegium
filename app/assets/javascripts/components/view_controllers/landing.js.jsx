var Landing = React.createClass({
  getInitialState: function() {
    return {
      user: {}, 
      mode: "landing"
    };
  },
  renderMain: function(user) {
    this.setState({user: user, mode: "main"});
  },
  handleLogIn: function(logInInfo) {
    $.ajax({
      url: "/sessions",
      method: "POST",
      data: logInInfo
    }).done(this.renderMain);
    //.error(function()) TODO: Implement error handling here
  },
  handleSignUp: function(userInfo) {
    $.ajax({
      url: "/users",
      method: "POST",
      data: userInfo
    }).done(this.renderMain);
    //.error(function()) TODO: Implement error handling
  },
  handleSignUpRequest: function() {
    this.setState({user: {}, mode: "signUpForm"});
  },
  render: function() {
    //TODO: Refactor this into one return statement
    //and logic that precedes it
    if (this.state.mode === "main") {
      return (
        <Main user={this.state.user}/>
      );
    } else if (this.state.mode === "landing") {
      return (
        <div>
          <SignUp onSignUpRequest={this.handleSignUpRequest} />
          <LogIn onLogIn={this.handleLogIn} />
        </div>
      );  
    } else if (this.state.mode === "signUpForm") {
      return (
        <SignUpForm onSignUp={this.handleSignUp}/>
      );
    }
  }
});