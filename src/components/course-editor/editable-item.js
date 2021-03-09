import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import "./course-editor.css";

const EditableItem = (
    {
        to,
        deleteItem,
        updateItem,
        item,
        type
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    let s = `${type}Id`
    let itemId = eval(s)
    return (
        <li className={`${type === 'module' ? 'list-group-item' : 'nav-item'} 
                        ${item._id === itemId ? "active" : ""} 
                        ${editing ? "active highlight" : ""}`}>
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link d-inline ${item._id === itemId ? "active" : ""}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)}
                       className="course-editor fas fa-pencil-alt float-right"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="course-editor fas fa-check pl-3"></i>
                    <i onClick={() => {
                        deleteItem(item)
                    }} className="course-editor fas fa-times pl-3"></i>
                </>
            }
        </>
        </li>
    )
}

export default EditableItem