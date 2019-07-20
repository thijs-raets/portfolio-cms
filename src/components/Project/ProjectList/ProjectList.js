import React from "react";
import {StaticQuery, graphql} from "gatsby";
import ProjectListTemplate from "../../Project/ProjectList/ProjectListTemplate"

const ProjectList = (props) => (

    <StaticQuery
        query={
            graphql`
            query ProjectListQuery {
                allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "project" } } },
                                sort: {
                                      fields: [frontmatter___start]
                                      order: ASC
                                    })
                {
                    edges {
                        node {
                            frontmatter {
                                title
                                startDate: start(formatString: "MMMM YYYY")
                                endDate: end(formatString: "MMMM YYYY")
                                role
                                thumbnail
                                description
                                url
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const projectList = data.allMarkdownRemark.edges.map((data, i) => {
                return data.node.frontmatter;
            })

            return <ProjectListTemplate title={props.title} data={projectList} type={props.type}/>
        }
        }
    />
);
export default ProjectList;