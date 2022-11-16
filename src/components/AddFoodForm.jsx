import React from 'react'
import { Input } from 'antd';
export default function AddFoodForm() {
    return (
        <form>
            <div className="">
                <div className="">
                    <label>
                        Name
                    </label>
                    <Input type="text" />
                </div>
                <div className="">
                    <label>Image</label>
                    <Input type="text" />
                </div>
                <div className="">
                    <label>Calories</label>
                    <Input type='number' min='0' step='1'/>
                </div>
                <div className="">
                    <label>Calories</label>
                    <Input type='number' min='0' step='1'/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Create</button>
            </div>
        </form>
    )
}
