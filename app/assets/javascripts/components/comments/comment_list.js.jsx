var CommentList = React.createClass({
  //Iterates through the comments, supplied as data
  //from the CommentBox view, and renders them
  render: function() {
    var commentNodes = this.props.data.map(function(commentObj) {
      return (
        <CommentLi key={commentObj.comment.id} data={commentObj} />
      ); 
    });
    return (
      <ul>
        {commentNodes}
      </ul>
    );
  }
});