import '../App.jsx'
import KotlinIcon from '../assets/kotlin.png'
import HtmlIcon from '../assets/html5.png';
import CssIcon from '../assets/css3.png';
import JavaScriptIcon from '../assets/js.png';
import TypeScriptIcon from '../assets/typescript.png'
import ReactIcon from '../assets/react.png';
import SupabaseIcon from '../assets/supabase.webp'
import JavaIcon from '../assets/java.png'
import FirebaseIcon from '../assets/firebase.png'


function Skills() {
    const skills = [
        { name: "Kotlin", image: KotlinIcon },
        { name: "React Native", image: ReactIcon },
        { name: "TypeScript", image: TypeScriptIcon },
        { name: "Supabase", image: SupabaseIcon },
        { name: "Java", image: JavaIcon },
        { name: "Firebase", image: FirebaseIcon },
    ]
    return (
        <div id="skills" className="container">
            <h2>Skills</h2>
            <div className="grid">
                {skills?.map((skill, index) => (
                    <div key={index} className="table-skills">
                        <img src={skill.image} alt="" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills