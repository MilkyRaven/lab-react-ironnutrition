import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [currentFoods, setFoods] = useState(foods)
  //console.log(foods)
  return (
    <div className="App">
      <AddFoodForm></AddFoodForm>
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
