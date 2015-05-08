App.SignUp = React.createClass({
  getInitialState: function() {
    this.setState({ element: React.findDOMNode(this) })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    React.render(App.SignUpForm, this.state.element);
  },
  render: function() {
    return (
      <p>Blah blah blah.</p>
      <button onSubmit={this.handleSubmit} ref="sign_up">Sign Up</button>
    );
  }
});