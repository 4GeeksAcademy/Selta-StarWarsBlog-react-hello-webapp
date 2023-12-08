import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

 const Card = ({uid, name, linkPath, buttonText}) => {

    //needs favorite add toggle

    const [favorite, setFavorite] = useState (false);

    //needs use effect
    useEffect (() => {
        const itemInFavorites = store.favorites.some ((favorite) => favorite.uid === uid && favorite.linkPath === linkPath);
        setFavorite(itemInFavorites);

    }, [store.favorites, uid, linkPath] );


    //how to link the actions properly
    const handleFavorite = () => {
        setFavorite((prevFavorite) => !prevFavorite);
        if (favorite) {
          actions.removeFromFavorites(uid, linkPath);
        } else {
          const item = { uid, name, linkPath, buttonText };
          actions.addToFavorites(item);
        }
    };

    return (
        <div className="col-md-4 p-4 m-3">
            <div className="card border" id="cardBorder" >
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
                            <button onClick={handleFavorite} className={`btn btn-dark  &{favorite ? 'btn btn-light' : 'btn btn-dark' }`} > 
                            {favorite? 'Remove from favorites' : 'Add to favorites' } </button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );



};
export default Card;