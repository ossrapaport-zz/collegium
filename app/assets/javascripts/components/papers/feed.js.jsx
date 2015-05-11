var Feed = React.createClass({
  handlePaperClick: function(e) {
    e.preventDefault();
    debugger;
    //TODO: Find out how to get the paper's ID
  },
  render: function() {
    //TODO: Check if this works
    /*var paperNodes = this.props.data.map(function(paper) {
      return (
        <PaperLi data={paper} key={paper.id} onPaperClick={this.handlePaperClick} />
      );
    });*/
    //{paperNodes}
    return (
      <div className="feed">
        Paper data coming soon
      </div>
    );
  }
});