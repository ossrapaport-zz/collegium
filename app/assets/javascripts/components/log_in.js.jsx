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
      <form className="logInForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your email" ref="email" />
        <input type="password" placeholder="Your password" ref="password" />
        <input type="submit" value="Log In" />
      </form>
    );
  }
});

/*<input type="text" placeholder="Your email address" ref="email">
<input type="password" placeholder="Your password" ref="password">  
<input type="submit" value="Log In">
<form className="logInForm" onSubmit={this.handleSubmit}>
<p>If you already have an account...</p>  

</form>*/