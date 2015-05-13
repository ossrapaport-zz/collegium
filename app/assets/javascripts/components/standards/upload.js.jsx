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
    debugger;
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
        width: "200px",
        max_selected_options: 5
      });
    }.bind(this));
  },
  render: function() {
    return (
      <div className="modal"  className={this.props.showModal ? "" : "hidden" }>
        <h5 onClick={this.finishUpload}> X </h5>
        <select data-placeholder="Select some tags" className="chosen-select" ref="tags" multiple>
          {this.state.data.map(function(tag) {
            return (
              <option value={tag.id} key={tag.id}>{tag.name}</option>
            );
          }, this)}
        </select>
        <input type="text" placeholder="The title of the paper" ref="title" />
        <input type="file" ref="file" />
        <input type="submit" onClick={this.uploadFile} value="Upload my file" />
      </div>
    );
  }
});