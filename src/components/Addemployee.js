import React, { useState } from 'react'
import Header from './Header'

const Addemployee = () => {
    var [id,setId]=useState("")
    var [name,setName]=useState("")
    var [designation,setDes]=useState("")
    var [salary,setSalary]=useState("")
    var [companyname,setCompany]=useState("")
    var [dob,setDob]=useState("")
    var [email,setEmail]=useState("")
    
    const subData=()=>{
        const data={"id":id,"name":name,"designation":designation,"salary":salary,"companyname":companyname,"dob":dob,"email":email}
        console.log(data)
    }
    const clearData=()=>{
        this.id.value="";
       this.name.value="";
        this.designation.value="";
        this.salary.value="";
        this.companyname.value="";
        this.dob.value="";
        this.email.value="";
    }
  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee ID</label>
                    <input onChange={(e)=>{setId(e.target.value)}} placeholder="Enter employee ID" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter employee Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Designation</label>
                    <input onChange={(e)=>{setDes(e.target.value)}} placeholder="Enter Designation" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Salary</label>
                    <input onChange={(e)=>{setSalary(e.target.value)}} placeholder="Enter salary" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Company Name</label>
                    <input onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter company name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">DOB</label>
                    <input onChange={(e)=>{setDob(e.target.value)}} placeholder="Enter date of birth" type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Email ID</label>
                   <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email id" type="email" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={clearData} className="btn btn-primary">CLEAR</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-primary">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addemployee