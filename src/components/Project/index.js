
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards 
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p id="proj-icons-container">
              <a href={props.github}><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo" id="project-icon"/></a> 
              <a href={props.deploy}><img src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" id="project-icon"/></a> 
       
             
             </p>
              <p id="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;