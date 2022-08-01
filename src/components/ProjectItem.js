import React,{useState} from 'react'
import Modal from "./Modal.js"

const ProjectItem = ({title,image,skills,github,description}) => {
  const [showModal, setShowModal]=useState(false);
  const openModal = () =>{
    setShowModal(true);
  }
  return (
    <div className="ProjectItem">
        <div style={{backgroundImage: `url(${image})`}} className="project-image"></div>
        <h2>{title}</h2>
        <button onClick={openModal}>view more</button>
        {showModal && <Modal description={description} skills={skills} github={github} setShowModal={setShowModal}/>}
    </div>
  )
}

export default ProjectItem