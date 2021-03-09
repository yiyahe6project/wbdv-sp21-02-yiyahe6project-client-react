import React, {useState} from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import "./course-manager.css";
import {Form} from "react-bootstrap";

class CourseManager extends React.Component {
    state = {
        courses: [],
        newTitle: "New Course",
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))

    saveTitle = (newTitle) => {
        this.setState(() => ({
            newTitle: newTitle,
        }))
    }

    addCourse = () => {
        const newCourse = {
            title: this.state.newTitle,
            owner: "New Owner",
            lastModified: "Never"
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ],
                })))
        this.titleInputField.reset()
        this.setState(() => ({
            newTitle: "New Course",
        }))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })

    }

    render() {
        return(
            <div>
                <div className="wbdv-sticky-nav-bar">
                    <div className="row navbar">
                        <div className="col-1">
                            <Link to="/">
                                <i className="fas fa-bars fa-2x"></i>
                            </Link>
                        </div>
                        <div className="col-2 h2 text-left d-none d-lg-block">Course Manager</div>

                        <div className="col-7">
                            <Form ref={form => this.titleInputField = form}>
                                <input onChange={event => this.saveTitle(event.target.value)}
                                       className="form-control float-left"
                                       placeholder="New Course Title"/>
                            </Form>
                        </div>
                        <div className="col-1">
                            <button className="plus-icon float-right" onClick={this.addCourse}>
                                <i className="fas fa-plus-circle fa-2x "></i>
                            </button>
                        </div>
                    </div>
                </div>

                <Route path="/courses/table"
                        exact={true}>
                    <CourseTable
                        addCourse = {this.addCourse}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse.bind(this)}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid"
                       exact={true}>
                    >
                    <CourseGrid
                        addCourse = {this.addCourse}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <div>
                    <Route path={[
                        "/courses/:layout/editor/:courseId",
                        "/courses/:layout/editor/:courseId/modules/:moduleId",
                        "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    ]}
                            exact={true}
                           render={(props) => <CourseEditor {...props}/>}>
                    </Route>
                </div>
            </div>
        )
    }
}

export default CourseManager
