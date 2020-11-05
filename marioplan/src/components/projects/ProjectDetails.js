import React from 'react';

const ProjectDetails = (props) => {
    console.log(props)
    const id = props .match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, ex eveniet nemo consequuntur doloremque facere, ut voluptatum quia vel eligendi nulla velit veniam optio unde, dolorem quae obcaecati alias dolorum.</p>
                </div>
                <div className="card-action-grey lighten-4 grey-text">
                    <div>Posted By The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>

    )
}

export default ProjectDetails