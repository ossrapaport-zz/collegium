var SignUp = React.createClass({
  handleSignUpSubmit: function(e) {
    e.preventDefault();
    debugger;
    this.props.onSignUpRequest();
  },
  render: function() {
    return (
      <form className="first-sign-up" onSubmit={this.handleSignUpSubmit}>
        <input type="submit" className="signup-button" value="Sign Up" />
      </form>
    );
  }
});