import React from 'react';
import './style.css';
import projectList from '../../constants/projects';
import ProjectInfo from '../ProjectInfo';
import Header from '../Header';
import PageContentWrapper from '../PageContentWrapper';
import PageIntroSection from '../PageIntroSection';

const ProjectsScreen = props => {
    let content = projectList.projects.map(project => (
        <ProjectInfo
            id={project.id}
            key={project.id}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            background={project.background}
            textColor={project.textColor}
            title={project.title}
            description={project.description}
            technicalInfo={project.technicalInfo}
            technologies={project.technologies}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
            mobileSrc={project.mobileBackgroundSrc}
            mobileScreenshotSrc={project.mobileScreenshot}
            mobileScreenshotAlt={project.mobileScreenshotAlt}
            desktopSrc={project.desktopBackgroundSrc}
            desktopScreenshotSrc={project.desktopScreenshot}
            desktopScreenshotAlt={project.desktopScreenshotAlt}
        />
    ));
    return (
        <>
        <Header/>
        <PageContentWrapper>
            <PageIntroSection pageTitle="My Projects" pageInfo="Motivated to identify and implement the best technologies to meet requirements and exceed expectations, I have honed strong skills in HTML, CSS and JavaScript and am passionate about exploring new technologies and approaches in order to deliver optimum results. True desire to ensure positive experiences for all members of the development team including the client." secondColumn={false}/>
            {content}
        </PageContentWrapper>
        </>
    )
};

export default ProjectsScreen;