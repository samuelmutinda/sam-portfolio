import styled from 'styled-components'

export const MyProjectsBg = styled.div`
    width: 100%;
    margin: 0;
    background-color: #fff;
`

export const MyProjectsWrapper = styled.div`
    margin: auto;
    width: 80%;
    padding: 3em 0 4em 0;

    @media only screen and (max-width: 1200px) {
        width: 90%;
    }
`

export const ProjectsTitle = styled.h1`
    text-align: center;
    font-weight: 100;
    color: #000;
    padding-bottom: 0.5em;
`

export const ProjectsBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    align-items: center;
    justify-content: center;
`