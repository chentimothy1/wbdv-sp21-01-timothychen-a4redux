import React from 'react'

const ImageWidget = (
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

                    <div>
                        URL
                        <input value={widget.url} className="form-control" />
                        width
                        <input value={widget.width} className="form-control" />
                        height
                        <input value={widget.height} className="form-control" />
                    </div>
                </div>
            }
        </>
    )
}

export default ImageWidget