//The top-level view of the app - defaults to a log in/ sign up page
var Landing = React.createClass({
  getInitialState: function() {
    return {
      user: {}, 
      mode: "landing"
    };
  },
  //Sets a user as logged in and re-renders the page
  renderMain: function(user) {
    this.setState({user: user, mode: "main"});
  },
  renderErrors: function(errors) {
    var errorMessage = errors.responseJSON.error;
    var errorTag = $("p").text(errorMessage);
    var formNode = React.findDOMNode(this.refs.form);
    formNode.appendChild(errorTag[0]);
  },
  //Makes post request to log in user
  handleLogIn: function(logInInfo) {
    $.ajax({
      url: "/sessions",
      method: "POST",
      data: logInInfo
    }).done(this.renderMain)
    .error(this.renderErrors);
  },
  //Makes post request to create user
  handleSignUp: function(userInfo) {
    $.ajax({
      url: "/users",
      method: "POST",
      data: userInfo
    }).done(this.renderMain);
    //.error(function()) TODO: Implement error handling
  },
  //Re-renders the page with the complete sign up form
  handleSignUpRequest: function() {
    this.setState({user: {}, mode: "signUpForm"});
  },
  //Logs a user out and returns to the log in / sign up page
  handleLogOut: function() {
    this.setState({mode: "landing"});
  },
  //Renders HTML depending on the state of the app
  render: function() {
    var viewToRender;
    if (this.state.mode === "main") {
      viewToRender = <Main onLogOut={this.handleLogOut} user={this.state.user}/>
    } else if (this.state.mode === "landing") {
        viewToRender =  <div id="landing-div">
                         <SignUp onSignUpRequest={this.handleSignUpRequest} />
                         <LogIn ref="form" onLogIn={this.handleLogIn} />
                        </div>  
    } else if (this.state.mode === "signUpForm") {
      viewToRender = <SignUpForm ref="form" onSignUp={this.handleSignUp}/>
    }

    return viewToRender;
  }
});