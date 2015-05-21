var CommentBox = React.createClass({
  //Sets the initial state to no data - comments will go here
  getInitialState: function() {
    return {data: []};
  },
  //Makes a post request to the server with comment data
  //upon a user's comment
  handleCommentSubmit: function(commentText) {
    $.ajax({
      url: "/papers/" + this.props.data.paper.id + "/comments",
      method: "POST",
      data: {
        text: commentText,
        user_id: this.props.current_user.id
      }
    }).done(function(comment) {
      //Adds the most recent comment to the current comments
      //stored in data - this is optimistic updating
      var comments = this.state.data;
      var updatedComments = comments.concat([comment]);
      this.setState({data: updatedComments});
    }.bind(this));
    //TODO: Implement error handling
  },
  //Makes a call to the server for every comment on this paper
  loadCommentsFromServer: function() {
    $.get("/papers/" + this.props.data.paper.id + "/comments").done(function(comments) {
      this.setState({data: comments});
    }.bind(this));
  },
  //Once the component is on the DOM, makes frequent calls to the server
  //for any new comments
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, 2000);
  },
  //Renders the comment box to the page
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