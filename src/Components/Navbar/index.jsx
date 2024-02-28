import { 
    Nav,
    NavWrapper,
    NavList,
    NavItem,
    NavBtn,
    NavBtnLink,
    SiteLogo,
    SocialItem,
    SocialsWrapper,
    MobileIcon
} from "./NavbarElements"
import {FaBars} from 'react-icons/fa';
import siteLogo from '../../assets/dev-logo.svg'
import { useState, useEffect } from "react"

export default function Navbar() {
    const navItems = ["ABOUT ME", "MY PROJECTS", "HIRE ME"]
    const socialItems = ["LinkedIn", "GitHub"]
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 1){
          setScrollNav(true)
        }
        else{
          setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])

    return(
        <>
        <Nav scrollNav = {scrollNav}>
            <NavWrapper>
                <SiteLogo src={siteLogo} alt="logo"/>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavList>
                    {navItems.map((value, index) => {
                        return <NavItem key={index}>{value}</NavItem>
                    })}
                </NavList>
                <SocialsWrapper>
                    {socialItems.map((value, index) => {
                        return <SocialItem key={index}>{value}</SocialItem>
                    })}
                    <NavBtn>
                        <NavBtnLink to = "/">Contact me</NavBtnLink>
                    </NavBtn>
                </SocialsWrapper>
            </NavWrapper>
        </Nav>
        </>
    )
}