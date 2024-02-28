import styled from 'styled-components'

export const Project = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 2em;
    color: #000;
    background-color: #fff;
    border: 1px solid rgba(25, 25, 28, .2);
    border-radius: 10px;
`
export const ProjectDate = styled.div`
    width: 100px;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
`

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ProjectTitle = styled.div`
    font-size: 17px;
    font-weight: 200;
`

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 13px;
    font-weight: 100;
`

export const ProjectContent = styled.div`
`

export const LinkSvg = styled.img`
    height: 13px;
    width: 13px;
`

export const LinkWrapper = styled.div`
`

export const ProjectLink = styled.a`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export const TechWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
`

export const Technology = styled.a`
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #167dff;
    padding: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 50px;

`