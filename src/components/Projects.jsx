import '../App.jsx';
import data from '../data/projects.json';
import HtmlIcon from '../assets/html_mini.png';
import CssIcon from '../assets/css_mini.png';
import JavaScriptIcon from '../assets/js_mini.png';
import ReactIcon from '../assets/react_mini.png';
import FirebaseIcon from '../assets/firebase_mini.png'
import quizDesing from '../assets/apps-desing/quiz-app.png';
import weatherDesing from '../assets/apps-desing/weather-app.png';
import encyclopediaDesing from '../assets/apps-desing/encyclopedia-start-wars-app.png';
import dictionaryDesing from '../assets/apps-desing/dictionary-app.png';
import todoDesing from '../assets/apps-desing/todo-app.png';
import restCountriesDesing from '../assets/apps-desing/restCountries.png'
import githubUserSearchDesing from '../assets/apps-desing/githubUserSearch.png'
import urlShorteningDesing from '../assets/apps-desing/urlShortening.png';

function Projects() {
    const technologyImages = {
        HTML: HtmlIcon,
        CSS: CssIcon,
        JavaScript: JavaScriptIcon,
        React: ReactIcon,
        ReactNative: ReactIcon,
        Firebase: FirebaseIcon
    };
    const desing = {
        quiz: quizDesing,
        weather: weatherDesing,
        encyclopedia: encyclopediaDesing,
        dictionary: dictionaryDesing,
        todo: todoDesing,
        restCountries: restCountriesDesing,
        githubUserSearch: githubUserSearchDesing,
        urlShortening: urlShorteningDesing
    }
    return (
        <div id="projects" className="container">
            <h2>Projects</h2>
            <div className="grid">
                {data?.proyectos?.map((project, index)=>(
                    <div key={index} className="table-project">
                        <a target="_blank" href={project.url_site}>
                            <img className={project.mobile ? 'app-desing' : 'web-desing'}src={desing[project.image]} alt=""/>
                        </a>
                        <h3>{project.name}</h3>
                        <div className="technology">
                            {project.technologies?.map((technologie, index)=> (
                                <img key={index} src={technologyImages[technologie]} alt="" title={technologie} />
                            ))}
                        </div>
                        <a target="_blank" href={project.url_code}><button>View Code</button></a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects