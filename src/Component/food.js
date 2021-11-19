import {useState} from "react";
import FoodInput from "./foodinput";
import FoodItem from "./fooditem";
function Food(){
    const [food,setFood] = useState([]);
    const handleAdd = ({title})=>{
        const payload = {
            id : food.length+1,
            status:"incomplete",
            title
        }
        setFood([...food,payload])
    }
    const Complete = (id)=>{
        const updateList = food.map((item) => {if(item.id === id){
                if(item.status === 'complete'){
                item.status = 'incomplete'
                }
                else if(item.status === 'incomplete'){
                    item.status = 'complete'
                }
                return item;
                } else {
                return item;
                }
            }
        )
        setFood(updateList)
    }
    const showComplete = ()=>{
        const CompleteList = food.filter((item)=>item.status === "complete")
        setFood(CompleteList)
    }
    const showUncomplete = ()=>{
        const inCompleteList = food.filter((item)=>item.status === "incomplete")
        setFood(inCompleteList)
    }
    return (
        <>
            <FoodInput onTaskCreate={handleAdd} showComplete={showComplete} showUncomplete={showUncomplete}/>
            <FoodItem data={food} handleComplete={Complete} />
        </>
    )
}
export default Food;