var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleCommentSubmit: function(commentText) {
    $.ajax({
      url: "/papers/" + this.props.paper.id + "/comments",
      method: "POST",
      data: {
        text: commentText,
        user_id: this.props.user.id
      }
    }.bind(this)).done(function(comment) {
      var comments = this.state.data;
      var updatedComments = commments.concat([comment]);
      this.setState({data: updatedComments});
    });
    //TODO: Implement error handling
  },
  loadCommentsFromServer: function() {
    $.get("/papers/" + this.props.paper.id + "/comments").done(function(comments) {
      this.setState({data: comments});
    }.bind(this));
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, 2000);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1> Comments </h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});