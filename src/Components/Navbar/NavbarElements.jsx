import styled from 'styled-components'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
    backdrop-filter: ${({scrollNav})=>(scrollNav ? 'blur(5px)': 'blur(0px)')};
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
    margin: auto;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavWrapper = styled.div`
    border-bottom: 0.5px solid #787878;
    width: 80%;
    gap: 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const NavList = styled.div`
    font-size: 16px;
    font-weight: 50;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
`;

export const SiteLogo = styled.img`
    cursor: pointer;
    padding-top: 17px;
    padding-bottom: 17px;
    height: 40px;
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
`

export const SocialItem = styled.p`
    font-size: 13px;
    font-weight: 300;
    cursor: pointer;

    &:hover{
        border-bottom: 0.5px solid;
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