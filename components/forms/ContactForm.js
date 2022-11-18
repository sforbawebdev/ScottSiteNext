import {useRef, useState} from 'react';
import Button from '../../widgets/Button';
import Reveal from  '../../widgets/Reveal';
import React from "react";
import { useForm } from "react-hook-form";
import {postToCF} from '../../utilities/helpers';
import { ReCaptcha} from 'react-recaptcha-v3'
const {REACT_APP_WP_API_ENDPOINT} = process.env;

const ContactForm = () =>{
    const recaptcha  = useRef(null);
    const [submitState, setSubmitState] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async  data => {
        const response = await postToCF(REACT_APP_WP_API_ENDPOINT, data);
        let status = response.status === "mail_sent";
        setSubmitState(status);
    };
    const verifyCallback = () => {
    console.log("recaptcha loaded")
    }

    const updateToken = () => {
    // you will get a new token in verifyCallback
    this.recaptcha.execute();
    }
    return (

    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Reveal preset={"fadeUp"} delay={50}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="name">NAME*</label>
                    <input name="fullname" type="text" defaultValue="" ref={register({ required: true })} />
                    {errors.fullname && <span className="error-field">This field is required</span>}
                </div>
            </div>
        </Reveal>
        <Reveal preset={"fadeUp"} delay={75}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="email">E-MAIL*</label>
                    <input name="email" type="email" ref={register({ required: true })} />
                    {errors.email && <span className="error-field">This field is required</span>}
                </div>
            </div>
        </Reveal>
        <Reveal preset={"fadeUp"} delay={100}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="phone">PHONE*</label>
                    <input name="phone" type="tel" />
                    {errors.phone && <span className="error-field">This field is required</span>}
                </div>
            </div>
        </Reveal>
        <Reveal preset={"fadeUp"} delay={125}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="subject">SUBJECT*</label>
                    <input name="subject" type="text" ref={register({ required: true })} />
                </div>
            </div>
        </Reveal>
        <Reveal preset={"fadeUp"} delay={150}>
            <div className="form__row">
                <div className="form__col full_width_col">
                    <label htmlFor="message">MESSAGE*</label>
                    <textarea name="message" type="text"  ref={register({ required: true })} />
                    {errors.message && <span className="error-field">This field is required</span>}
                </div>
            </div>
        </Reveal>

            {!submitState ? 
                (
                <Reveal preset={"fadeUp"} delay={175}>
                    <div className="form__submit">
                        <Button onClick={handleSubmit(onSubmit)} text={"Submit"}/>
                    </div>
                </Reveal>
                ) : (
                    <Reveal preset={"fadeUp"} delay={175}>
                        <div className="success__message">
                            Thank you for your Submission!
                        </div>
                    </Reveal>
                )
            }
        <ReCaptcha
            ref={recaptcha}
            sitekey="6LdJN2gaAAAAAK1xp40nixDntka8rr4uORcBEE-B"
            action='action_name'
            verifyCallback={verifyCallback}
        />
    </form>
    );
}


export default ContactForm;