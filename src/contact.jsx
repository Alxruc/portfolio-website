import "./contact.css";

function ContactBuilder({ visibilityClass, navElement }) {
    return (
        <div className={`contact-section-wrapper ${visibilityClass}`}>
            {navElement}
            
            <div className="contact-center-content">
                <a href="mailto:alex@ruchti.dev" className="contact-email">
                    alex@ruchti.dev
                </a>
            </div>
        </div>
    );
}

export default ContactBuilder;