var CommentList = React.createClass({
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