import React, { useEffect, useState } from "react";

import { connect } from 'react-redux'
// implement EditableItem later
// import EditableItem from "../../editable-item";
import { useParams } from "react-router-dom";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";


import widgetService from "../../../services/widget-service"
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets = [],
        findWidgetsForTopic,
        createWidget,
        updateWidget,
        deleteWidget,
    }) => {

    const [editingWidget, setEditingWidget] = useState({})

    const { topicId } = useParams();

    const wListDeleteWidget = (widget) => {
        deleteWidget(widget);
        setEditingWidget({});
    };

    const wListUpdateWidget = (widget) => {
        console.log(widget)
        updateWidget(widget);
        setEditingWidget({});
        findWidgetsForTopic(topicId);
    };

    const wListEditWidget = () => { };

    useEffect(() => {
        findWidgetsForTopic(topicId);
    }, [topicId])

    return (
        <div>
            <h2>Widgets <i className="btn btn-primary fas fa-plus" onClick={() => createWidget(topicId)}></i></h2>
            <ul className="list-group">
                {
                    widgets.map(w =>
                        <li key={w.id} className="list-group-item">

                            {/* displays edit and delete */}
                            <div>
                                {
                                    editingWidget.id === w.id &&
                                    <>
                                        <i onClick={() => wListUpdateWidget(editingWidget)} className="fas fa-2x fa-check float-right"></i>
                                        <i onClick={() => wListDeleteWidget(w)} className="d-inline fas fa-2x fa-trash float-right"></i>
                                    </>
                                }
                                {
                                    editingWidget.id !== w.id &&
                                    <>
                                        <i onClick={() => setEditingWidget(w)} className="fas fa-2x fa-cog float-right"></i>
                                    </>
                                }
                            </div>


                            {/* show widgets */}
                            <div>
                                {w.type === "HEADING" &&
                                    <HeadingWidget
                                        widget={w}
                                        editing={editingWidget.id === w.id}
                                        editingWidget={editingWidget}
                                        setEditingWidget={setEditingWidget} />}
                                {w.type === "PARAGRAPH" &&
                                    <ParagraphWidget
                                        widget={w}
                                        editing={editingWidget.id === w.id}
                                        editingWidget={editingWidget}
                                        setEditingWidget={setEditingWidget} />}
                                {w.type === "LIST" &&
                                    <ListWidget
                                        widget={w}
                                        editing={editingWidget.id === w.id}
                                        editingWidget={editingWidget}
                                        setEditingWidget={setEditingWidget} />}
                                {w.type === "IMAGE" &&
                                    <ImageWidget
                                        widget={w}
                                        editing={editingWidget.id === w.id}
                                        editingWidget={editingWidget}
                                        setEditingWidget={setEditingWidget} />}

                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets,
})

const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(theWidgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: theWidgets,
            }))
    },
    createWidget: (topicId) => {
        widgetService.createWidget(topicId,
            {
                text: "New Widget",
                type: "HEADING",
                size: 1,
            })
            .then(theActualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: theActualWidget,
            }))
    },
    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete.id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: widgetToDelete,
            }))
    },
    updateWidget: (widgetToUpdate) => {
        widgetService.updateWidget(widgetToUpdate)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widgetToUpdate: widgetToUpdate,
            }))
    }
})

export default connect(stpm, dtpm)(WidgetList);