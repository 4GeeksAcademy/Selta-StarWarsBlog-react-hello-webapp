import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Details = () => {
	const { store } = useContext(Context);
	const {kind, uid} = useParams(); // kind can be any of: "planets", "people" or "starships"
	const cardData = store [kind].find (card => card.uid === uid)

 
	return (
		<>
		{cardData && (
			<>
			{kind === "people" && (
			<div>
				<p>Name: {cardData.name} </p>
				<p>Skin color:{cardData.details.properties.skin_color} </p>
				<p>Mass: {cardData.details.properties.mass} </p>
				<p>height: {cardData.details.properties.height} </p>
				<p> {cardData.details.description} </p>
			</div> 
			)}
			{kind === "planets" && (
			<div>
				<p>Name: {cardData.name} </p>
				<p>Gravity:{cardData.details.properties.gravity} </p>
				<p>Population {cardData.details.properties.population} </p>
				<p>Terrain: {cardData.details.properties.terrain} </p>
				<p>Climate: {cardData.details.properties.climate} </p>
				<p> {cardData.details.description} </p>
			</div> 
			)}
			{kind === "planets" && (
			<div>
				<p>Name: {cardData.name} </p>
				<p>Crew:{cardData.details.properties.crew} </p>
				<p>Length {cardData.details.properties.length} </p>
				<p>Model: {cardData.details.properties.model} </p>
				<p>Starship Class: {cardData.details.properties.starship_class} </p>
				<p> {cardData.details.description} </p>
			</div> 
			)}
			
			</>
			)} 
		</>
	);
};
