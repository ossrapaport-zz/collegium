var Upload = React.createClass({
  //Starts with no data in the state - tags will go here
  getInitialState: function() {
    return {data: []}
  },
  //A helper function to find all the selected values
  //from the tags menu
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
  //Uploads the paper and all its data to the server
  uploadFile: function() {
    //Gets the paper's title and the user who wrote it
    var fileTitle = React.findDOMNode(this.refs.title).value.trim();
    var userID = parseInt( this.props.user.id );
    //Gets the tags using the helper function getSelectValues
    var tagMenu = (React.findDOMNode(this.refs.tags)); 
    var tags = this.getSelectValues(tagMenu);
    //Stores this view in a variable for access
    var self = this;
    //Initializes the JavaScript FileReader API
    var reader = new FileReader();
    //Gets the actual file data from the Choose File input
    var file = React.findDOMNode(this.refs.file).files[0];
    //Reads the file as an encoded base64 string
    reader.onload = function(upload) {
      //Once it has read it, sends it along with other data
      //to the server
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
    //Calls the reading function of this instance, reader, 
    //of the FileReader API
    reader.readAsDataURL(file);
  },
  //Once the upload is complete, wipe the upload fields
  //and tell the Main view the upload is done 
  finishUpload: function(paperData) {
    React.findDOMNode(this.refs.title).value = "";
    React.findDOMNode(this.refs.file).value = "";
    debugger;
    //TODO: Clear the selected tags upon upload or close
    React.findDOMNode(this.refs.tags).removeAttribute("selected");
    this.props.afterUpload();
  },
  //Stores the tags in the state and initializes
  //a Chosen menu interface
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
  //Renders the view to the page, iterating through the tags
  //and making them select options
  //Also has an X button in case the user does not want to continue 
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