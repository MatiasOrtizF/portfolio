import '../App.jsx'
import { useState } from "react";
import { supabase } from "../services/supabase";

function Contact() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from("contacts")
            .insert({
                name,
                last_name: lastName,
                email,
                message,
            });

        if (error) {
            alert("Error al enviar");
            return;
        }

        alert(
            `¡Gracias por contactarte, ${name}!
Aprecio que te hayas tomado el tiempo de contactarme.
Te responderé tan pronto como me sea posible.`
        );

        setName("");
        setLastName("");
        setEmail("");
        setMessage("");
    };

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
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <textarea
                            placeholder="Message"
                            cols="30"
                            rows="12"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />

                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
