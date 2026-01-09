import "./styles.css";
import searchIcon from "../../assets/search-alt-1-svgrepo-com.svg";
import locationIcon from "../../assets/location.svg";
import mailIcon from "../../assets/mail.svg";
import callIcon from "../../assets/call.svg"
export const ContactBox = () => {
    return(
        <section id="contactBox">
            <h2>Contact</h2>
            <div id="contact-content">
                <img src={locationIcon} alt="Location icon" />
                <p>Edmonton, Alberta</p>
                <img src={mailIcon}/>
                <p>chl.lhaynes@gmail.com</p>
                <img src={callIcon}/>
                <p>(587) 297 2582</p>
            </div>
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

        </section>
    )
}