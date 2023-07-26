import '../App.jsx'
import HtmlIcon from '../assets/html5.png';
import CssIcon from '../assets/css3.png';
import JavaScriptIcon from '../assets/js.png';
import ReactIcon from '../assets/react.png';


    function Skills() {
        const skills = [
            {name: "React Native", image: ReactIcon},
            {name: "JavaScript", image: JavaScriptIcon},
            {name: "HTML", image: HtmlIcon},
            {name: "CSS", image: CssIcon},
            {name: "React", image: ReactIcon},
        ]
        return (
            <div id="skills" className="container">
                <h2>Skills</h2>
                <div className="grid">
                    {skills?.map((skill, index)=>(
                    <div key={index} className="table-skills">
                        <img src={skill.image} alt=""/>
                        <p>{skill.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        )
    }

export default Skills