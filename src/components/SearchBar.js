import React from 'react';


class SearchBar extends React.Component {
    state={term:''};

    onFormSubmit = (event)=>{
        event.preventDefault();
     // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    btnChange = (e)=>{
        this.setState({
            term:e.target.value
        })
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit}  
                className="ui form">
                    <div className="field">
                        <label> Search for cars</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.btnChange}/>
                    </div>
                </form>
            </div>
        );        
    }
};

export default SearchBar;