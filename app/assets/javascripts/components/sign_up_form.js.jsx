var SignUpForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      first_name: React.findDOMNode(this.refs.first_name).value.trim(),
      last_name: React.findDOMNode(this.refs.last_name).value.trim(),
      email: React.findDOMNode(this.refs.email).value.trim(),
      password: React.findDOMNode(this.refs.password).value.trim(),
      password_confirmation: React.findDOMNode(this.refs.password_confirmation).value.trim(),
      school_name: React.findDOMNode(this.refs.school_name).value.trim(),
      school_address: React.findDOMNode(this.refs.school_address).value.trim(),
      school_state: React.findDOMNode(this.refs.school_state).value.trim(),
      school_zipcode: parseInt( React.findDOMNode(this.refs.school_zipcode).value.trim() ) 
    };
    this.props.onSignUp(data);
  },
  render: function() {
    return (
      <form className="signUpForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your first name" ref="first_name" />
        <input type="text" placeholder="Your last name" ref="last_name" />        
        <input type="text" placeholder="Your email" ref="email" />
        <input type="password" placeholder="Your password" ref="password" />
        <input type="password" placeholder="Confirm your password" ref="password_confirmation" />
        <input type="text" placeholder="Your school" ref="school_name" />
        <input type="text" placeholder="Your school's address" ref="school_address" />
        <input type="text" placeholder="Your school's state" ref="school_state" />
        <input type="text" placeholder="Your school's zipcode" ref="school_zipcode" />        
        <input type="submit" value="Create your profile" />
      </form>
    );
  }
});