import "./InputNotes.css"

export const InputNotes = () => {
    return (
        <div className="d-flex flex-column input-note">
            <input placeholder="Enter a title" />
            <textarea placeholder="Enter a note"/>
        </div>
    )
}