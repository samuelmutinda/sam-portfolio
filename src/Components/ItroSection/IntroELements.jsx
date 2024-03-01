import styled from 'styled-components'
import image1 from '../../assets/introimage.jpg'

export const HeroBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    z-index: 1;
    height: 100vh;
    background-color: #000;
`

export const HeroImg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background-image: url(${image1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const HeroWrapper = styled.div`
    position: absolute;
    width: 100%;
    margin: auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        width: 90%;
        flex-direction: column;
    }
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px){
        gap: 0px;
    }
`

export const IntroText = styled.div`
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (max-width: 1200px){
        text-align: center;
    }
    @media only screen and (max-width: 768px){
        font-size: 50px;
    }
    @media only screen and (max-width: 425px){
        font-size: 30px;
    }
`

export const BottomRow = styled.div`
    font-weight: 200;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media only screen and (max-width: 1200px){
        flex-direction: column;
        padding-top: 90px;
        text-align: center;
    }
    @media only screen and (max-width: 768px){
        width: 100%;
        gap: 10px;
    }
`

export const TextA = styled.p`
    font-size: 15px;
    font-weight: 200;
    width: 200px;
    text-align: center;
`

export const TextB = styled.p`
    font-size: 13px;
    font-weight: 300;
    width: 200px;
    text-align: center;
`

export const ContactButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContactMeButton = styled.a`
    background-color: #167dff;
    width: 100px;
    cursor: pointer;
    font-size: 15px;
    padding: 1em 3em;
    border-radius: 50px;

    &:hover {
        color: #000;
        background-color: #fff;
    }
`