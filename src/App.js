import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';


function App() {
  const [currentFoods, setFoods] = useState(foods)
  //console.log(foods)
  return (
    <div className="App">
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
      {currentFoods.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="a plate of food" />
          </div>
        )
      })}
    </div>
  );
}

export default App;
