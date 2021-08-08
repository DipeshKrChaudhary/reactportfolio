import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"",
                    email:"",
                    message:""}
    }
    // handelName=(event)=>{
    //     this.setState({name:event.target.value})
    // }
    // handelEmail=(event)=>{
    //     this.setState({email:event.target.value})
    // }
    // handelMessage=(event)=>{
    //     this.setState({message:event.target.value})
    // }
    
    handelChange=(event)=>{
        this.setState ({[event.target.name] :event.target.value })
    }

    handleSubmit=(event)=>{
    alert(JSON.stringify(this.state));
        event.preventDefault();
    }

   
 render(){
    return(
        <>
        <Navbar id="contact">   
      <div  className=" navbar-brand text-dark"> 
      <h2 style={{fontWeight:"600" }}><span className="badge badge-primary badge-default" >Contact</span></h2>
      </div>
      </Navbar>
      <h1 className="display-1 font-weight-bolder d-flex justify-content-center mb-5">Let's Talk</h1> 
        <div style={{width:"600px"}} className="container justify-content-center">
        
        <form onSubmit={this.handleSubmit}>
      
        <div className="form-group ">
            <label >Full Name</label>
            <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.handelChange} placeholder="Name"/>
        </div>

        <div className=" form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handelChange} aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
       
        <div className="form-group">
            <label >Message</label>
            <textarea class="form-control"  placeholder="Message" name="message" value={this.state.message} onChange={this.handelChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
        
        </form>
        </div>
        
        </>
    )
}
}


export default ContactPage;