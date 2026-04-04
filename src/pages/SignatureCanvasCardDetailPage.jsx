import "./PopupStyle.css";

function SignatureCanvasCardDetailPage({item, onClose}) {
    if (!item) return null;
    return (
        <div className="backdrop">
            <div className="popup detail-page-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>x</button>

                <div>
                    {/* Back link */}
                    <a href="#cards-overview" className="back-link" onClick={onClose}>
                        ← Back to all cards
                    </a>

                    {/* Hero Section */}
                    <header className="hero">
                        <h1>Signature Canvas</h1>
                        <img src="./signature-canvas.png" alt="Signature Canvas Demo" className="img-fluid mb-3"/>

                        <p>
                            The Signature Canvas allows users to draw, capture, and export handwritten
                            signatures directly inside the application. It supports both mouse and touch
                            input, making it suitable for desktop, tablet, and mobile workflows.
                        </p>
                    </header>
                    <br/>
                    <br/>


                    {/* Live Preview */}
                    <section className="preview-section">

                        <h2>Live Preview</h2>
                        <div className="card-preview">
                        </div>
                    </section>
                    <br/>
                    <br/>


                    {/* Properties */}
                    <section className="properties-section">
                        <h2>What this feature demonstrates</h2>
                        <ul>
                            <li><strong>Interactive drawing:</strong> Users can sign using mouse or touch.</li>
                            <li><strong>Clear functionality:</strong> Reset the canvas instantly.</li>
                            <li><strong>Export options:</strong> Save the signature as an image or Base64 string.</li>
                            <li><strong>Responsive design:</strong> Canvas automatically adapts to screen size.</li>
                            <li><strong>Reusable component:</strong> Can be embedded in forms, contracts, or approval
                                flows.
                            </li>
                        </ul>
                        <br/>
                        <br/>


                        <h2>Use cases</h2>
                        <ul>
                            <li>Digital contract signing</li>
                            <li>Customer confirmations</li>
                            <li>Delivery or pickup signatures</li>
                            <li>Internal approval workflows</li>
                        </ul>

                        <p>
                            This detail page showcases how the Signature Canvas integrates into the UI and
                            how it can be extended or customized for real-world business scenarios.
                        </p>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default SignatureCanvasCardDetailPage;