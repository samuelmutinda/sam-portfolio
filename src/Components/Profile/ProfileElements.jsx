import styled from 'styled-components'

export const ProfileBg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    font-weight: 100;
`

export const ProfileWrapper = styled.div`
    width: 80%;
    display: flex;
    margin-bottom: 6em;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 30px;

    @media only screen and (max-width: 1200px){
        flex-wrap: wrap;
        width: 90%;
    }
`

export const ProfileLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1200px){
        /*Tablets [601px -> 1200px]*/
        width: 100%;
    }
`

export const ProfileImg = styled.img`
    width: 400px;
    object-fit: contain;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    @media only screen and (max-width: 1200px){
        /*Tablets [601px -> 1200px]*/
        width: 100%;
        border-radius: 30px;
        height: 400px;
        object-fit: none;
        object-position: 43% 59%;
    }
    @media only screen and (max-width: 644px){
        object-position: 47% 59%;
    }
    @media only screen and (max-width: 425px){
        object-position: 48% 59%;
    }
`

export const ProfileRight = styled.div`
    display: flex;
    flex-direction: column;
    color: #000;
`

export const ProfileH1 = styled.h1`
    text-transform: uppercase;
    padding-bottom: 0.5em;
    text-align: center;
    font-weight: 100;
`

export const ProfileContent = styled.div`
    padding: 0 2em 2em 2em;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px){
        flex-direction: column;
        gap: 15px;
        padding: 0 2em 0 2em;
        text-align: center;
    }
`

export const ProfileContentRight = styled.div`
    padding-left: 3em;

    @media only screen and (max-width: 768px){
        padding-left: 0;
    }
`

export const ProfileContentLeft = styled.div`
    border-right: 1px solid;
    padding-right: 2em;

    @media only screen and (max-width: 768px){
        border: none;
        padding-bottom: 15px;
        border-bottom: 1px solid #787878;
        padding-right: 0;
    }
`

export const ProfileSocials = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding: 0 0 2em 2em;
`

export const Icon = styled.img`
    height: 25px;
    width: 25px;
`

export const Signature = styled.img`
    padding-top: 1em;
    padding-bottom: 2em;
    height: 40px;

    @media only screen and (max-width: 768px){
        padding-top: 2em;
    }
`