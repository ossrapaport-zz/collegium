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
    debugger;
    this.setState({user: {}, mode: "signUpForm"});
  },
  handleLogOut: function() {
    this.setState({mode: "landing"});
  },
  render: function() {
    //TODO: Refactor this into one return statement
    //and logic that precedes it
    if (this.state.mode === "main") {
      return (
        <Main onLogOut={this.handleLogOut} user={this.state.user}/>
      );
    } else if (this.state.mode === "landing") {
      return (
        <div id="landing-div">
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