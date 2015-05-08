var SignUp = React.createClass({
  getInitialState: function() {
    this.setState({ element: React.findDOMNode(this) })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    React.render(SignUpForm, this.state.element);
  },
  render: function() {
    return (
      <form className="firstSignForm" onSubmit={this.handleSubmit}>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
});