// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Harry from './Harry'
export default function Contact(props) {
    return (
        <div className='container my-3 boder'>
            <div className="row ">
                <div className="col-sm-6">
                    <div className="card btn-dark" style={{ backgroundColor: props.mode === 'dark' ? 'white' : '#9400e7', color: props.mode === 'dark' ? 'black' : 'white' }}>
                        <div className="card-body">
                            <h5 className="card-title">CodeWithHarry - <b>Mentor</b></h5>
                           <Harry/>
                            <p className="card-text text-center">Source from, Where you can learn...</p>
                            <div className='d-flex justify-content-center'>
                                <Link to="https://www.youtube.com/@CodeWithHarry" target="_blank" className="btn btn-danger mx-2">Youtube</Link>
                                <Link to="https://www.codewithharry.com/" target="_blank" className="btn btn-primary">Website</Link>
                                <Link to="https://www.iitk.ac.in/" target="_blank" className="btn btn-primary mx-2">LinkedIn</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card btn-dark " style={{ backgroundColor: props.mode === 'dark' ? 'white' : '#9400e7', color: props.mode === 'dark' ? 'black' : 'white' }}>
                        <div className="card-body">
                            <h5 className="card-title">Deepak Kumar</h5>
                            <Loading src="Deepak.png" />
                            <p className="card-text text-center">
                                Creating an amazing TextUtiles...</p>
                            <div className='d-flex justify-content-center'>
                                <Link to="https://www.instagram.com/again_deepak" target="_blank" className={`btn btn-warning mx-2`}>Instagram</Link>
                                <Link to="https://t.me/again_deepak" target="_blank" className="btn  btn-success">Telegram</Link>
                                <Link to="https://www.linkedin.com/in/deepak-kumar-4766b9237/" target="_blank" className="btn btn-primary  mx-2">LinkedIn</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
