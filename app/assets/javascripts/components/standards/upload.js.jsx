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
      self.setState({
        data_uri: upload.target.result
      });
    }

    
    reader.onloadend = function() {
      $.ajax({
        url: "/papers",
        method: "POST",
        data: {
          title: fileTitle,
          avatar: this.result,
          user_id: parseInt(userID) 
        } 
      }).done(function() {
        debugger;
        self.finishUpload();
      });
    }

    reader.readAsDataURL(file);
    
    /*$.ajax({
      url: "/papers",
      method: "POST",
      data: {
        title: fileTitle,
        avatar: file,
        user_id: parseInt(userID) 
      }
    }).done(this.finishUpload);*/
  },
  finishUpload: function() {
    console.log("Finished the upload");
    React.findDOMNode(this.refs.title).value = "";
    React.findDOMNode(this.refs.file).value = "";
    this.props.afterUpload();
  },
  render: function() {
    return (
      <form id="modal" onSubmit={this.uploadFile} className={this.props.showModal ? "" : "hidden" }>
        <h5 onClick={this.finishUpload}> X </h5>
        <input type="text" placeholder="The title of the paper" ref="title" />
        <input type="file" ref="file" />
        <input type="submit" value="Upload my file" />
      </form>
    );
  }
});