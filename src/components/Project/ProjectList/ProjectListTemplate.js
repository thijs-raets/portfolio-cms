import React from "react";
import Project from "../../Project/Project"
import "./styles.scss";

const ProjectListTemplate = (props) => {
    let template = null;
    switch (props.type) {
        case ('grid'):
            template = props.data.map((project, i) => {
                return (
                    <Project key={i} data={project}/>
                )
            })
            break;
        default:
            template = null;
    }

    return (
        <section className="projectList">
            <h1>{props.title}</h1>
            <div className="projectList-content">
                {template}
            </div>
        </section>
    )
}

export default ProjectListTemplate;