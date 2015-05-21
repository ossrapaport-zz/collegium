//The feed, where any papers that are present are shown
var Feed = React.createClass({
  //Tells the Main view that a paper has been clicked
  handlePaperClick: function(e) {
    var paperID = parseInt( e.currentTarget.getAttribute("data-id") );
    this.props.onPaperClick(paperID);
  },
  //Renders the papers if there are any; if not, shows nothing
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