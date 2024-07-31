import React,{useState,useEffect} from 'react'
import Project from './components/Project';
import BlogCard from './components/BlogCard.js';
import './Home.css'
import Nav from './components/Nav';
import {FiGithub,FiLinkedin,FiInstagram,FiMail} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'
import HashLoader from "react-spinners/HashLoader";
import myImage from './images/myImg.jpg'

function Home() {

    const [loading,setLoading] = useState('false')

    useEffect(()=>{
        Aos.init({duration:1500})
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[]);

    return (
    <>
    {
        loading
        ?
        <div className="loadingPage">
            <HashLoader color={"#88FFF7"} loading={loading} size={80} />
        </div>
        :
        <HomeContent/>
    }
    </>
    )
}

function HomeContent(){
return(
    <>
    <section className="landingPage" id="section1" >       
    <Nav/>
        <div className="preview">
            <div className="leftSide">
                <div className="hiLine" data-aos="flip-right" >Hi, I'm</div>
                <div className="name" data-aos="fade-up">Jay</div>
                <div className="surname" data-aos="fade-up">Mulani</div>
                <a href='#section3'><div className="viewProjBtn" data-aos="zoom-in">View Projects</div></a> 
            </div>
            <div className="rightSide" data-aos="fade-up">
                {/* <img src={hp} alt="photo" className="rightPhoto"/> */}
            </div>
        </div>
        <div className='contactIcon'>
            <div className='contIcon'><a href='https://github.com/jaymulani'><FiGithub size={23}/></a></div>
            <div className='contIcon'><a href='https://www.linkedin.com/in/jay-mulani-a6443a1b7/'><FiLinkedin size={23}/></a></div>
            <div className='contIcon' ><a href='mailto:jaymulani26@gmail.com?subject = ContactPortfolio&body = Message'><FiMail size={23}/></a></div>
            <div className='contaDottedLine'></div>
        </div>
    </section>
    
    <section className='aboutSection'  id="section2">
    <h2 className='headName'  data-aos="fade-in">About Me</h2>
        <div className='aboutPage'> 
            
            <div className='leftAbout'>
                <img data-aos="zoom-in-right" alt='Heer Patel' className="leftSideAboutImage" 
                src={myImage} height={280} width={300}
                />
            </div>

            <div className='rightAbout'>
                <div className='meHeading' data-aos="fade-in">Me and Myself</div>
                <div className='aboutPara' >
                    <div data-aos="zoom-out-up">
                    As a highly motivated software developer with a Master of Applied Computer Science degree from Dalhousie University, I am eager to bring my technical expertise and passion for innovation to a dynamic organization.

                    <br/><br/>
                    With a strong background in object-oriented programming, database design, and web development, I am well-equipped to handle complex projects and deliver solutions that meet both user needs and business goals.
                    <br/><br/>
                    Throughout my academic and professional experience, I have demonstrated exceptional problem-solving skills, attention to detail, and the ability to work collaboratively with diverse teams.
                    </div>
                    <div className='lineVertical'></div>
                </div>
            </div>
        </div>

    </section>

    <section className='projectPage' id="section3">
    <h2 className="headName" data-aos="fade-in">Projects</h2>
    
    <Project
        number={"01"}
        title={"ScraperSmart"}
        technology={"Java, Spring Boot, React"}
        github="true"
        githubLink={"https://github.com/jaymulani/ScraperSmart"}
        aboutDescription={"Scraped data from various websites such as Walmart, Costco, and Sobeys to gather information on grocery prices. Developed a comparison tool allowing consumers to make informed decisions for cost-effective grocery shopping based on the scraped data."}
    />

    <Project
        number={"02"}
        title={"MarketHub"}
        technology={"React, MongoDB, Node JS"}
        github="true"
        githubLink={"https://github.com/jaymulani/MarketHub"}
        aboutDescription={"Developed an online marketplace platform featuring real-time in-app chat and comments for enhanced user engagement. Integrated secure payment method such as Stripe to ensure smooth and protected transactions within the platform."}
        // video="true"
        // vlink='https://drive.google.com/file/d/1p6IxDp9X6L8IGGlwODssgUIUkLbT5XEU/view?usp=sharing'
    />

    <Project
        number={"03"}
        title={"Kubernetes"}
        technology={"Kubernetes, Docker, REact, Node JS"}
        // whatIDid={"Half Module (Capital alphabet module with Phonic &Visual Effect ,added Translation ,Animation)"}
        github="true"
        githubLink={"https://github.com/jaymulani/Kubernetes"}
        aboutDescription={"Deployed workloads to Google Kubernetes Engine (GKE), ensuring seamless inter and intra-pod communication for optimized application performance. Built cloud-native CI/CD pipelines for efficient and automated deployment processes."}
        // teammember={"2"}
        // video="true"
        // vlink='https://drive.google.com/file/d/1jV83O8lrPSfOHJsQxi0aIEVdmR3L4jjz/view?usp=sharing'
    />

    <Project
        number={"04"}
        title={"ServerlessGame"}
        technology={"AWS, GCP, Node JS, React JS"}
        github="true"
        githubLink={"https://github.com/jaymulani/ServerlessGame"}
        aboutDescription={"Developed a multi-cloud serverless online trivia game, enabling real-time team competitions, personalized question selection, and global leaderboards. Implemented CI/CD pipelines with Google Cloud Run, automating the deployment of containerized applications and improving release efficiency."}
        // video="true"
        // vlink ='https://drive.google.com/file/d/1bMRpw-rJKMtdwpab-oSuuUb5bq7OiskQ/view?usp=sharing'
    />

    <Project
        number={"05"}
        title={"Royal Dine Hotel Website"}
        technology={"- - -"}
        link="true"
        linkDetail="https://royaldinesurat.com/"
        aboutDescription={"Developed a sleek and user-friendly hotel website that offers seamless online booking, detailed room information, and interactive features to enhance guest experience."}
    />

    <Project
        number={"06"}
        title={"Sifat International Hotel"}
        technology={"- - -"}
        link="true"
        linkDetail="https://www.hotelsifatinternational.com/"
        aboutDescription={"Developed a sleek and user-friendly hotel website that offers seamless online booking, detailed room information, and interactive features to enhance guest experience."}
    />

    <Project
        number={"07"}
        title={"Orange International Hotel"}
        technology={"- - -"}
        link="true"
        linkDetail="https://hotelorangeinternational.com/"
        aboutDescription={"Developed a sleek and user-friendly hotel website that offers seamless online booking, detailed room information, and interactive features to enhance guest experience."}
    />

    {/* <Project
        number={"07"}
        title={"Portfolio"}
        technology={"React Js"}
        github="true"
        githubLink={"https://github.com/heerpatell/TicTacToe"}
        aboutDescription={"My portfolio"}
        link="true"
        linkDetail="https://heer-patel-portfolio.herokuapp.com/"
    /> */}
    </section>

    {/* blog */}
    <h2 className="headName" data-aos="fade-in">Blog</h2>
    <section className="blogSection">
        <div className="blogRow">
            <BlogCard
            site={"Medium"}
            title={"Multiple Form Navigation using Material UI and React JS with validation"}
            link={"https://medium.com/@vinitrathod_81125"}
            />    
        </div>
    </section>

    {/* footer */}
    <div className="footer">
        Built with React.js by Jay Mulani   
    </div>
    </>
)
}

export {Home}
export {HomeContent}
