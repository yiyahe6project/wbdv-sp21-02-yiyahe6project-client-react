import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";

const CourseCard = ({ deleteCourse,
                      updateCourse,
                      course,
                      title}) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  let titleInputField = null;

  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
    titleInputField.reset()

  }
  const deleteCard = (course) => {
    deleteCourse(course)
    setEditing(false)
    titleInputField.reset()

  }
  return (

  <div className="body">
    <div className="col mb-4">
    <div className="card">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top"
           alt="..."/>
      <div className="card-body">
        <h5 className="card-title">
          {
          !editing &&
          <Link to="/courses/editor">
            {title}
          </Link>
        }
          {
            editing &&
            <Form ref={form => titleInputField = form}>
            <input
                onChange={(event) => setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"/>
            </Form>

          }</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <img src={``}/>
        <Link to="/courses/editor" className="btn btn-primary">
          {course.title}
        </Link>
        <div className="float-right">
          {editing &&
          <i onClick={() => saveTitle()} className="fas fa-check color-green fa-2x" style={{color: "green"}}></i>}
          {editing &&
          <i onClick={() => deleteCard(course)} className="fas fa-times fa-2x" style={{color: "red"}}></i>}
          {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x" style={{color: "blue"}}></i>}
        </div>
      </div>
    </div>
  </div>
  </div>
  )}

export default CourseCard
