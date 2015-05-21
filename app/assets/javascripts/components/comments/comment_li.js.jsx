var CommentLi = React.createClass({
  //Each individual comment's representation
  render: function() {
    return (
      <div className="comment">
        <p>{this.props.data.user.first_name} {this.props.data.user.last_name}</p>
        <p className="commentText">{this.props.data.comment.text}</p>
      </div>
    );
  }
});