//The home view where the user lands upon logging in
var Home = React.createClass({
  //TODO: What to add to this view?
  handlePaperClick: function(paperID) {
    this.props.onPaperSelect(paperID);
  },
  render: function() {
    return (
      <div id="home-div">
        <Feed data={this.props.data} onPaperClick={this.handlePaperClick} />
      </div>
    );
  }
});