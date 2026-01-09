import "./styles.css";
import searchIcon from "../../assets/search-alt-1-svgrepo-com.svg";
export const ContactBox = () => {
    return(
        <section id="contactBox">
            <h2>Contact</h2>
            <div id="contact-content">
                <img src="src\assets\location_on_24dp_000000_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="Location icon" />
                <p>Edmonton, Alberta</p>
                <img src="src\assets\mail_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"/>
                <p>chl.lhaynes@gmail.com</p>
                <img src="src\assets\call_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"/>
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