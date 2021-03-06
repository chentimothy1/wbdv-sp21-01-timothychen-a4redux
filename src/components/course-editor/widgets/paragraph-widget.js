import React from 'react'

const ParagraphWidget = (
    {
        widget,
        editing = false,
        editingWidget,
        setEditingWidget,
    }) => {

    return (
        <>
            {
                editing &&
                <div style={{ "width": "85%" }}>
                    <select
                        //widget type selector
                        //add more widgets here later
                        className="m-2 form-control"
                        onChange={(e) => setEditingWidget({ ...editingWidget, type: e.target.value })}
                        value={editingWidget.type}>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>

                    {/* inserting text here */}
                    <textarea
                        className="m-2 form-control"
                        onChange={(e) => setEditingWidget({ ...editingWidget, text: e.target.value })}
                        value={editingWidget.text}
                        rows="8">
                    </textarea>
                </div>
            }
            {
                !editing &&
                <>
                    <p>{widget.text}</p>
                </>
            }
        </>
    )
}

export default ParagraphWidget
