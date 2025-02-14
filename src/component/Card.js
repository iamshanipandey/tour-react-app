import React, {useState} from 'react';


function Card({name, info, image, id, price, removeTour}) {
    const [readmore, setReadMore] = useState(false);

   

    function readmoreHandler() {
        setReadMore(!readmore);
    }

    let description = readmore ? info : `${info.substring(0,200)}.....`;    

    return (
        <div className="card">

                <img src={image} className="image"></img>

                <div className="tour-info">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                
                <div>

                    <div className='description'>
                        {description}
                        <span className='read-more' onClick={readmoreHandler}>
                            {readmore? 'Show Less' : 'Read More'}
                        </span>
                    </div>

                </div>
            
            <button className='btn-red' onClick={()=> removeTour(id)}>Not interested</button>
        </div>
    );

}


export default Card;