import React from "react";
import "./styles.scss";

export const FooterTemplate = ({data}) => {

    return (
        <nav id="footer">
            <div className="footer-container  container">
                <div id="footer-top">
                    <h1>{data.title}</h1>
                </div>
                <div id="footer-bottom">
                    <img className="medium-icon" src="/img/react.png"/>
                    <img className="medium-icon" src="/img/netlify-cms.svg"/>
                    <img style={{marginLeft: '50px'}} className="medium-icon" src="/img/gatsby.svg"/>
                </div>
            </div>
        </nav>
    );
};

const Footer = props => {
    if (!props.data) {
        return null;
    }
    const data = props.data.edges[0].node.frontmatter;
    return <FooterTemplate data={data}/>;
};

export {Footer};
