import styled from 'styled-components'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
    backdrop-filter: ${({scrollNav})=>(scrollNav ? 'blur(7px)': 'blur(0px)')};
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
    margin: auto;
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const NavWrapper = styled.div`
    border-bottom: 1px solid #787878;
    width: 80%;
    gap: 30px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 820px){
        justify-content: space-between;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media only screen and (max-width: 820px){
        display: flex;
        justify-content: center;
        align-items: center;
        
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavList = styled.div`
    font-size: 16px;
    font-weight: 50;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;

    @media only screen and (max-width: 1200px){
        font-size: 13px;
        gap: 20px;
    }
    @media only screen and (max-width: 820px){
        display: none;
    }
`;

export const SiteLogo = styled.img`
    cursor: pointer;
    padding-top: 17px;
    padding-bottom: 17px;
    height: 40px;

    @media only screen and (max-width: 1200px){
        width: 120px;
    }
`

export const NavItem = styled.p`           
    cursor: pointer;

    &:hover{
        border-bottom: 0.5px solid;
    }
`

export const SocialsWrapper = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 30px;

    @media only screen and (max-width: 820px){
        display: none;
    }
    @media only screen and (max-width: 1200px){
        gap: 15px;
    }
`

export const SocialItem = styled.p`
    font-size: 13px;
    font-weight: 300;
    cursor: pointer;

    &:hover{
        border-bottom: 0.5px solid;
    }
    @media only screen and (max-width: 1200px){
        font-size: 10px;
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
`;

export const NavBtnLink = styled.a`
    cursor: pointer;
    font-size: 13px;
    background-color: #167dff;
    padding: 7px 20px;
    border-radius: 50px;

    &:hover {
        color: #000;
        background-color: #fff;
    }
`;