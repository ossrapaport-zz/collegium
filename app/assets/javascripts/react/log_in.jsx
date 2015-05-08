App.LogIn = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var emailAddress = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if (!password || !emailAddress) return;
    this.props.onLogIn({email: emailAddress, password: password});
    React.findDOMNode(this.refs.email).value = "";
    React.findDOMNode(this.refs.password).value = "";
    return;
    /*$.ajax({
      url: "/sessions",
      method: "POST",
      data: {
        email: emailAddress,
        password: password
      }
    }).done(function(user) {
      debugger;
    });*/
  },
  render: function() {
    return (
      <form className="logInForm" onSubmit={this.handleSubmit}>
        <p>If you already have an account...</p>  
        <input type="text" placeholder="Your email address" ref="email">
        Password: <input type="password" placeholder="Your password" ref="password">  
        <input type="submit" value="Log In">
      </form>
    );
  }
});