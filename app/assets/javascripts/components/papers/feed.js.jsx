var Feed = React.createClass({
  handlePaperClick: function(e) {
    var paperID = parseInt( e.currentTarget.getAttribute("data-id") );
    this.props.onPaperClick(paperID);
  },
  render: function() {
    var paperNodes;
    if (typeof this.props.data !== "undefined" && this.props.data.length) {
      paperNodes = this.props.data.map(function(paper) {
        return (
          <li onClick={this.handlePaperClick} data-id={paper.id} key={paper.id}>{paper.title}</li>
        );
      }.bind(this));
    } else {
      paperNodes = [];
    }

    return (
      <div className="feed">
        {paperNodes}
      </div>
    );
  }
});