import React from "react"
import {Link} from 'react-router-dom'
import { Anchor, ListItem, Logo, LogoText, NavbarSection, UlList } from "./Style";

const Navbar=()=>{
    return(
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><Link to="/Contact">Contact</Link></ListItem>
                </UlList>
            </div>
            
        </NavbarSection>
    )
}
export default Navbar;