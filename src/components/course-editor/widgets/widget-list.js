import React, {useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../../actions/widget-actions";
import {connect} from 'react-redux'

const WidgetList = (
    {
        widgets=[],
        createWidget,
        findWidgetsForTopic,
        updateWidget,
        deleteWidget,
    })  => {
    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {widget.type === "HEADING" &&
                            <HeadingWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}/>
                            }
                            {widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
            {/*{JSON.stringify(widgets)}*/}
        </div>
    )
}
const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
        deleteWidget: (item) => widgetActions.deleteWidget(dispatch, item),
        updateWidget: (widget) => widgetActions.updateWidget(dispatch, widget),
        findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
    }
}
export default connect(stpm, dtpm)(WidgetList)