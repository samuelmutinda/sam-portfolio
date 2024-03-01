import {
    ContactBg,
    ContactWrapper,
    LeftWrapper,
    FormSubtitle,
    FormTitle,
    SocialsWrapper,
    RightWrapper,
    ContactForm,
    FormLabel,
    NameField,
    EmailField,
    MessageField,
    SubmitButton,
    SectionTitle,
    SplitSection,
    Icon,
    PolicyWarning,
    PolicyWarningA,
    PolicyWarningB
} from './ContactSectionElements'
import {
    FaFacebook, 
    FaInstagram, 
    FaWhatsapp,
    FaInfoCircle
  } from 'react-icons/fa'

export default function ContactSection() {
    return(
        <>
            <ContactBg>
                <ContactWrapper>
                    <SectionTitle>&lt; CONTACT ME &gt;</SectionTitle>
                    <SplitSection>
                        <LeftWrapper>
                            <FormSubtitle>Get in Touch</FormSubtitle>
                            <SocialsWrapper>
                                <Icon>
                                    <FaFacebook />
                                </Icon>
                                <Icon>
                                    <FaInstagram />
                                </Icon>
                                <Icon>
                                    <FaWhatsapp />
                                </Icon>
                            </SocialsWrapper>
                            <FormTitle>Got a question or proposal, or just want
                            to say hello? Go ahead.</FormTitle>
                            <PolicyWarning>
                                <PolicyWarningA>By submitting this form, I agree to the</PolicyWarningA>
                                <PolicyWarningB>Privacy Policy <FaInfoCircle /></PolicyWarningB>
                            </PolicyWarning>
                        </LeftWrapper>
                        <RightWrapper>
                            <ContactForm>
                                <FormLabel>Enter Your Name</FormLabel>
                                <NameField type={'text'} name={'userName'} />
                                <FormLabel>Enter Your Email</FormLabel>  
                                <EmailField type={'email'} name={'userEmail'} />
                                <FormLabel>Enter Your Message</FormLabel>
                                <MessageField type={'textarea'} rows={'4'} name={'userMessage'} />
                                <SubmitButton type={'submit'} value={'Submit'} />
                            </ContactForm>
                        </RightWrapper>
                    </SplitSection>
                </ContactWrapper>
            </ContactBg>
        </>
    )
}