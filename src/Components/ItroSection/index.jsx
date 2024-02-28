import {
    HeroWrapper,
    IntroText,
    BottomRow,
    TextA,
    ContactMeButton,
    TextB, 
    ContactButtonWrapper,
    LeftSection,
    RightSection,
    RightSectionP,
    HeroBg,
    HeroImg,
    RightSectionIcons,
    Icon
} from './IntroELements'
import cIcon from '../../assets/c.svg'
import pythonIcon from '../../assets/python.svg'
import javaScriptIcon from '../../assets/javascript.svg'
import dartIcon from '../../assets/dart.svg'


export default function IntroSection() {

    return(
        <>
            <HeroBg>
                <HeroImg></HeroImg>
                <HeroWrapper>
                    <LeftSection>
                        <IntroText>Junior web and mobile developer._</IntroText>
                        <BottomRow>
                            <TextA>Hire me 😁! I am open to work</TextA>
                            <ContactButtonWrapper>
                                <ContactMeButton>Contact Me!</ContactMeButton>
                            </ContactButtonWrapper>   
                            <TextB>I am also open to learning new technologies</TextB>
                        </BottomRow>
                    </LeftSection>
                    <RightSection>
                        <RightSectionIcons>
                            <Icon src={pythonIcon} />
                            <Icon src={dartIcon} />
                            <Icon src={cIcon} />
                            <Icon src={javaScriptIcon} />
                        </RightSectionIcons>
                        <RightSectionP>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia
                        </RightSectionP>
                    </RightSection>
                </HeroWrapper>
            </HeroBg>
        </>
    )
}