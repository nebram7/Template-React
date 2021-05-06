import axios from "axios"
import React, { useEffect, useState } from "react"
import { Icon, Span } from "../Work/Style"
import { ProfileSkills , Profile, Bar, ProfileTitle, ProfileList, ProfileItem, SpanWeb, Skills, SkillsTitle, SkillsTitleSpan, SkillsDesc, Perc, Parent, ParentSpan, Title, ProfileTitleSpan } from "./Style"
const Social=()=>{

    const [profiles , setSocials ]=useState([])

    useEffect(()=>{
        axios.get('js/Data.json').then(res=>{setSocials(res.data.social)})
    },[])

    const profilesList=profiles.map((profile)=>{
        return(
            <Bar key={profile.id}>
                <Title>{profile.title}</Title>
                <Perc>{profile.body}</Perc>
                <icon className={profile.icon}/>
                <Parent>
                    <ParentSpan width={profile.id}></ParentSpan>
                </Parent>
            </Bar>
        )
    })
    return(
        <ProfileSkills>
            <div className="container">
                <Profile>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Profile>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {profilesList}
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}
export default Social;