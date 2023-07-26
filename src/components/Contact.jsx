import '../App.jsx'

function Contact() {

    return (
        <div id="contact" className="container">
            {/* <h2>Contact</h2> */}
            <div className='contact-grid'>
                <div className='contact-us'>
                    <h4>Contac us</h4>
                    <p>Email</p>
                    <div className='contact-info'>
                        <i className="fa-regular fa-envelope"></i>
                        <h5>matias_ortiz_@outlook.es</h5>
                    </div>
                    <p>Git hub</p>
                    <div className='contact-info'>
                        <i className="fa-brands fa-github"></i>
                        <h5>MatiasOrtizF</h5>
                    </div>
                    <p>Location</p>
                    <div className='contact-info'>
                        <i className="fa-solid fa-location-dot"></i>
                        <h5>Buenos Aires, Argentina</h5>
                    </div>
                </div>
            <div>
                <h4>Complete a form</h4>
                <form action="">
                    <input placeholder="Name" type="text"/>
                    <input placeholder="Last Name" type="text"/>
                    <input placeholder="Email" type="text"/>
                    <textarea placeholder="Mensage" name="" id="" cols="30" rows="12"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact
