import {useState,useRef} from "react";
const FormInput = ({onTaskCreate}) =>{
    const initialState = {
        name: "",
        sex: "",
        age: "",
        addres: "",
        salary: "",
        ismaried: ""
    };
    const [formData,setFormData] = useState(initialState);
    const fileRef = useRef();
    const handleChange = (e)=>{
        let {name,value,checked,type} = e.target;
        value = type === "checkbox" ?checked:value;
        setFormData((prev)=>({...prev,[name]:value}));
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        onTaskCreate(formData)
    }
    const {name,age,addres,salary,sex,ismaried} = formData;
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter your name" name="name" value={name} onChange={handleChange}/>
                <br/>
                <br/>
                <input type="text" placeholder="Enter your age" name="age" value={age} onChange={handleChange}/>
                <br/>
                <br/>
                <input type="text" placeholder="Enter your addres" name="addres" value={addres} onChange={handleChange}/>
                <br/>
                <br/>
                <input type="text" placeholder="Enter your salry" name="salary" value={salary} onChange={handleChange}/>
                <br/>
                <br/>
                <label>
                <input type="checkbox" checked={ismaried} onChange={handleChange} name="ismaried" />
                </label>Maried
                <br/><br/>
                <select name="sex" value={sex} onChange={handleChange}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                <br/><br/>
                <label> Uplod your pic
                <input type="file" ref={fileRef}/>
                </label>
                <br/><br/>
                <input type="submit" value="Save your details"/>
            </form>
        </>
    )
}
export default FormInput;
