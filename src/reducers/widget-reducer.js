const initialState = {
    widgets: [
      { title: 'Test Topic 1', _id: '123', type: "1", text: "testing" },
      { title: 'Test Topic 2', _id: '987', type: "2", text: "testing text" },
      { title: 'Test Topic 3', _id: '456', type: "3", text: "this is texting text" },
    ]
  }

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widgets
                ]
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(w => {
                    if (w.id === action.updatedWidget.id) {
                        return action.updatedWidget
                    } else {
                        return w
                    }
                })
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(w => {
                    if (w.id !== action.deletedWidget.id) {
                        return true
                    } else {
                        return false
                    }
                })
            }

        default:
            return state
    }
}

export default widgetReducer