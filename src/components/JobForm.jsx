var React = require('react');
var JobActions = require('../reflux/job-actions.jsx');
//var JobStore = require('../reflux/jobs-store.jsx');

var btnStyle = {
               background: "pink"
           };


var JobForm = React.createClass({

  componentDidMount: function() {
    //componentHandler.upgradeDom();
    //var button = this.refs.btnAddExpense;
    //button.addEventListener('click', this.onClick);
    this.refs.btnClick.addEventListener('click', this.onClick);
    this.refs.inputChange.addEventListener('change', this.onInputChange);
  },

  getInitialState: function(){
    return {newText:""};

  },
  onInputChange: function(e){
    console.log("OnInputChange...");

    this.setState({newText: e.target.value});
  },
  /*
  onChange: function(){
    this.setState({jobs: })
  }, */

  onClick: function(e) {
    e.preventDefault();
    console.log("Button clicked");
    console.log("newText:", this.state.newText );

    if (this.state.newText) {
      console.log("Posting Job...");

      JobActions.postJob(this.state.newText);
    }
    this.setState({newText: ""}); //Clear the entry field
    //alert("Don't ever write production code like this or I'll beat you!");
  },

  render: function() {
    return (
      <div>
        <div>
          <input ref= "inputChange" placeholder = "Add Job" value = {this.state.newText} onChange = {this.onInputChange} />

        </div>
        <div>
          <button ref = "btnClick" onClick={this.onClick} style={btnStyle} >Click Me!</button>

        </div>


      </div>
    );
  }

});

module.exports = JobForm;
/*


  onClick: function(e){
    console.log("button clicked");

    if (this.state.newText) {
      JobActions.postJob(this.state.newText);
    }
    this.setState({newText:""});
  },

  render: function(){

    //Currently not using imgStyle
    var imgStyle = {
      color: 'red'
      //backgroundSize: '75px 75px'
    };

    return (






        <div>
          <input
            placeholder = "Add Value"
            value = {this.state.newText}
            onChange = {this.onInputChange}
          />
        <button onClick = {this.onClick}>
          Add Item
        </button>

        </div>


    );
  }




<div className="mdl-grid mdl-cell">
  <form>


    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
      <input type="radio" id="option-1" className="mdl-radio__button" name="options" value="Painting" checked />
      <span className="mdl-radio__label" style={imgStyle}>Painting</span>
    </label>
    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
      <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="Carpentry" />
      <span className="mdl-radio__label">Carpentry</span>
    </label>
    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-3">
      <input type="radio" id="option-3" className="mdl-radio__button" name="options" value="Tiling" />
      <span className="mdl-radio__label">Tiling</span>
    </label>
    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
      <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="Electrician" />
      <span className="mdl-radio__label">Electrician</span>
    </label>

    <input placeholder="Name" type="text"  value="" required />
    <input placeholder="Email address" type="email" onblur="this.setAttribute('value', this.value);" value="" required />
    <span className="validation-text">Please enter a valid email address.</span>
    <input placeholder="Location" type="text" value="" required />
    <div className="flex">
      <textarea placeholder="Message" rows="1" required></textarea>
    </div>
    <button>Send</button>

    <label className="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-1" >
      <input type="checkbox" id="icon-toggle-1" className="mdl-icon-toggle__input" checked/>
      <p className="mdl-icon-toggle__label">Carpentry</p>
    </label>
    <label className="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-2" >
      <input type="checkbox" id="icon-toggle-2" className="mdl-icon-toggle__input" />
      <i className="mdl-icon-toggle__label material-icons">format_italic</i>
    </label>

  </form> */
