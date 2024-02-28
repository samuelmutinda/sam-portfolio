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
    margin-top: 7%;
    margin-bottom: 7%;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 30px;
`

export const ProfileLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfileImg = styled.img`
    width: 400px;
    object-fit: contain;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
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
`

export const ProfileContentRight = styled.div`
    padding-left: 3em;
`

export const ProfileContentLeft = styled.div`
    border-right: 1px solid;
    padding-right: 2em;
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
    height: 40px;
`