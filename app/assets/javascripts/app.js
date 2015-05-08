var App = {};


App.Main = React.createClass({
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
    if (this.state.user) {
      <App.Home user={this.state.user} />
    } else {
      <App.SignUp /> 
      <App.LogIn  onLogIn={this.handleLogIn} /> //How can I feed this errors?
    }
  },



});



React.render(<App.Main/>, $("#app-wrapper"));