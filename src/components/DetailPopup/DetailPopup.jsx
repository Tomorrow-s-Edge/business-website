import "./PopupStyle.css";

function DetailPopup({item, onClose }) {
    if (!item) return null;

    return (
        <div className="backdrop" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>Close</button>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default DetailPopup;