var Upload = React.createClass({
  getInitialState: function() {
    return {data_uri: null }
  },
  uploadFile: function() {
    var fileTitle = React.findDOMNode(this.refs.title).value.trim();
    var userID = parseInt( this.props.user.id );
    
    var self = this;
    var reader = new FileReader();
    var file = React.findDOMNode(this.refs.file).files[0];

    reader.onload = function(upload) {
      $.ajax({
        url: "/papers",
        method: "POST",
        data: {
          title: fileTitle,
          attachment: this.result,
          user_id: parseInt(userID) 
        } 
      }).done(function(paperData) {
        self.finishUpload(paperData);
      });
    }

    reader.readAsDataURL(file);
  },
  finishUpload: function(paperData) {
    React.findDOMNode(this.refs.title).value = "";
    React.findDOMNode(this.refs.file).value = "";
    this.props.afterUpload();
  },
  render: function() {
    return (
      <div className="modal"  className={this.props.showModal ? "" : "hidden" }>
        <h5 onClick={this.finishUpload}> X </h5>
        <input type="text" placeholder="The title of the paper" ref="title" />
        <input type="file" ref="file" />
        <input type="submit" onClick={this.uploadFile} value="Upload my file" />
      </div>
    );
  }
});