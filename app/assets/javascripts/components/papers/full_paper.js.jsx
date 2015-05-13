var FullPaper = React.createClass({
  getInitialState: function() {
    return {likes: this.props.data.paper.rating};
  },
  upvote: function() {
    var incrementedLikes = this.state.likes ++;
    this.setState({likes: incrementedLikes})
    $.ajax({
      url: "/papers/" + this.props.data.paper.id + "/upvote",
      method: "PUT"
    }).done(function(paperData) {
      this.setState({likes: paperData.paper.rating})
    }.bind(this));
  },
  render: function() {
    var pdfURL = this.props.data.paper.attachment.url;
    return (
      <div className="paper">
        <h2>{this.props.data.paper.title}</h2>
        <h5>By {this.props.data.user.first_name} {this.props.user.last_name} </h5>
        <h5>Likes: {this.state.likes}</h5>
        <button type="button" onClick={this.upvote}>Like</button>
        <object type="application/pdf" className="pdf" data={pdfURL}></object> 
        <div>
          <CommentBox data={this.props.data}/>
        </div>
      </div>
    );
  }
});