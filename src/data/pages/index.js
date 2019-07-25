import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Helmet from "react-helmet";
import Layout from "../../components/Layout";
import "../../styles/home.scss";
import ProjectList from "../../components/Project/ProjectList/ProjectList";
import TagManager from 'react-gtm-module';
import {FaEnvelope, FaLinkedin} from 'react-icons/fa';

export const HomePageTemplate = ({home}) => {
    return (
        <>
            <div id="about">
                <h1>{home.aboutHeader}</h1>
                <div className="about-description">{home.aboutBody}</div>
            </div>
            <div id="projects">
                <ProjectList title={home.projectsHeader} type="grid"/>
            </div>
            <div id="contact">
                <h1>{home.contactHeader}</h1>
                <div id="contact-icons">
                    <a href="https://www.linkedin.com/in/thijs-raets-64ba1593">
                        <FaLinkedin size={30}/>
                    </a>
                    <a href="mailto:thijsraets@gmail.com" onMailClick={() => window.dataLayer.push({
                        event: "mail_click",
                        url: window.location.pathname
                    })}>
                        <FaEnvelope size={30}/>
                    </a>
                </div>
            </div>
        </>
    );
};

class HomePage extends React.Component {
    render() {
        const tagManagerArgs = {
            gtmId: 'GTM-5V856XD'
        };
        TagManager.initialize(tagManagerArgs)

        const {data} = this.props;
        const {
            data: {footerData, navbarData, headerData},
        } = this.props;
        const {frontmatter: home} = data.homePageData.edges[0].node;
        const {
            seo: {title: seoTitle, description: seoDescription, browserTitle},
        } = home;
        return (
            <Layout footerData={footerData} navbarData={navbarData} headerData={headerData}>
                <Helmet>
                    <meta name="title" content={seoTitle}/>
                    <meta name="description" content={seoDescription}/>
                    <title>{browserTitle}</title>
                </Helmet>
                <HomePageTemplate home={home}/>
            </Layout>
        );
    }
}

HomePage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default HomePage;

export const pageQuery = graphql`
    query HomePageQuery {
        ...LayoutFragment
        homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
            edges {
                node {
                    frontmatter {
                        aboutHeader
                        aboutBody
                        projectsHeader
                        contactHeader
                        seo {
                            browserTitle
                            title
                            description
                        }
                    }
                }
            }
        }
    }
`;
