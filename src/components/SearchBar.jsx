import React, { Component } from 'react';

class SearchBar extends Component {
    state = { 
            term : '',
         }
    onInputChange = (e) => {
    
        this.setState({term: e.target.value });
        this.props.onChange( this.state.term );
    }

    render() {
     
        return (
           
                <div className="ui segment" style={ {marginTop:'10px'} }>
               
                    <div className="ui search">
                    <label>Search Here </label>
                        <input className="prompt" type="text"
                         onChange={ (e) => { this.onInputChange(e) } }
                         value={ this.state.term.toUpperCase() }
                         placeholder="Search ..." />
                    </div>
                 
                </div>
         );
    }
}
 export default SearchBar;