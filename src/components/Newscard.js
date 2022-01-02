import React from 'react'
import noimage from '../images/notImage.jpg'

const Newscard = (props) => {
    let {title ,description,imageurl,newsurl,author,date,source} = props;
    return (
        <div className='my-3'>
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{width:"18rem"}}>
        <div className="badge rounded-pill bg-info text-dark">{source}</div>
            <img src={!imageurl ? noimage : imageurl } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description} </p>
                    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary d-flex justify-content-center">Read more</a>
                    <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
                </div>
        </div>
    </div>
    )
}

export default Newscard
