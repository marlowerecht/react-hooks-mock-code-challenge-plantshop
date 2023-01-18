import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ search, setSearch ] = useState("")
  const handleSetSearch = (newSearch) => {
    setSearch(newSearch)
    plantsToDisplay()
  }
  const [ plantList, setPlantList ] = useState([])
  const [ filterPlants, setFilterPlants ] = useState([])
  const url = "http://localhost:6001/plants"

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(plantData => {
        setPlantList(plantData)
        setFilterPlants(plantData)})
  }, []);

  //make POST request here
  const addNewPlant = (newPlant) => {
    console.log(newPlant)

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => setPlantList(prev => [...prev, data]))
  }

  const plantsToDisplay = (search) => {
    //setFilterPlants
    let plantsToShow = plantList.filter(plant => {
      return plant.name.toLowerCase().includes(search.toLowerCase())
    })
    setFilterPlants(plantsToShow)
  }
  
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search plantList={plantList} search={search} handleSetSearch={handleSetSearch} plantsToDisplay={plantsToDisplay}/>
      <PlantList plantList={filterPlants}/>
    </main>
  );
}

export default PlantPage;
