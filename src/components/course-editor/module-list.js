import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"
import "./course-editor.css";

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
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        },

    }
}

export default connect(stpm, dtpm)
(ModuleList)
