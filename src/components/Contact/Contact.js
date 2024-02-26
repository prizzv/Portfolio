import React, { useState, useRef, useEffect } from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'
import Particle from "../Particle";
import Social from '../Contact/Social';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.email_id || !formData.message) {
            setNotDone(true)
        } else {
            // console.log(formData);
            emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
            //  Please use your own credentials from emailjs or i will recive your email
            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formData,
            ).then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        }
    };

    return (
        <Container style={{ paddingTop: '100px' }} >
            <Particle />
            <Row >
                <Col md={6} className="c-left" >
                    <h1 >Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
                        <input type="email" name="email_id" className="user" placeholder="Email" onChange={handleChange} />
                        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                        <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                        <Button type="submit" className="button" disabled={done}>Send</Button>
                        <span className='done'>{done && "Thanks for contacting me I have recieved your mail. If you are testing this functionality then I am confirming this is working perfectly fine. If you have any serious query then I will reply to your email. You can also contact me on linkedin."}</span>
                    </form>
                </Col>
            </Row>
            <Row>
                <Social />
            </Row>
        </Container>
    )
}

export default Contact
