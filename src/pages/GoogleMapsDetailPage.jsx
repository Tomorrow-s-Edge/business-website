import "./PopupStyle.css";

function GoogleMapsDetailPage({item, onClose}) {
    if (!item) return null;
    return (
        <div className="backdrop">
            <div className="popup detail-page-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>x</button>
                <h1>Google Maps Add-ins Detail Page</h1>
                <p>This is a placeholder for the Signature Canvas Card detail page.</p>
            </div>
        </div>
    );
}

export default GoogleMapsDetailPage;