import React, { useState, useEffect, useContext } from "react";
import {useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Details = () => {
	const { store } = useContext(Context);
	const {kind, uid} = useParams(); // kind can be any of: "planets", "people" or "starships"
	const cardData = store [kind].find (card => card.uid === uid);

 
	console.log ("card" , cardData)
	return (
		<>
		{cardData && cardData.details && (
			<>
			{kind === "people" && (
			<div className="card col-6" > 
				<div className="card-header"> {cardData.name} </div> 	
				<ul className="list-group list-group-flush">
				<li className="list-group-item" > Skin color: {cardData.details.properties.skin_color} </li>
				<li className="list-group-item" > Mass: {cardData.details.properties.mass} </li>
				<li className="list-group-item" > Height: {cardData.details.properties.height} </li>				
				<li className="list-group-item" > {cardData.details.description} </li>	
				</ul>
			</div> 
			)}
			{kind === "planets" && (
			<div className="card col-6" > 
				<div className="card-header">Name: {cardData.name} </div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Gravity: {cardData.details.properties.gravity} </li>
						<li className="list-group-item">Population {cardData.details.properties.population} </li>
						<li className="list-group-item">Terrain: {cardData.details.properties.terrain} </li>
						<li className="list-group-item">Climate: {cardData.details.properties.climate} </li>
						<li className="list-group-item"> {cardData.details.description} </li>
					</ul> 
			</div> 
			)}
			{kind === "starships" && (
			<div className="card col-6" > 
			<div className="card-header"> {cardData.name} </div>
				<ul className="list-group list-group-flush">
				<li className="list-group-item">Crew: {cardData.details.properties.crew} </li>
				<li className="list-group-item">Length {cardData.details.properties.length} </li>
				<li className="list-group-item">Model: {cardData.details.properties.model} </li>
				<li className="list-group-item">Starship Class: {cardData.details.properties.starship_class} </li>
				<li className="list-group-item"> {cardData.details.description} </li>
				</ul> 
			</div> 
			)}
			
			</>
			)} 
		</>
	);
};
