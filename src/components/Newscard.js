import React from 'react'
import "./body.css";
import noimage from '../images/notImage.jpg'

const Newscard = (props) => {
    let {title ,description,imageurl,newsurl,author,date} = props;
    return (
        <div className='my-3'>
        <div className="card shadow  p-3 mb-5 bg-body rounded upmove" style={{width:"18rem" }}>
            <img src={!imageurl ? noimage : imageurl } className="card-img-top" alt=" " />
                <div className="card-body">
                    <h4 className="card-title " >{title} </h4>
                    <p className="card-text">{description} </p>
                    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary d-flex justify-content-center">Read more</a>
                    <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
                </div>
        </div>
    </div>
    )
}

export default Newscard
