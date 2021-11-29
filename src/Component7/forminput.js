import {useState,useRef} from "react";
const FormInput = () =>{
    const initialState = {
        name: "",
        sex: "",
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
    }
    const {name,sex,ismaried} = formData;
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter your name" name="name" value={name} onChange={handleChange}/>
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
                <input type="file" ref={fileRef}/>
                <br/><br/>
                <input type="submit" value="Save your details"/>
            </form>
        </>
    )
}
export default FormInput;
