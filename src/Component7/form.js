import FormInput from "./forminput";
import {useState} from "react";
const Form = ()=>{
    let [data,setData] = useState({})
    const onSubmit = (value)=>{
        data = value;
        setData(data);
    };
    return (
        <>
            <FormInput onTaskCreate={onSubmit}/>
            <table style={{border: '1px solid white'}}>
                <tbody>
                    <tr>
                        <td style={{border: '1px solid white'}}>Name : {data.name}</td>
                    </tr>
                    <tr>    
                        <td style={{border: '1px solid white'}}>Sex : {data.sex}</td>
                    </tr>
                    <tr>    
                        <td style={{border: '1px solid white'}}>Age: {data.age}</td>
                    </tr>
                    <tr>    
                        <td style={{border: '1px solid white'}}>City: {data.addres}</td>
                    </tr>
                    <tr>    
                        <td style={{border: '1px solid white'}}>Salary:{data.salary}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Form;