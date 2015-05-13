var LogIn = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var emailAddress = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if (!password || !emailAddress) return;
    this.props.onLogIn({email: emailAddress, password: password});
    React.findDOMNode(this.refs.email).value = "";
    React.findDOMNode(this.refs.password).value = "";
    return;
  },
  render: function() {
    return (
      <div id="log-in-div" >
        <p>Log in if you already have an account...</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your email" ref="email" />
          <input type="password" placeholder="Your password" ref="password" />
          <input type="submit" id="login-button" value="Log In" />
        </form>
      </div>
    );
  }
});
