import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';


function App() {
  const [currentFoods, setFoods] = useState(foods)
  //console.log(foods)
  return (
    <div className="App">
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
