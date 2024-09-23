import React, { useState } from 'react'
import './App.css'
const App = () => {
  const data = [
    {
    id:'name',
    label:"Name",
    inputType:"text",
    buttonName:"Next",
    placeholder:"your name"
  },
  {
    id:'email',
    label:"email",
    inputType:"email",
    buttonName:"Next",
    placeholder:"your email"
  },
  {
    id:'Dob',
    label:"DOB",
    inputType:"date",
    buttonName:"Next",
    placeholder:"your date"
  },
  {
    id:'password',
    label:"password",
    inputType:"password",
    buttonName:"submit",
    placeholder:"your password"
  }
];
const [forms,setForms] = useState(data)
const[index,setindex] = useState(0);
const [isformsubmited,setFormSubmited] = useState(false)
const [formdata,setFormData] = useState(
  {
    name:"",
     email:"",
     Dob:"",
     password:""
  }
)

const handleSubmit = (e)=>{
  e.preventDefault();
  if(index === forms.length -1 )
  {
    alert('form submited')
  }
 else{
  setindex((idx)=>idx +1)
 }
 setFormSubmited(true)
}

const handleBack = (e)=>{
  e.preventDefault()
  setindex((idx)=> idx -1)
}


 const handleInputChange = (e)=>{
  const id = e.target.id;
  const value = e.target.value;
  
  const copyFormData = {...formdata};
  copyFormData[id] = value;
  setFormData(copyFormData)
  
 }
  
  return (
    <div className='app'>
      {!isformsubmited ?<form action="" className="container" onSubmit={handleSubmit}>
        {
          index > 0 ? <a href='/' onClick={handleBack} >back</a> : null
        }
        <label>{forms[index].label}</label>
        <input value={formdata[forms[index].id]} onChange={handleInputChange} type={forms[index].inputType} placeholder={forms[index].placeholder} id={forms[index].id} />
        <button >{forms[index].buttonName}</button>
      </form>
     : <div>
        <h1>success</h1>
        <hr/>
        <span>Name : {formdata.name}</span>
        <br/>
        <span>email : {formdata.email}</span>
        <br/>
        <span>dob : {formdata.Dob}</span>
        <br/>
        <span>password : {formdata.password}</span>
      </div>
}
    </div>
  )
}

export default App
