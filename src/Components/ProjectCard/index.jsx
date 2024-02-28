import {
    Project,
    RightWrapper,
    BottomWrapper,
    ProjectDate,
    ProjectTitle,
    ProjectContent,
    ProjectLink,
    Technology,
    LinkSvg,
    LinkWrapper,
    TechWrapper
} from './ProjectCardElements'
import PropTypes from 'prop-types'

ProjectCard.propTypes = {
    projectDate: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectLinks: PropTypes.array.isRequired,
    projectContent: PropTypes.string.isRequired,
    projectTechnologies: PropTypes.array.isRequired,
    linkSvg: PropTypes.object.isRequired
}
export default function ProjectCard({
    projectDate,
    projectTitle,
    projectLinks,
    projectTechnologies,
    projectContent,
    linkSvg
}){
    return(
        <>
            <Project>
                <ProjectDate>{projectDate}</ProjectDate>
                <RightWrapper>
                    <ProjectTitle>{projectTitle}</ProjectTitle>
                    <BottomWrapper>
                        <ProjectContent>{projectContent}</ProjectContent>
                        {projectLinks.map((value, index)=>{
                            return(
                            <LinkWrapper key={index}>
                                <LinkSvg src={linkSvg}/>
                                <ProjectLink key={index}>  {value}</ProjectLink>
                            </LinkWrapper>)
                        })}
                        <TechWrapper>
                            {projectTechnologies.map((value, index)=>{
                                return(
                                    <Technology key={index}>{value}</Technology>
                                )
                            })}
                        </TechWrapper>
                    </BottomWrapper>
                </RightWrapper>
            </Project>
        </>
    )
}