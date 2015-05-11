var CommentForm = React.createClass({
  handleComment: function(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      var comment = React.findDOMNode(this.refs.comment).value.trim();
      if (!comment) return;
      React.findDOMNode(this.refs.comment).value = "";
      this.props.onCommentSubmit(comment);
    }
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleComment}>
        <input type="text" ref="comment" placeholder="What do you think about this paper?" 
        onKeyPress={this.handleComment} />
      </form>
    );
  }
});