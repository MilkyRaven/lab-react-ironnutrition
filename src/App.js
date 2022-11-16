import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood'
import Search from './components/Search';


function App() {
  const [currentFoods, setFoods] = useState(foods)

  const foodDataHandler = (foodData) => {
    console.log(foodData)
    setFoods((prevState) => {
      return [...prevState, foodData]
    })
  }

  const handleSearch = (value) => {
    let searchedFoods = [...foods].filter((food) => {
      return food.name.toLowerCase().includes(value)
    })
    setFoods(searchedFoods)
  }
  const deleteFood = (foodName) => {
    const allFood = [...currentFoods];
    const newArray = allFood.filter((food) => {
      return food.name !== foodName
    })
    setFoods(newArray)
  }
  //console.log(foods)
  return (
    <div className="App">
      <Search onSearch={handleSearch}></Search>
      <NewFood onFoodData={foodDataHandler}></NewFood>
      {currentFoods.map((el) => {
        return (
          <div>
            <FoodBox food={{
              name: el.name,
              calories: el.calories,
              image: el.image,
              servings: el.servings,

            }} onDelete={deleteFood}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
