import React,{ useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'

import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));


    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Thesis</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 1).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects
