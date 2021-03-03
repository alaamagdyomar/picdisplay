import React from 'react';
import './ImageList.css';

import ImageCard from './ImageCard'

const ImageList = (props)=>{
    const images = props.images.map((image)=>{
        return (
            // very important rule the id prop is for the root element only to be more perfurmancr as in div
            <ImageCard key={image.id} image={image}/>
        );
    });
    return <div className="image-list">{images}</div>
}


export default ImageList;