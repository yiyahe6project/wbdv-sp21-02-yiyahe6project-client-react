import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "./widgets/widget-list";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer,
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times pr-3"></i>
                    </Link>
                    Course Editor
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <br/>
                        <TopicPills/>
                        <br/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor
