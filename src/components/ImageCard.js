import React from 'react';
import './ImageList.css';


class ImageCard extends React.Component {
    render () {
    const {alt_description , urls} = this.props.image;
        return (
            <div className="iamge-list">
                <h1>{alt_description}</h1>
                <img src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;