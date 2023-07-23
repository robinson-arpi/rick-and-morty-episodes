import React from 'react';

const Episodes = ({episodes = []}) => {
    return (
        <div className = "row">
            {episodes.map((item, index) => (
                <div key={index} className = "col pb-4">
                    <div className="card text-white custom-border" style= {{minWidth: "350px"}}>
                        <div className="card-header">
                        {item.episode}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text"><span className="bold-text">On air: </span>{item.air_date}</p>
                            <p className="card-text"><span className="bold-text">Created: </span>{item.created}</p>
                        </div>
                    </div>
                </div>
                
                ))}
        </div>
    );
};

export default Episodes