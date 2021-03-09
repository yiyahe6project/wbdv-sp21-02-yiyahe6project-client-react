import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import "./course-editor.css";

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson,
        clearLessons
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        } else {
            clearLessons()
        }
    }, [courseId, moduleId])
    return(
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                            <EditableItem
                                key={lesson._id}
                                to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                item={lesson}
                                type="lesson"
                            />)
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)} className="course-editor fas fa-plus fa-2x float-right pl-3"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({

    findLessonsForModule: (moduleId) =>
            lessonService
                .findLessonsForModule(moduleId)
                .then(lessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: lessons
                })),

    createLessonForModule: (moduleId) => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            lessonService
                .createLessonForModule(moduleId, {title: "New Lesson"})
                .then(lesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson
                }))
        } else {
            alert("Please select a module to create a lesson!")
        }
    },
    deleteLesson: (item) =>
        lessonService
            .deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            })),
    updateLesson: (lesson) =>
        lessonService
            .updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),
    clearLessons: () => dispatch({
        type: "CLEAR_LESSONS"
    }),
})

export default connect(stpm, dtpm)(LessonTabs)