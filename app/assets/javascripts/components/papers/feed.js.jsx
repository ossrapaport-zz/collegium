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
          <li className="title" onClick={this.handlePaperClick} data-id={paper.id} key={paper.id}> <img className="paper-icon" src="http://cdn.flaticon.com/png/256/61341.png" width="15" height="15" /> {paper.title}</li>
        );
      }.bind(this));
    } else {
      paperNodes = [];
    }

    return (
      <ul className="feed">
        {paperNodes}
      </ul>
    );
  }
});