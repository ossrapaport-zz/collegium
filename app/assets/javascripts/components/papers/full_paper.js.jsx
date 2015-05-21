var FullPaper = React.createClass({
  //Keeps track of the paper's likes
  getInitialState: function() {
    return {likes: this.props.data.paper.rating};
  },
  //Increments the likes of the paper and then records that
  //in the database
  upvote: function() {
    var incrementedLikes = this.state.likes ++;
    this.setState({likes: incrementedLikes})
    $.ajax({
      url: "/papers/" + this.props.data.paper.id + "/upvote",
      method: "PUT"
    }).done(function(paperData) {
      this.setState({likes: paperData.paper.rating})
    }.bind(this));
  },
  //Renders the PDF object and its surroundings, like the CommentBox
  render: function() {
    var pdfURL = this.props.data.paper.attachment.url;
    return (
      <div className="paper">
        <h2>{this.props.data.paper.title}</h2>
        <h5>By {this.props.data.user.first_name} {this.props.data.user.last_name} </h5>
        <h5><button type="button" onClick={this.upvote}></button> Likes: {this.state.likes}</h5>
        <object type="application/pdf" className="pdf" data={pdfURL}></object> 
        <div>
          <CommentBox current_user={this.props.current_user} data={this.props.data}/>
        </div>
      </div>
    );
  }
});