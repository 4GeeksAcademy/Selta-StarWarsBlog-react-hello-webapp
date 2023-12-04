import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 const Card = ({uid, name, linkPath, buttonText}) => {

    //needs favorite

    return (
        <div className="col-md-4 p-4 m-3">
            <div className="card border" >
                <img src="https://placehold.co/400x200" className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                    <h5 className="card-title text-dark font-weight-bold mb-4"> {name} </h5>
                    </div>
                    <div className="text-center"> 
                        <div className="d-flex justify-content-between mb-2">
                            <Link to={`/details/${linkPath}/${uid}`} className="btn btn-success" >
                                {buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );



};
export default Card;