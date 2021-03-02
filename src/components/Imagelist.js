import React from 'react';

const ImageList = (props)=>{
    const images = props.images.map(({id,alt_description,urls})=>{
        return (
            // very important rule the id prop is for the root element only to be more perfurmancr as in div
    <div key={id}>   
        <h1>{alt_description}</h1>
        <img  
        src={urls.regular}
        /> 
    </div>
        );
    });
        return <div>{images}</div>
}


export default ImageList;