import React,{useState} from 'react'
import {MdArrowDropDown,MdSlowMotionVideo} from 'react-icons/md'
import {FiGithub,FiExternalLink} from 'react-icons/fi'
import '../project.css'

function Project(props) {

    const [aboutProj,setAboutProj] = useState('false')
     
    const handleDescription = () => {
        aboutProj ? setAboutProj(false) : setAboutProj(true)
    }

    return (
    <>
    
    <div className="projectStructure" data-aos="fade-right">
        <div className="numbering">{props.number}*</div>
        <div className="projDetail">
          <div className="projTitle">{props.title}</div>
          <div className="projDescrip">
            <span className="projDescripHeading">Technology: </span>
            {props.technology}
          </div>
          {
              props.whatIDid
              ?<div><span className="projDescripHeading">What I Did : </span>{props.whatIDid}</div>
              :<div></div>
          }
          {
              props.teammember
              ?<div><span className="projDescripHeading">Team Member : </span>{props.teammember}</div>
              :<div></div>
          }
          <div className="aboutDescriptHeading" onClick={handleDescription}>             
              About {props.title} <MdArrowDropDown size={23}/>
          </div>
          {
            aboutProj
            ?<div></div>
            :<div className="aboutDescript">{props.aboutDescription}</div>
          }
          <div className="projLink">
              <div>
                  <a href={props.githubLink}><FiGithub className='projLinkIcon' size={19}/></a>
              </div>
              <div>
                  
                  {/* <img src={video} alt='videoLogo' height="25" /> */}
              </div>
              {
                  props.video
                  ?
                      props.vlink
                      ?<a href={props.vlink}><MdSlowMotionVideo className='projLinkIcon' size={19}/></a>
                      :<div></div>
                  :<div></div>
              }
              {
                  props.link
                  ?<FiExternalLink className='projLinkIcon' size={19}/>
                  :<div></div>
              }
          </div>
        </div>
    </div>
    </>
    )
}

export default Project
