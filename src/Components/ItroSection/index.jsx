import {
    HeroWrapper,
    IntroText,
    BottomRow,
    TextA,
    ContactMeButton,
    TextB, 
    ContactButtonWrapper,
    HeroContent,
    HeroBg,
    HeroImg,
} from './IntroELements'


export default function IntroSection() {

    return(
        <>
            <HeroBg>
                <HeroImg></HeroImg>
                <HeroWrapper>
                    <HeroContent>
                        <IntroText>Junior web and mobile developer._</IntroText>
                        <BottomRow>
                            <TextA>Hire me 😁! I am open to work</TextA>
                            <ContactButtonWrapper>
                                <ContactMeButton>Contact Me!</ContactMeButton>
                            </ContactButtonWrapper>   
                            <TextB>I am also open to learning new technologies</TextB>
                        </BottomRow>
                    </HeroContent>
                </HeroWrapper>
            </HeroBg>
        </>
    )
}