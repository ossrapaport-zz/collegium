var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <CommentLi key={comment.id} data={comment} />
      ); 
    });
    return (
      <ul>
        {commentNodes}
      </ul>
    );
  }
});