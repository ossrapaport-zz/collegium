var Main = React.createClass({
  getInitialState: function() {
    return {page: "home", show_modal: false, data: []};
  },
  navigatePage: function(newPage) {
    var newState = {
      page: newPage 
    }
    if (newPage === "search") {
      newState.data = [];
    }
    this.setState(newState);
  },
  showPaper: function(paperID) {
    $.get("/papers/" + paperID).done(function(paperData) {
      this.setState({page: "paper", data: paperData});
    }.bind(this));
  },
  searchForPapers: function(paperTags) {
    $.post("/papers/search", {
      tags: paperTags
    }).done(function(papers) {
      this.setState({data: papers});
    }.bind(this));
  },
  prepareUpload: function() {
    this.setState({show_modal: true});
  },
  concludeUpload: function() {
    this.setState({show_modal: false});
  },
  handleLogOut: function() {
    $.ajax({
      url: "/sessions",
      method: "DELETE"
    }).done(function() {
      this.props.onLogOut();
    }.bind(this));
  },
  loadPapersFromServer: function() {
    if (this.state.page === "home") {
      $.get("/papers").done(function(papers) {
        this.setState({data: papers});
      }.bind(this));
    } else if (this.state.page === "profile") {
      $.get("/users/" + this.props.user.id + "/papers").done(function(papers) {
        this.setState({data: papers});
      }.bind(this));
    } 
  },
  componentWillMount: function() {
    this.loadPapersFromServer();
  },
  componentDidMount: function() {
    setInterval(this.loadPapersFromServer, 2000);
  },
  render: function() {
    var page;
    if (this.state.page === "home") {
      page = <Home onPaperSelect={this.showPaper} user={this.props.user} data={this.state.data}/>               
    } else if (this.state.page === "search") {
      page = <Search onPaperSelect={this.showPaper} data={this.state.data} user={this.props.user} onSearch={this.searchForPapers}/> 
    } else if (this.state.page === "profile") {
      page = <Profile onPaperSelect={this.showPaper} user={this.props.user} data={this.state.data} />
    } else if (this.state.page === "paper") {
      page = <FullPaper data={this.state.data} user={this.props.user}/> 
    }
    return (
      <div id="main-div">
        <TopBar user={this.props.user} onNavigation={this.navigatePage} onUpload={this.prepareUpload} onLogOut={this.handleLogOut}/>
        {page}
        <Upload showModal={this.state.show_modal} afterUpload={this.concludeUpload} user={this.props.user} />
      </div>
    );
  }
});