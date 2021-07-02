import React from 'react';
import Styles from './Contact.module.css'
const Contact = () => {
    return (
        <React.Fragment>
            <div id="contact">
                <form name='contact-form' className={Styles.contactContainer} method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact-form"/>
                    <div className={Styles.contactHeader}>
                        <h1>Contact me</h1>
                        <h4>Please fill out the form and I'll contact you as soon as possible !</h4>
                    </div>
                    
                    <div className={Styles.Cform}>
                        <div className={Styles.Left}>
                            <input type="text" placeholder="Name" name="name" required /><br />
                            <input type="text" placeholder="Phone Number" name="phone" required /><br />
                            <input type="email" placeholder="Email" name="email" required /><br />
                            <input type="text" placeholder="Subject" name="subject" required />
                        </div>
                        <div className={Styles.Right}>
                            <textarea placeholder="Write your Message here..." name='message' required></textarea>
                            <button type="submit" class="btn btn-outline-warning" style={{ fontFamily: 'sans-serif' }}>CONTACT ME</button>
                        </div>
                    </div>

                </form>
            </div>
        </React.Fragment>
    )
}
export default Contact;