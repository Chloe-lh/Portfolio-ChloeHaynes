import education from "../../assets/Group 3.svg";
import { ContactBox } from "../ContactBox";
import "./style.css";

export const InfoSection = () => {
    return (
        <section id="info">
        <div id="link-ed">
            <section id="education">
                <h2>Education</h2>
                <img src={education} alt="Edcuation svg"/>
            </section>
        </div>
        <div>
            <ContactBox/>
        </div>
        </section>
        
    );
};