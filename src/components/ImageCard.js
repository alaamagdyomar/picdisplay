import React from 'react';
import './ImageList.css';


class ImageCard extends React.Component {
    constructor(props){
        super(props);
        
        this.imageRef = React.createRef();
    }

    componentDidMount(){
                this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans=()=>{
        console.log(this.imageRef.current.clientHeight);
    }

    render () {
    const {alt_description , urls} = this.props.image;
        return (
            <>
            <div>
                <h1>{alt_description}</h1>
                <img 
                ref={this.imageRef}
                src={urls.regular}
                />
            </div>

            </>
        );
    }
}

export default ImageCard;