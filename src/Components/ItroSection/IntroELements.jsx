import styled from 'styled-components'
import image1 from '../../assets/introimage.jpg'

export const HeroBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 90vh;
    z-index: 1;
`

export const HeroImg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(${image1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const HeroWrapper = styled.div`
    position: absolute;
    width: 80%;
    margin: auto;
    color: #fff;
    height: 86vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5%
`

export const LeftSection = styled.div`
    width: 58%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
`

export const RightSection = styled.div`
    background-color: #262729;
    border: 1px transparent;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 360px;
`

export const RightSectionP = styled.div`
    font-size: 15px;
    padding: 2em;
    font-weight: 100;
`

export const RightSectionIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
    padding-top: 7%;
    padding-left: 2em;
    padding-right: 2em;
`

export const Icon = styled.img`
    height: 40px;
    width: 40px;
`

export const IntroText = styled.div`
    padding-right: 150px;
    font-size: 80px;
    font-weight: 100;
    text-align: left;
    text-transform: uppercase;
`

export const BottomRow = styled.div`
    font-weight: 200;
    display: flex;
    flex-direction: row;
    gap: 50px;
`

export const TextA = styled.p`
    font-size: 15px;
    font-weight: 200;
    width: 200px;
`

export const TextB = styled.p`
    font-size: 13px;
    font-weight: 300;
    width: 200px;
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