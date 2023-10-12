import { _body,_inbody,_section1,_section2 } from "./style/bodystyle"
import getRatingStars from "./assets/rating"
import Skills from "./assets/skills"

export default()=>(
    <_body>
        <_inbody>
            <_section1>
                <h1>Continuous Learning:</h1>
                <ul>
                    <li>Actively engaged in staying informed about the latest advancements and industry trends in full stack development.</li>
                    <li>Dedicated to continuous learning, participating in online courses, workshops, and personal projects to augment skills and knowledge base.</li>
                    <li>Currently enhancing proficiency in C++ and focusing on mastering data structures and algorithms.</li>
                </ul>
            </_section1>
            <_section2>
                <div className="skills">
                    <h1>Skills:</h1>
                    <Skills/>
                </div>
                <div className="education">
                    <div className="contain">
                        <h1>Education:</h1>
                        <div className="edu">
                            <i class="fa-solid fa-graduation-cap i"></i>
                            <p>GIS Bachelor Degree <br />Faculty Of Arts - Alexandria University</p>
                            <div className="date">Oct 2021 - Oct 2025</div>
                        </div>
                        <div className="edu">
                            <i class="fa-solid fa-globe i"></i>
                            <p>[Udemy] - The Complete 2023 Web Development Bootcamp <br />By Dr. Angela Yu</p>
                            <div className="date">June 2022 - May 2023</div>
                        </div>
                    </div>
                </div>
            </_section2>
        </_inbody>
    </_body>
)