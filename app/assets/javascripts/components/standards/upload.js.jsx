var Upload = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  getSelectValues: function(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0; i < options.length; i ++) {
      opt = options[i];
      if (opt.selected) {
        result.push( parseInt(opt.value) );
      }
    }
    return result;
  },
  uploadFile: function() {
    var fileTitle = React.findDOMNode(this.refs.title).value.trim();
    var userID = parseInt( this.props.user.id );
    
    var tagMenu = (React.findDOMNode(this.refs.tags)); 
    var tags = this.getSelectValues(tagMenu);
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
          user_id: parseInt(userID),
          tags: tags
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
  componentDidMount: function() {
    $.get("/tags").done(function(tags) {
      this.setState({data: tags});
      $(".chosen-select").chosen({
        no_results_text: "There's no tag with that name",
        width: "50%",
        margin: "0 25%",
        max_selected_options: 5
      });
    }.bind(this));
  },
  render: function() {
    return (
      <div id="modal" className="form" className={this.props.showModal ? "" : "hidden" }>
        <h3 className="close" onClick={this.finishUpload}> X </h3> 
        <input type="text" id="title-input" placeholder="The title of the paper" ref="title" />
        <select data-placeholder="Select some tags" className="chosen-select" ref="tags" multiple>
          {this.state.data.map(function(tag) {
            return (
              <option value={tag.id} key={tag.id}>{tag.name}</option>
            );
          }, this)}
        </select>
        <input className="file-input" type="file" ref="file" />
        <input id="upload-button" type="submit" onClick={this.uploadFile} value="Upload my file" />
      </div>
    );
  }
});