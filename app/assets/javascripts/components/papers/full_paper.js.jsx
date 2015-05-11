var FullPaper = React.createClass({
  //TODO: Figure out how to render the paper here
  render: function() {
    return (
      <div className="paper">
        <h2>{this.props.paper.title}</h2>
        <h5>By {this.props.user.first_name} {this.props.user.last_name} </h5>
        <h5>{this.props.paper.rating}</h5>
        <button type="button" onClick={this.upvote}>Like</button>
        <p>The paper will somehow be rendered here</p>
        <div>
          <CommentBox paper={this.props.paper} user={this.props.user}/>
        </div>
      </div>
    );
  }
});