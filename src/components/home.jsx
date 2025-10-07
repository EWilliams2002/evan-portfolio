import hdshtExample from '../assets/me.jpg'
import Icon from '../components/tinyComp/icon'

import linkedinIcon from '../assets/linkedin.png'

import rowData from '../data/rowData';
import HomeBlock from '../components/homeBlock';



export default function home(props) {
    return (
        <div id="home" className={props.navState ? "open-home" : "closed-home"}>
        
            

            <div class="home-text" id="photoAndLinks">

                <img src={hdshtExample} class="" id="hdsht" alt="Photo of Me" />

                <h1>Evan Williams</h1>

                <div class="heading-icons">

                    <Icon link={'https://www.linkedin.com/in/evanlewiswilliamsdev/'} loco={linkedinIcon} />
                    {/* <Icon link={''} loco={'github'} /> */}

                    
                </div>

            </div>

        

            

            <div class="home-text" id="opening-text">
                As a seasoned software engineer, 
                I've dedicated my career to crafting 
                elegant, high-performing applications 
                that solve real-world problems. With a 
                strong foundation in computer science 
                principles and a passion for emerging 
                technologies, I approach each project 
                with a meticulous attention to detail 
                and a drive to deliver exceptional results.
                Whether I'm architecting large-scale 
                enterprise systems or prototyping innovative
                new features, I take pride in writing 
                clean, maintainable code that not only 
                meets the functional requirements, but 
                also adheres to industry best practices.
            </div>




            {rowData.map((block, idx) => (
                <HomeBlock block={block} key={idx} />
            ))}





        </div>
    )
}