//The home view where the user lands upon logging in
var Home = React.createClass({
  //Informs the Main view that a paper has been clicked
  handlePaperClick: function(paperID) {
    this.props.onPaperSelect(paperID);
  },
  //Renders the feed
  render: function() {
    return (
      <div id="home-div">
        <Feed data={this.props.data} onPaperClick={this.handlePaperClick} />
      </div>
    );
  }
});