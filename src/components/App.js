import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './Imagelist';


class App extends React.Component{
    state = {images : [] };

    onSearchSubmit= async (term)=>{
   const response = await unsplash.get('/search/photos',{
            params: { query: term }
        });
        console.log(response.data);
        this.setState({ images:response.data.results });
    }


    render(){
        return (
            <div className="ui container">
         <SearchBar onSubmit={this.onSearchSubmit}/>
         <ImageList images={this.state.images}/>
         found : {this.state.images.length} images
            </div>
        );
    }
}

export default App;