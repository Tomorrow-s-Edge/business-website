import React, {useState} from "react";
import AdaptiveCardDetailPage from "../pages/AdaptiveCardDetailPage.jsx";
import SignatureCanvasCardDetailPage from "../pages/SignatureCanvasCardDetailPage.jsx";
import GoogleMapsDetailPage from "../pages/GoogleMapsDetailPage.jsx";

function Homepage() {

    const tools = [
        { type: "adaptive", title: "React Adaptive Cards", description: "Modern, dynamic UI components inside Business Central.", img: "./react-adaptive-cards.png" },
        { type: "signature", title: "Signature Canvas", description: "Capture signatures directly in your workflows.", img: "./signature-canvas.png"  },
        { type: "maps", title: "Google Maps Add‑ins", description: "Location-aware tools integrated into Business Central.", img: "./google-maps.png"  }
    ];

    const [selectedTool, setSelectedTool] = useState(null);


    const renderDetailPage = () => {
        if (selectedTool === null) return null;

        const item = tools[selectedTool];

        switch (item.type) {
            case "adaptive":
                return (
                    <AdaptiveCardDetailPage
                        item={item}
                        onClose={() => setSelectedTool(null)}
                    />
                );
            case "signature":
                return (
                    <SignatureCanvasCardDetailPage
                        item={item}
                        onClose={() => setSelectedTool(null)}
                    />
                );
            case "maps":
                return (
                    <GoogleMapsDetailPage
                        item={item}
                        onClose={() => setSelectedTool(null)}
                    />
                );
        }
    }

    return (
        <div>

            {/*tools section*/}
            <section className="container-fluid snap-section py-5" id="features">
                <div className="row py-5">
                    <div className="container-fluid tools-banner">
                        <div className="container"><h2>Our Tools</h2> <p>React Adaptive Cards • Signature
                            Canvas • Google Maps Add-ins</p></div>
                    </div>

                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="col-md-4"
                            onClick={() => setSelectedTool(index)}
                        >
                            <div className="card shadow-sm p-3">
                                <img src={tool.img} className="img-fluid mb-3"
                                     alt="Feature 1"/>
                                <h5>{tool.title}</h5>
                                <p>{tool.description}</p>
                            </div>
                        </div>
                    ))}



                    {renderDetailPage()}

                </div>
            </section>


            {/*mission vision section*/}
            <section className="container-fluid full-section py-5">

                <div className="row mb-4">
                    <div className="col-md-6 align-content-center">

                        <div className="card shadow-sm container text-center p-4">
                            <h3 className="mb-3">Our Mission</h3>
                            <p className="lead">At Magam<span className="text-blue">it</span>, our mission is to empower businesses by delivering
                                innovative tools and
                                add‑ins that seamlessly integrate with Microsoft Dynamics 365 Business Central. We
                                are
                                committed to enhancing the functionality and user experience of Business Central,
                                helping
                                our clients achieve greater efficiency and success in their operations.</p>

                        </div>
                    </div>

                    <div className="col-md-6 align-content-center">
                        <div className="card shadow-sm container text-center p-4">
                            <h3 className="mb-3">Our Vision</h3>
                            <p className="lead">Our vision is to be the leading provider of cutting‑edge solutions
                                for
                                Microsoft Dynamics 365 Business Central,
                                recognized for our innovation, reliability, and exceptional customer service. We
                                strive
                                to
                                continuously evolve our offerings to meet the changing needs of businesses, enabling
                                them to
                                thrive in a competitive landscape.</p>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm row mb-4">
                    <div className="container text-center p-4">
                        <h3 className="mb-3">Our Values</h3>
                        <ul className="list-unstyled lead">
                            <li><strong>Innovation:</strong> We are dedicated to pushing the boundaries of what’s
                                possible, continuously developing new and improved solutions.
                            </li>
                            <li><strong>Customer Focus:</strong> Our clients are at the heart of everything we do.
                                We listen, understand, and deliver solutions that meet their unique needs.
                            </li>
                            <li><strong>Integrity:</strong> We operate with honesty and transparency, building trust
                                with our clients and partners.
                            </li>
                            <li><strong>Collaboration:</strong> We believe in the power of teamwork, both within our
                                company and with our clients, to achieve the best results.
                            </li>
                            <li><strong>Excellence:</strong> We strive for excellence in every aspect of our work,
                                from product development to customer service.
                            </li>
                        </ul>
                    </div>
                </div>

            </section>


        </div>
    );
}

export default Homepage;