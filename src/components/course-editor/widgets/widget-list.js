import React, { useEffect, useState } from "react";

import { connect } from 'react-redux'
import EditableItem from "../../editable-item";
import { useParams } from "react-router-dom";
import TopicService from "../../../services/topic-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import widgetService from "../../../services/widget-service"

const WidgetList = (
    {
        widgets=[],
        findWidgetsForTopic,
        createWidget,
        updateWidget,
        deleteWidget,
    }) => {} 

    useEffect(() => {
        findWidgetsForTopic()
    }, [])



    return(
        <div className="mda-widget-window">
            <ul className="list-group">
                {widgets.map(widget =>
                <li className="list-group-item"
                    key={widget.id}>
                    {
                        widget.type === "HEADING" &&
                            <HeadingWidget widget={widget}/>
                    }
                    {
                        widget.type === "PARAGRAPH" &&
                        <ParagraphWidget widget={widget}/>
                    }
                </li>
                )}
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => ({
    findAllWidgets: () => {
        widgetService.findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
    }
})

export default connect(stpm, dtpm)(WidgetList)