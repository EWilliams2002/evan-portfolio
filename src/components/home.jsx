import hdshtExample from '../assets/gon.png'


export default function home(props) {
    return (
        <div id="home" className={props.navState ? "open-home" : "closed-home"}>

            <div>
                Hello my name is Evan !
            </div>
            
            <img src={hdshtExample} id="hdsht" alt="placeholder image" />
            <p>* placeholder image *</p>

            <div>
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

        </div>
    )
}