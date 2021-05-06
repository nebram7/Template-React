import React from "react"
import Footer from "../Footer/index"
import { Drop, DropTitle, Form, FormInput, InputEmail, InputSub, InputSubmit, InputText, Span, Textarea } from "./Style.js";
const Contact=()=>{
    return(
        <Drop>
            <div class="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputSub type="text" placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
                <Footer/>
            </div>
        </Drop>
    )
}
export default Contact ;