var Home = React.createClass({
  getInitialState: function() {
    return {page: "feed"};
  },
  navigatePage: function(newState) {
    this.setState({page: newState});
  },
  render: function() {
    if (this.state.page === "feed") {
      return (
        <div>
          <TopBar user={this.props.user} onNavigation={this.navigatePage}/>
          <Feed user={this.props.user} />
        </div>
      );
    } else if (this.state.page === "search") {
      return (
        <div>
          <TopBar user={this.props.user} onNavigation={this.navigatePage}/>
          <Search user={this.props.user} /> 
        </div>
      );
    } else if (this.state.page === "profile") {
      return (
        <div>
          <TopBar user={this.props.user} onNavigation={this.navigatePage}/>
          <Profile user={this.props.user} />
        </div>
      );
    }
  }
});