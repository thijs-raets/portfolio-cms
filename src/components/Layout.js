import React from "react";
import Helmet from "react-helmet";
import {graphql} from "gatsby";

import "../styles";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

const TemplateWrapper = ({footerData = null, navbarData = null, headerData = null, children}) => (
    <>
        <Helmet>
            <html lang="en"/>
            <meta name="keywords" content="montreal, javascript, programming, meetup"/>
        </Helmet>
        <Navbar data={navbarData}/>
        <Header data={headerData}/>
        <main>{children}</main>
        <Footer data={footerData}/>
    </>
);

export const query = graphql`
    fragment LayoutFragment on Query {
        footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                       title
                    }
                }
            }
        }
        headerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "header" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        subTitle
                        headerImage{
                            image
                            imageAlt
                        }
                    }
                }
            }
        }
        navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        menuItems {
                            label
                            linkType
                            linkURL
                        }
                    }
                }
            }
        }
    }
`;

export default TemplateWrapper;
