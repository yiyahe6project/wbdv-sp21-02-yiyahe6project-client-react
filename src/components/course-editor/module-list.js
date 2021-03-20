import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import "./course-editor.css";
import moduleActions from "../../actions/module-actions";

const ModuleList = (
    {
        myModules=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();

    useEffect(() => {
        if(courseId !== "undefined" && typeof courseId !== "undefined") {
            findModulesForCourse(courseId)
        }
    }, [courseId])
    return(
        <div>
            <h2>Modules</h2>
            <ul className="list-group" >
                {
                    myModules.map(module =>
                            <EditableItem
                                key={module._id}
                                to={`/courses/${layout}/editor/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                item={module}
                                type="module"
                            />
                      )
                }
                <li className="list-group-item add-module-icon">
                    <i onClick={() => createModule(courseId)} className="course-editor fas fa-plus fa-2x pl-3"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules,
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
        deleteModule: (item) => moduleActions.deleteModule(dispatch, item),
        updateModule: (module) => moduleActions.updateModule(dispatch, module),
        findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
    }
}

export default connect(stpm, dtpm)
(ModuleList)
