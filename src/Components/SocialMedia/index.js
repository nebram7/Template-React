import axios from "axios";
import React, { useEffect, useState } from "react"
import { Info2 , Socialmedia , Icon, Paragraph , Span, Social } from "./Style";
const SocialMedia=()=>{

    const [socials , setSocials]=useState([])

    useEffect(()=>{
        axios.get('js/Data.json').then(res=>{setSocials(res.data.social)})
    },[])

    const socialList=socials.map((socialItem)=>{
        return(
            <Social key={socialItem.id} socialtype={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Paragraph>
                    <Span>{socialItem.title}</Span>
                    <Info2>{socialItem.body}</Info2>
                </Paragraph>
            </Social>
        )
    })
    return(
        <Socialmedia>
            {socialList}
        </Socialmedia>
    )
}
export default SocialMedia ;