var CommentLi = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h7>{this.props.data.author}</h7>
        <p className="commentText">{this.props.data.text}</p>
      </div>
    );
  }
});