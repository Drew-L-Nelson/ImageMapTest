import React, { useEffect, useState } from 'react';
import './App.css';

import { getHomeImageUrl } from './firebase-config';

const ImageMap = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const areas = [
        { shape: 'circle', coords: [293,285,110], href: '/Books', alt: 'Link to Books Page' },
        { shape: 'poly', coords: [847, 340, 880, 343, 943, 350, 961, 347, 1022, 343, 1076, 349, 1121, 349, 1194, 345, 1217, 338, 1214, 324, 1279, 309, 1278, 297, 1228, 283, 1209, 271, 1178, 249, 1163, 246, 1138,219, 1109, 217, 1091, 219, 1064, 223, 1034, 234, 989 ,246, 962, 255, 943, 275, 945, 289, 934, 295, 914, 302, 935 ,309, 941, 317, 927, 328, 907, 323, 886, 328, 878, 331], href: '/Characters', alt: 'Link 2' },
    ];

    useEffect(() => {
        const fetchImageUrl = async () => {
            const url = await getHomeImageUrl();
            setImageUrl(url);
        };
        
            fetchImageUrl();
      }, []);

    const handleMouseEnter = (event) => {
        // Handle mouse enter event for the area
        console.log('Mouse entered:', event.target);
    };

    const handleMouseLeave = (event) => {
        // Handle mouse leave event for the area
        console.log('Mouse left:', event.target);
    };
    
    return (
        <div className='map-div'>
            {<img src={imageUrl} useMap="#image-map" className='background-map-image'/>}
            <map name="#image-map">
            {areas.map((area, index) => (
                <area 
                    key={index} 
                    shape={area.shape} 
                    coords={area.coords.join(',')} 
                    href={area.href} 
                    alt={area.alt} 
                    className={'red-border'}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
        ))}
      </map>
        </div>
  )
};

export default ImageMap;