import React from "react";
import "./styles.scss";

export const HeaderTemplate = ({data}) => {
    return (
        <section className="header" style={{background: `url(${data.headerImage.image})`}}>
            <div className="header-container  container">
                <h3 className="header-tagline">
                    <span className="header-taglinePart">{data.title}<br/>{data.subTitle}</span>
                </h3>
            </div>
        </section>
    );
};

const Header = props => {
    if (!props.data) {
        return null;
    }
    const data = props.data.edges[0].node.frontmatter;
    return <HeaderTemplate data={data}/>;
};

export {Header};
