import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
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

    const deleteRow = (course) => {
        deleteCourse(course)
        setEditing(false)
        titleInputField.reset()

    }

  return (
      <tr>
        <td colSpan="2">
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
            }
        </td>
        <td className="d-none d-sm-table-cell">{owner}</td>
        <td className="d-none d-md-table-cell">{lastModified}</td>
        <td >
            <div className="float-right">
                {editing && <i onClick={() => saveTitle()} className="fas fa-check color-green fa-2x" style={{color: "green"}}></i>}
                {editing && <i onClick={() => deleteRow(course)} className="fas fa-times fa-2x" style={{color: "red"}}></i>}
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x" style={{color: "blue"}}></i>}
            </div>
            </td>
      </tr>
  )
}
export default CourseRow
