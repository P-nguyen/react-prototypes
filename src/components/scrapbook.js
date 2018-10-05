import React from 'react';
import "./scrapbook.css";
import imageData from './image_data';
import ScrapbookImage from './scrapbook_images';

export default () => {

    const images = imageData.map((item, index)=>{
       return <ScrapbookImage about={item} key={index}/>;
    });

    console.log(images);
    return(
        <div className="scrapbook-container">
            {images}
        </div>
    );
}