import React from "react";
import "./styles.scss";

class Project extends React.Component {
    state = {
        hover: false
    }

    constructor() {
        super();
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    redirect(location) {
        window.location.href = location;
    }

    render() {
        var overlayClass;
        if (this.state.hover) {
            overlayClass = "project-info";
        } else {
            overlayClass = "project-info hidden";
        }

        return (
            <div
                className="project-card"
                key={this.props.data.title}
                onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
                onClick={() => this.redirect(this.props.data.url)}
            >
                <img className="project-thumbnail"
                     src={this.props.data.thumbnail}
                />
                <div className={overlayClass}>
                    <h2 className="project-title">{this.props.data.title}</h2>
                    <div className="project-description">{this.props.data.description}</div>
                    <div className="project-meta">
                        <p className="project-metaField  project-metaField--date">
                            {this.props.data.startDate} - {this.props.data.endDate}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
