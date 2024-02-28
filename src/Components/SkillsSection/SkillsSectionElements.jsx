import styled from 'styled-components'

export const SkillsBg = styled.div`
    width: 100%;
    height: fit-content;
    padding-top: 2em;
    padding-bottom: 3.5em;
    background: radial-gradient(26.76% 85.52% at 86.73% -12.86%, #c241ff 6.65%, #6b57ff 100%);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainTitle = styled.h1`
    font-weight: 100;
    padding-bottom: 0.5em;
    text-transform: uppercase;
`

export const SkillsCardsWrapper = styled.div`
    /* padding: 3em; */
    width: 82%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
`

export const SkillCard = styled.div`
    border-radius: 20px;
    padding: 2em;
    width: 450px;
    height: 350px;
    background-color: #262729;
`
export const SkillIcon = styled.img`
    height: 50px;
    width: 50px;
`
export const SkillTitle = styled.h1`
    font-weight: 100;
`

export const SkillContent = styled.div`
    font-size: 15px;
    font-weight: 100;
`