import {
    MyProjectsBg,
    MyProjectsWrapper,
    ProjectsTitle,
    ProjectsBody
} from './MyProjectsElements'
import ProjectCard  from '../ProjectCard'
import { project1 } from './data'

export default function MyProjects() {
    return(
        <>
            <MyProjectsBg>
                <MyProjectsWrapper>
                    <ProjectsTitle>&lt; MY PROJECTS &gt;</ProjectsTitle>
                    <ProjectsBody>
                        <ProjectCard {...project1}/>
                        <ProjectCard {...project1}/>
                        <ProjectCard {...project1}/>
                    </ProjectsBody>
                </MyProjectsWrapper>
            </MyProjectsBg>
        </>
    )
}