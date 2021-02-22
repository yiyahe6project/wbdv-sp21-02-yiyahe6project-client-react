import React from 'react'
import './course-editor.css'

const CourseEditor = ({history}) =>
    <div className="container pt-3">
        <div className="row navbar navbar-dark bg-dark justify-content-between">
            <div className="col-4">
                <i onClick={() => history.goBack()}
                    className="fas fa-times fa-2x color-grey"></i>
                <span className="course-title text-white">CS5610-WebDev</span>
            </div>
            <div className="col-8">
                <ul className="nav nav-tabs bg-dark justify-content-between">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Build</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item d-flex">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fas fa-plus text-white"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="row course-main">

            <div className="module-list col-4 bg-dark-black">
                <ul className="list-group">
                    <li className="list-group-item">
                        Module 1 - jQuery
                        <i className="fas fa-times float-right"></i>
                    </li>
                    <li className="list-group-item active">
                        Module 2 - React
                        <i className="fas fa-times float-right"></i>
                    </li>
                    <li className="list-group-item">
                        Module 3 - Redux
                        <i className="fas fa-times float-right"></i>
                    </li>
                    <li className="list-group-item">
                        Module 4 - Native
                        <i className="fas fa-times float-right"></i>
                    </li>
                    <li className="list-group-item">
                        Module 5 - Angular
                        <i className="fas fa-times float-right"></i>
                    </li>
                    <li className="list-group-item">
                        Module 6 - Node
                        <i className="fas fa-times float-right"></i>
                    </li>
                    <li className="list-group-item">
                        Module 7 - Mongo
                        <i className="fas fa-times float-right"></i>
                    </li>
                    <li className="list-group-item">
                        <i className="fas fa-plus fa-2x float-right"></i>
                    </li>
                </ul>
            </div>


            <div className="col-8">
                <ul className="nav nav-pills justify-content-left">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-plus"></i>
                        </a>
                    </li>
                </ul>
                <br/>
                <div className="module-content p-4">Content intentionally left blank</div>
            </div>
        </div>
    </div>

export default CourseEditor
