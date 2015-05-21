var Main = React.createClass({
  //The view's state tracks the page, whether the upload modal
  //is to be shown, and the current paper data
  getInitialState: function() {
    return {page: "home", show_modal: false, data: []};
  },
  //Changes the state's current page to the newly selected one
  navigatePage: function(newPage) {
    var newState = {
      page: newPage 
    }
    if (newPage === "search") {
      newState.data = [];
    }
    this.setState(newState);
  },
  //Renders the page for a single paper 
  showPaper: function(paperID) {
    $.get("/papers/" + paperID).done(function(paperData) {
      this.setState({page: "paper", data: paperData});
    }.bind(this));
  },
  //Searches for papers by tags coming from the Search view
  searchForPapers: function(paperTags) {
    $.post("/papers/search", {
      tags: paperTags
    }).done(function(papers) {
      this.setState({data: papers});
    }.bind(this));
  },
  //Shows the modal upon the user's click of Upload Your Work
  prepareUpload: function() {
    this.setState({show_modal: true});
  },
  //Once the upload is done, or the user has exited, 
  //the modal is hidden
  concludeUpload: function() {
    this.setState({show_modal: false});
  },
  //Logs the user out upon the user's click of Log Out
  handleLogOut: function() {
    $.ajax({
      url: "/sessions",
      method: "DELETE"
    }).done(function() {
      this.props.onLogOut();
    }.bind(this));
  },
  //Gets the relevant papers, whether all or just 
  //the user's, from the server and stores them as state
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
  //Before the component is on the DOM, makes call
  //to the server for paper data 
  componentWillMount: function() {
    this.loadPapersFromServer();
  },
  //Once the component is on the DOM, continues making
  //calls to find new uploads
  componentDidMount: function() {
    setInterval(this.loadPapersFromServer, 2000);
  },
  //Renders the view depending on the state's page
  render: function() {
    var page;
    if (this.state.page === "home") {
      page = <Home onPaperSelect={this.showPaper} user={this.props.user} data={this.state.data}/>               
    } else if (this.state.page === "search") {
      page = <Search onPaperSelect={this.showPaper} data={this.state.data} user={this.props.user} onSearch={this.searchForPapers}/> 
    } else if (this.state.page === "profile") {
      page = <Profile onPaperSelect={this.showPaper} user={this.props.user} data={this.state.data} />
    } else if (this.state.page === "paper") {
      page = <FullPaper data={this.state.data} current_user={this.props.user}/> 
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