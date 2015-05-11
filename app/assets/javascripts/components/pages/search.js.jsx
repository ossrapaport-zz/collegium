var Search = React.createClass({
  search: function(e) {
    if (e.charCode === 13) {    
      e.preventDefault();
      var searchTags = React.findDOMNode(this.refs.search_field).value.trim();
      this.props.onSearch(searchTags);
    }
  },
  render: function() {
    return (
      <div className="search-div">
        <input type="text" onKeyPress={this.search} placeholder="Search by tags" ref="search_field"/>
        <Feed data={this.props.data} /> 
      </div>
    );
  }
});