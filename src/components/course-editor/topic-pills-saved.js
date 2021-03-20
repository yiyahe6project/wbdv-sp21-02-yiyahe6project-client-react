import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service';
import "./course-editor.css";

const TopicPills = (
    {
        topics=[],
        createTopicForLesson,
        findTopicsForLesson,
        updateTopic,
        deleteTopic,
        clearTopics
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined" &&
            lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        } else {
            clearTopics()
        }
    }, [courseId, moduleId, lessonId])
    return(
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <EditableItem
                            key={topic._id}
                            to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/ABC123`}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}
                            type="topic"
                        />
                    )
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)} className="course-editor fas fa-plus fa-2x float-right pl-3"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            })),


    createTopicForLesson: (lessonId) => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            // console.log("CREATE TOPIC FOR LESSON: " + lessonId)
            topicService
                .createTopicForLesson(lessonId, {title: "New Topic"})
                .then(topic => dispatch({
                    type: "CREATE_TOPIC",
                    topic
                }))
        } else {
            alert("Please select a lesson to create a topic!")
        }
    },
    deleteTopic: (item) =>
        topicService
            .deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            })),
    updateTopic: (topic) =>
        topicService
            .updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
    clearTopics: () => dispatch({
        type: "CLEAR_TOPICS"
    }),
})

export default connect(stpm, dtpm)(TopicPills)