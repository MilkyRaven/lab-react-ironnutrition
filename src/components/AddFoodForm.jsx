import React, {useState} from 'react'
import { Input } from 'antd';

export default function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const imageChangeHandler = (event) => {
        setImage(event.target.value)
    }
    const caloriesChangeHandler = (event) => {
        setCalories(event.target.value)
    }
    const servingsChangeHandler = (event) => {
        setServings(event.target.value)
    }
    const submitHandler = (event) => {event.preventDefault()
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
        console.log(newFood)
        props.onNewFood(newFood)
        
        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="">
                <div className="">
                    <label>
                        Name
                    </label>
                    <Input type="text" value={name} onChange={nameChangeHandler}/>
                </div>
                <div className="">
                    <label>Image</label>
                    <Input type="text" value={image} onChange={imageChangeHandler} />
                </div>
                <div className="">
                    <label>Calories</label>
                    <Input type='number' min='0' step='1' value={calories} onChange={caloriesChangeHandler}/>
                </div>
                <div className="">
                    <label>Servings</label>
                    <Input type='number' min='0' step='1' value={servings} onChange={servingsChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Create</button>
            </div>
        </form>
    )
}
