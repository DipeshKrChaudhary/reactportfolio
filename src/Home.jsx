import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

class Home extends React.Component {
    render() {
      return (
        <>
     <div className="Home">
      <div className="container " id="home">
        <div className="row ">
        <section className="col">
        <h2 style={{fontSize: "80px", lineHeight: "normal",fontWeight:"600" }}>Dipesh Chaudhary</h2>
		<p className="my-4 user-select-none" style={{fontSize: "25px", fontWeight:"600", color:"#808181", lineHeight: "1.8"}}>I’m a student of Bachelor in Honours Computing. I am a Django web developer. I like creating and designing websites.</p>
        <h2 style={{fontSize: "30px", fontWeight:"600"}}>General Info</h2>
        <ul className="list-group user-select-none" style={{ color:"#808181", fontSize:"22px", fontWeight:"600"}}>
            <li className="list-group-item bg-light"><span  style={{color:"black"}}>Address</span>Itahari, Nepal</li>
            <li className="list-group-item bg-light"><span style={{color:"black"}}>E-mail</span>chaudharydipesh856@gmail</li>
            <li className="list-group-item bg-light"><span style={{color:"black"}}>Phone </span>981338349</li>							
        </ul>
        </section>
        <section className="col">   
        <figure>
        <img className="img-fluid mt-5 " src="i2.jpg" alt="profile image"/> 
        </figure>
        </section>     
      </div>
      </div>
      </div>

<nav className="navbar  navbar-light navbar-expand-sm justify-content-between">
            <div className="navbar-nav" >
            <a className=" dropDown nav-item nav-link active" href="https://gitlab.com/DipeshKrChaudhary"><GitHubIcon/></a>
            <a  className="nav-item nav-link active" href="https://www.linkedin.com/in/dipesh-chaudhary-6383b11aa/"><LinkedInIcon/></a>
            <a  className="nav-item nav-link active" href="https://www.instagram.com/dipesh_kr._chaudhary/?hl=en"><InstagramIcon/></a>
            <a  className="nav-item nav-link active" href="https://www.facebook.com/mnm.mnm44"><FacebookIcon/></a>
            </div>
            <h4 class="hidden-md hidden-sm"> Social Links</h4>
        </nav>
        </>
      )
    
    }
  }

   
  

export default Home;

