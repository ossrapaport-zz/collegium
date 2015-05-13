var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleCommentSubmit: function(commentText) {
    $.ajax({
      url: "/papers/" + this.props.data.paper.id + "/comments",
      method: "POST",
      data: {
        text: commentText,
        user_id: this.props.current_user.id
      }
    }).done(function(comment) {
      var comments = this.state.data;
      var updatedComments = comments.concat([comment]);
      this.setState({data: updatedComments});
    }.bind(this));
    //TODO: Implement error handling
  },
  loadCommentsFromServer: function() {
    $.get("/papers/" + this.props.data.paper.id + "/comments").done(function(comments) {
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