var Upload = React.createClass({
  uploadFile: function() {
    var fileTitle = React.findDOMNode(this.refs.title).value.trim();
    var filePath = React.findDOMNode(this.refs.file).value.trim();
    var userID = parseInt( this.props.user.id );
    //TODO: Turn this on once uploading is possible
    /*$.ajax({
      url: "/papers",
      method: "POST",
      data: {
        title: fileTitle,
        attachment: filePath,
        user_id: userID 
      }
    }).done(this.finishUpload.bind(this));*/
  },
  finishUpload: function() {
    React.findDOMNode(this.refs.title).value = "";
    React.findDOMNode(this.refs.file).value = "";
    this.props.afterUpload();
  },
  render: function() {
    return (
      <div id="modal" className={this.props.showModal ? "" : "hidden" }>
        <h5 onClick={this.finishUpload}> X </h5>
        <input type="text" placeholder="The title of the paper" ref="title" />
        <input type="file" ref="file" />
        <input type="submit" onClick={this.uploadFile} value="Upload my file" />
      </div>
    );
  }
});