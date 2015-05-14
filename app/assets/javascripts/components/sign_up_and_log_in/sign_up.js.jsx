var SignUp = React.createClass({
  handleSignUpSubmit: function(e) {
    e.preventDefault();
    this.props.onSignUpRequest();
  },
  render: function() {
    return (
      <div className="first-sign-up" onSubmit={this.handleSignUpSubmit}>
        <input type="submit" className="signup-button" value="Sign Up" />
      </div>
    );
  }
});