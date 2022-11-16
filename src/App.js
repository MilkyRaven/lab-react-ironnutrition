import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood'


function App() {
  const [currentFoods, setFoods] = useState(foods)

  const foodDataHandler = (foodData) => {
    console.log(foodData)
    setFoods((prevState) => {
      return [...prevState, foodData]
    })
  }
  //console.log(foods)
  return (
    <div className="App">
      <NewFood onFoodData={foodDataHandler}></NewFood>
      {currentFoods.map((el) => {
        return (
          <FoodBox food={{
            name: el.name,
            calories: el.calories,
            image: el.image,
            servings: el.servings
          }} />
         )
      })}
    </div>
  );
}

export default App;
