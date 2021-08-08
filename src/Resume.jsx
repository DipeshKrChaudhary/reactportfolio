import React from "react";
class Resume extends React.Component {
    render() {
      return (
        <>
        <div className="bg-dark">
         <div className="container mt-2 " id="resume">
         <div className="row">
         <section className="col-12">        
         <div class="col-6">
         <h2 style={{fontWeight:"600" }}><span className="badge badge-secondary badge-default" >Eduction</span></h2>
            <table className="table table-striped table-responsive-sm">
            <thead className="thead-light text-light"  >
            <tr >
            <th scope="col">Institute</th>
            <th scope="col">Degree</th>
            <th scope="col">Board/University</th>
            <th scope="col">Year</th>
            <th scope="col">Percentage</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>Itahari International College</td><td>BSc (Hons) Computing</td><td>London Metropolitan University</td><td>5th semester</td><td>-</td>
            </tr>
            <tr>
            <td>Vishwa Adarsh College</td><td>+2</td><td>HIgher Secondary Education Board</td><td>2073</td><td>57.1%</td>
            </tr>
            <tr>
            <td>Nepal Ideal School</td><td>S.L.C</td><td>National Examination Board </td><td>2071</td><td>71.5%</td>
            </tr>
            </tbody>
            </table>
         </div>
         </section>

         <section className=" container col-12 d-flex justify-content-end ">
         <div className="col-6 ">
         <h2 style={{fontWeight:"600" }}><span className="badge badge-secondary badge-pill" >Skills</span></h2>
         <div className="progress">
            <div className="progress-bar progress-bar-sm progress-bar-striped active progress-bar-animated" role="progressbar" style={{width: "80%", color:"white", fontSize:"14px",fontWeight:"700" }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Python</div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{width: "70%", color:"white", fontSize:"14px",fontWeight:"700"  }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Django</div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "65%", color:"white", fontSize:"14px",fontWeight:"700"  }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Java</div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{width: "60%", color:"white", fontSize:"14px",fontWeight:"700"  }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">SQL</div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "58%", color:"white", fontSize:"14px",fontWeight:"700"  }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">XML</div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{width: "50%", color:"white", fontSize:"14px",fontWeight:"700"  }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">React</div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "40%", color:"white", fontSize:"14px",fontWeight:"700"  }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">UNIX</div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-dark progress-bar-animated" role="progressbar" style={{width: "39%", color:"white", fontSize:"14px",fontWeight:"700"  }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-secondary progress-bar-animated" role="progressbar" style={{width: "30%", color:"white", fontSize:"14px",fontWeight:"700"  }}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">PHP</div>
          </div>
         
          
         </div>
         </section>
         </div>

         </div>
         </div>
    
        </>
      )
    
    }
  }
  

export default Resume;

