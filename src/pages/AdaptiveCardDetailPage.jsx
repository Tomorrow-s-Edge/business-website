import "./PopupStyle.css";
import "./styles/adaptive-card.css"

function AdaptiveCardDetailPage({item, onClose}) {
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
                        <h1>React Adaptive Cards</h1>
                        <img src="./react-adaptive-cards.png" alt="Signature Canvas Demo" className="img-fluid mb-3"/>

                        <p>
                            This Adaptive Card displays customer information in a compact,
                            responsive layout. It supports dynamic data, theming, and action
                            buttons.
                        </p>
                    </header>
                    <br/>
                    <br/>

                    {/* Live Preview */}
                    <section className="preview-section">
                        <h2>Live Preview</h2>
                        <div className="card-preview">
                            {/*<MyAdaptiveCard*/}
                            {/*    name="Jasper Villas"*/}
                            {/*    email="jasper@example.com"*/}
                            {/*    status="Active"*/}
                            {/*    lastLogin="2026-03-18"*/}
                            {/*/>*/}
                        </div>
                    </section>
                    <br/>
                    <br/>

                    {/* Properties */}
                    <section className="properties-section">
                        <h2>Component Properties</h2>
                        <table className="props-table">
                            <thead>
                            <tr>
                                <th>Prop</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Required</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>Full name displayed in the card</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td>string</td>
                                <td>Customer email address</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>status</td>
                                <td>"Active" | "Inactive"</td>
                                <td>Current customer status</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>lastLogin</td>
                                <td>string (ISO date)</td>
                                <td>Last login timestamp</td>
                                <td>No</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                    <br/>
                    <br/>

                    {/* Code Example */}
                    <section className="code-section">
                        <h2>Usage Example</h2>
                        <pre className="code-block">
                            {`<MyAdaptiveCard
                              name="Jasper Villas"
                              email="jasper@example.com"
                              status="Active"
                              lastLogin="2026-03-18"
                            />`}
                        </pre>
                    </section>
                    <br/>
                    <br/>

                    {/* Notes */}
                    <section className="notes-section">
                        <h2>Notes</h2>
                        <ul>
                            <li>Fully responsive layout using Adaptive Cards schema.</li>
                            <li>Supports theming (light/dark) automatically.</li>
                            <li>Works with dynamic data from APIs or Business Central.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}


export default AdaptiveCardDetailPage;