import {
    SkillsCardsWrapper,
    SkillsBg,
    SkillCard,
    SkillIcon,
    SkillTitle,
    SkillContent,
    MainTitle
} from './SkillsSectionElements'
import PropTypes from 'prop-types'
SkillsSection.propTypes = {
    icon1: PropTypes.object.isRequired,
    title1: PropTypes.string.isRequired,
    content1: PropTypes.string.isRequired,
    icon2: PropTypes.object.isRequired,
    title2: PropTypes.string.isRequired,
    content2: PropTypes.string.isRequired,
    icon3: PropTypes.object.isRequired,
    title3: PropTypes.string.isRequired,
    content3: PropTypes.string.isRequired
};

export default function SkillsSection({
    icon1,
    title1,
    content1,
    icon2,
    title2,
    content2,
}) {
    return(
        <>
            <SkillsBg>
                <MainTitle>&lt; My Specialty &gt;</MainTitle>
                <SkillsCardsWrapper>
                    <SkillCard>
                        <SkillIcon src={icon1}/>
                        <SkillTitle>{title1}</SkillTitle>
                        <SkillContent>{content1}</SkillContent>
                    </SkillCard>
                    <SkillCard>
                        <SkillIcon src={icon2}/>
                        <SkillTitle>{title2}</SkillTitle>
                        <SkillContent>{content2}</SkillContent>
                    </SkillCard>
                </SkillsCardsWrapper>
            </SkillsBg>
        </>
    )
}