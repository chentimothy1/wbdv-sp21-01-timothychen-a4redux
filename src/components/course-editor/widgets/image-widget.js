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

                    {/* URL */}
                    <h2 className="m-2">Image URL:</h2>
                    <input
                        className="m-2 form-control"
                        onChange={(e) => setEditingWidget({ ...editingWidget, urlRef: e.target.value })}
                        value={editingWidget.urlRef}>
                    </input>

                    {/* Width */}
                    <h2 className="m-2">Image Width:</h2>
                    <input
                        className="m-2 form-control"
                        onChange={(e) => setEditingWidget({ ...editingWidget, width: e.target.value })}
                        value={editingWidget.width}>
                    </input>

                    {/* Height */}
                    <h2 className="m-2">Image Height:</h2>
                    <input
                        className="m-2 form-control"
                        onChange={(e) => setEditingWidget({ ...editingWidget, height: e.target.value })}
                        value={editingWidget.height}>
                    </input>

                </div>
            }
            {
                !editing &&
                <>
                    <img src={widget.urlRef} alt="img"
                        width={widget.width}
                        height={widget.height}
                    />
                </>
            }
        </>
    )
}

export default ImageWidget