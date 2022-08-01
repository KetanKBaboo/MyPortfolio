import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import "../styles/Experience.css"

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <VerticalTimeline lineColor='white'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2009 - 2014'
        iconStyle={{background:"white", color:"black"}}
        icon= {<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Kalunga High School, Kalunga, Odisha</h3>
        <p style={{color: "black"}}><b>High School Certificate Examination</b></p>
        <p style={{color: "black"}}><b>Secured percentage :</b>  82.83%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2014 - 2016'
        iconStyle={{background:"white", color:"black"}}
        icon= {<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Govt. Junior College, Rourkela, Odisha</h3>
        <p style={{color: "black"}}><b>Higher Secondary Examination</b></p>
        <ul style={{color: "black"}}>
          <li style={{listStyle: "None",fontWeight: "500"}}><b>Stream :</b>  Science</li>
          <li style={{listStyle: "None",fontWeight: "500"}}><b>Secured percentage :</b>  65.83%</li>
        </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2016 - 2020'
        iconStyle={{background:"white", color:"black"}}
        icon= {<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Gandhi Institute of Engineering and Technology University, Gunupur, Odisha</h3>
        <p style={{color: "black"}}><b>Bachelors of Technology</b></p>
        <ul style={{color: "black"}}>
          <li style={{listStyle: "None",fontWeight: "500"}}><b>Branch :</b>  Computer Science & Engineering</li>
          <li style={{listStyle: "None",fontWeight: "500"}}><b>Secured percentage :</b>  79%</li>
        </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work"
        date="January 2022- Present"
        icon={<WorkIcon/>}
        iconStyle={{background:"white", color:"black"}}
        >
        <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Archi's Academy</h3>
        <p style={{color: "black"}}><b>FrontEnd Developer Trainee</b></p>
        <p style={{color: "black"}}><b>Role Description :</b>  Getting acquinted with the Frontend Technologies and build interpersonal skills</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience