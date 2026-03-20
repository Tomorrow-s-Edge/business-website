import "./PopupStyle.css"
function DetailPage({item, onClose}) {
    if (!item) return null

    return(
        <div className="backdrop" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>x</button>
                <h2>{item.title}</h2>
                <p>{item.description}</p>

            </div>
        </div>
    );

}

export default DetailPage;