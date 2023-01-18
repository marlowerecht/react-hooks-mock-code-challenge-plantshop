import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {

  const plantArray = plantList.map(plant => {
    return <PlantCard key={plant.id} image={plant.image} name={plant.name} price={plant.price}/>
  })

  return (
    <ul className="cards">{plantArray}</ul>
  );
}

export default PlantList;
