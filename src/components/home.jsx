import hdshtExample from '../assets/me.jpg'
import Icon from '../components/tinyComp/icon'

import linkedinIcon from '../assets/Linkedin.svg'
import githubIcon from '../assets/GitHub.svg'

import rowData from '../data/rowData';
import HomeBlock from './tinyComp/homeBlock';



export default function home(props) {
    return (
        <div id="home" className={props.navState ? "open-home" : "closed-home"}>
        
            

            <div class="home-text" id="photoAndLinks">

                <img src={hdshtExample} class="" id="hdsht" alt="Photo of Me" />

                <h1 class='myTitles' >Evan Williams</h1>
                <h2 class='myTitles' >Student, Developer & Photographer</h2>

                <div class="heading-icons">

                    <Icon link={'https://www.linkedin.com/in/evanlewiswilliamsdev/'} loco={linkedinIcon} />
                    <Icon link={'https://github.com/EWilliams2002'} loco={githubIcon} />

                    
                </div>

            </div>

        

            

            <div class="home-text" id="opening-text">
                Hello, I'm Evan, a highly motivated and determined 
                individual passionate about delivering exceptional 
                results to drive success within your company. As a 
                recent graduate from the University of Arizona with 
                a Bachelor’s Degree in Information Science, coursework 
                has provided programming skills in languages like <b class='bolds'>Python, 
                Java, C#, HTML, CSS, JavaScript, and R</b>. Currently pursuing 
                a master's degree in Computer Science at Loyola Marymount 
                University, expected to graduate in Spring 2027, I am 
                dedicated to leveraging time and effort to enhance academic 
                performance and professional skills.
            </div>




            {rowData.map((block, idx) => (
                <HomeBlock block={block} key={idx} />
            ))}



            <div id="icon-attr" class='home-text'>

                Icons by <a href="https://icons8.com/" style={{ textDecoration: "underline" }}>Icons8</a>

            </div>



        </div>
    )
}