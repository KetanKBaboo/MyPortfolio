import ProjectItem from './ProjectItem'
import {ProjectList} from "../Data"
import "../styles/Projects.css"

const Projects = () => {
  return (
    <div className="projects" id="projects">
    <h1>My Projects</h1>
      <div className='projectList'>
        {ProjectList.map((projects,idx)=>{
          return <ProjectItem 
          title={projects.title} 
          image={projects.image} 
          skills={projects.skills} 
          github={projects.github}
          description={projects.description}
          />
        })}
      </div>
    </div>
  )
}

export default Projects