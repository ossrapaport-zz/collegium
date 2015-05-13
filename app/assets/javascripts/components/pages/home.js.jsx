var Home = React.createClass({
  //TODO: What to add to this view?
  handlePaperClick: function(paperID) {
    this.props.onPaperSelect(paperID);
  },
  render: function() {
    return (
      <div className="main" id="home">
        <Feed data={this.props.data} onPaperClick={this.handlePaperClick} />
      </div>
    );
  }
});