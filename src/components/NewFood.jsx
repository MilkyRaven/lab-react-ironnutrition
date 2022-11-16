import React from 'react'
import AddFoodForm from './AddFoodForm'

export default function NewFood(props) {

    const saveFoodHandler = (newFood) => {
        const foodData = {
            ...newFood,
            id: (Math.random() * 500).toString()
        }
        console.log(foodData)

        props.onFoodData(foodData)
    }
    return (
        <div>
            <AddFoodForm onNewFood={saveFoodHandler}></AddFoodForm>
        </div>
    )
}
