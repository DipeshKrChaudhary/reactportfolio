import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
const JustForYouData=[
    {
        id:1,
        imgsrc:"a1.jpg",
        title:"Used Vechicle Website",
        desc:"XML, XSD & CSS"  
    },
    {
        id:2,
        imgsrc:"a2.jpg",
        title:"Portfolio",
        desc:"HTML, CSS & JS"  
    },
    {
        id:3,
        imgsrc:"a3.jpg",
        title:"Car Accessories Recording",
        desc:"JAVA"  
    },
    {
        id:4,
        imgsrc:"a4.jpg",
        title:"Appointment System",
        desc:"Java"  
    },
    {
        id:5,
        imgsrc:"a5.jpg",
        title:"Portfolio",
        desc:"Dajango"  
    }
  ]
function JustGrid(props)
{
    return(
        <div className="col mt-4">
        <section className="card mb-5 bg-dark text-light">
        <div className="card-body">
        <img className="card-img-top" style={{height:"150px" }} src={props.imgsrc}/>
        <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <h5 className="card-subtitle">{props.desc}</h5>
        </div>
        </div>
        </section>
        </div>
    )
}
function Project(){
        return(
            <>
          <Navbar style={{backgroundColor:"#e6e6e6"}} id="projects">   
      <div  className=" navbar-brand text-dark"> 
      <h2 style={{fontWeight:"600" }}><span className="badge badge-secondary badge-default" >Projects</span></h2>
      </div>
      </Navbar>
            <div className="Project">
            <div className="container " id="project">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            {JustForYouData.map((val,index)=>
    {
        return(
        <JustGrid
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            desc={val.desc}
            price={val.price}
            />
    );
    })}

            </div>
            </div>
            </div>
            </>
        )
    }
 

 export default Project;
