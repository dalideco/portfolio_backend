import React,{useState} from 'react'
import axios from 'axios'


function Contact(props) {

    const [submitMessage, setSubmitMessage]= useState('')

    const handleChange = (e)=>{
        const {name, value}= e.target;
        props.setMyInput(prev =>{
            return {
                ...prev, 
                [name]:value
            }
        })
    }

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(props.myInput);
        axios.post('/send',props.myInput)
        .then((response)=>{
            setSubmitMessage(response.data.message)
        }).then(
            ()=>{
                props.setMyInput(prev=>{
                        return{
                        name: '',
                        email:'',
                        description:''
                    }})
            });
        
    }

    const {name, email, description} = props.myInput;
    return (
        <div className="form">
            <h3>If you want to contact me you can fill the form</h3>
            <h3 style ={{
                color:'green'
            }}>
                {submitMessage}
            </h3>
            <form>
                <input name="name" type="text" placeholder="Name"
                    onChange={handleChange} value={name}></input>
                <input name="email" type="email" placeholder="E-mail"
                    onChange={handleChange} value={email}></input>
                <textarea name="description" type="text" placeholder="Description"
                    onChange={handleChange} value={description}></textarea>
                <button onClick={handleSubmit}>Send</button>
            </form>
        </div>
    )
}

export default Contact
