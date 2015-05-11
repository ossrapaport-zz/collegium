var SignUp = React.createClass({
  handleSignUpSubmit: function(e) {
    e.preventDefault();
    this.props.onSignUpRequest();
  },
  render: function() {
    return (
      <form className="firstSignForm" onSubmit={this.handleSignUpSubmit}>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
});