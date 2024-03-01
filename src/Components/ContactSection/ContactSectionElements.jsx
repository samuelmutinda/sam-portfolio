import styled from 'styled-components'

export const ContactBg = styled.div`
    background-color: #fff;
    color: #000;
    width: 100%;
`

export const ContactWrapper = styled.div`
    margin: auto;
    padding-top: 2em;
    padding-bottom: 2em;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #787878;
    border-bottom: 1px solid #787878;
`
export const SectionTitle = styled.h1`
    font-weight: 100;
    text-transform: uppercase;
`

export const SplitSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`

export const LeftWrapper = styled.div`
    padding-right: 2em;
    border-right: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
`

export const FormSubtitle = styled.div`
    font-size: 17px;
    color: #787878;
    text-transform: uppercase;
    font-weight: 100;
    padding-bottom: 0.5em;
`

export const FormTitle = styled.h1`
    font-weight: 200;
    max-width: 500px;
    text-transform: uppercase;
    padding-bottom: 0.5em;
`

export const PolicyWarning = styled.div`
    font-size: 13px;
    font-weight: 100;
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const PolicyWarningA = styled.div`
`

export const PolicyWarningB = styled.div`
    font-weight: 300;
    text-decoration: underline;
    text-decoration-color: #787878;
    cursor: pointer;
`

export const SocialsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3em;
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 2rem;
    cursor: pointer;
    color: #787878;
`

export const RightWrapper = styled.div`
    padding-left: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 17px;
    gap: 0.5em;
`

export const FormLabel = styled.div`
    font-weight: 100;
    text-align: left;
    color: #000;
    text-transform: uppercase;
`

export const NameField = styled.input`
    font-family: inherit;
    font-weight: 100;
    max-width: 300px;
    padding: 0.7em;
    border: 1px solid #787878;
    border-radius: 5px;
    text-align: left;
    margin-bottom: 1em;
`

export const EmailField = styled.input`
    font-family: inherit;
    font-weight: 100;
    max-width: 300px;
    padding: 0.7em;
    border-radius: 5px;
    border: 1px solid #787878;
    text-align: left;
    margin-bottom: 1em;
`

export const MessageField = styled.textarea`
    font-family: inherit;
    font-weight: 100;
    width: 300px;
    padding: 0.7em;
    border-radius: 5px;
    border: 1px solid #787878;
    text-align: left;
    margin-bottom: 1em;
`

export const SubmitButton = styled.input`
    font-size: 16px;
    font-weight: 100;
    font-family: inherit;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #167dff;
    color: #fff;
    border-radius: 30px;
    padding: 0.3em 3.5em 0.3em 3.5em;
    cursor: pointer;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`

