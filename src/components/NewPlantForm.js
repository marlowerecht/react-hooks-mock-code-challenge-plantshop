import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {

  const plantOutline = {
    name: "",
    image: "",
    price: 0
  }

  const [ plantData, setPlantData ] = useState(plantOutline)

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewPlant(plantData)
    setPlantData(plantOutline)
  }

  const handleChange = (e) => {
    setPlantData(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={plantData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
