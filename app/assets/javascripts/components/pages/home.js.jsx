var Home = React.createClass({
  //TODO: What to add to this view?
  render: function() {
    return (
      <div className="main">
        <Feed data={this.props.data} />
      </div>
    );
  }
});