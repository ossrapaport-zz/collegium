var Main = React.createClass({
  getInitialState: function() {
    return {page: "home", show_modal: false, data: []};
  },
  navigatePage: function(newState) {
    this.setState({page: newState});
  },
  showPaper: function(paperID) {
    console.log("You have to show the paper please");
    //TODO: Turn this on when papers can be uploaded
    /*$.get("/papers/" + paperID).done(function(paperData) {
      this.setState({page: "paper", data: paperData});
    }.bind(this));*/
  },
  searchForPapers: function(paperTags) {
    //TODO: Set up the search
    console.log("You gotta search");
  },
  prepareUpload: function() {
    this.setState({show_modal: true});
  },
  concludeUpload: function() {
    this.setState({show_modal: false});
  },
  loadPapersFromServer: function() {
    if (this.state.page === "home") {
      $.get("/papers").done(function(papers) {
        console.log("Hitting this");
        //this.setState({data: papers});
      });
    } else if (this.state.page === "profile") {
      $.get("/users/" + this.props.user.id + "/papers").done(function(papers) {
        console.log("Still figuring out papers");
        //this.setState({data: papers});
      });
    } 
  },
  componentDidMount: function() {
    this.loadPapersFromServer();
    setInterval(this.loadPapersFromServer, 2000);
  },
  render: function() {
    var page;
    if (this.state.page === "home") {
      page = <Home user={this.props.user} data={this.state.data}/>               
    } else if (this.state.page === "search") {
      page = <Search user={this.props.user} onSearch={this.searchForPapers}/> 
    } else if (this.state.page === "profile") {
      page = <Profile user={this.props.user} data={this.state.data} />
    } else if (this.state.page === "paper") {
      page = <FullPaper paper={this.state.data} user={this.props.user}/> 
    }
    return (
      <div>
        <TopBar user={this.props.user} onNavigation={this.navigatePage} onUpload={this.prepareUpload}/>
        {page}
        <Upload showModal={this.state.show_modal} afterUpload={this.concludeUpload} user={this.props.user} />
      </div>
    );
  }
});