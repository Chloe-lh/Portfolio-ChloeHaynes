import locationIcon from "../../assets/location_on_24dp_000000_FILL0_wght400_GRAD0_opsz24 (1).svg";
import mailIcon from "../../assets/mail_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import callIcon from "../../assets/call_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

import education from "../../assets/Group 3.svg";
import { ContactBox } from "../ContactBox";
import "./style.css";

export const InfoSection = () => {
    return (
        <section id="info">
        <div id="link-ed">
            <div className="links">
                <div className="link">
                    <img src={searchIcon} alt="Search icon" />
                    <a href="https://www.linkedin.com/in/chloe-hayness/">linkedin.com/in/chloe-hayness/</a>
                </div>
                <div className="link">
                    <img src={searchIcon} alt="Search icon" />
                    <a href="https://github.com/Chloe-lh">github.com/Chloe-lh</a>
                </div>
            </div>
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