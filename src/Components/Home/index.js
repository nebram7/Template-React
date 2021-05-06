import React from "react"
import { HomeButton, HomeDesc, HomeDescSpan, HomeInfo, HomeInformation, HomeSection, HomeTitle } from "./Style";
const Home=()=>{
    return(
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Ebram Nabil</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeButton>Let's Begin</HomeButton>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}
export default Home;