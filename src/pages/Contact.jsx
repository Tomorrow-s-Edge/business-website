import { useEffect, useRef } from "react";

function Contact() {
    const centerRef = useRef(null);

    useEffect(() => {
        if (centerRef.current) {
            centerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [])
    return (
        <div>
            {/*contact form*/}
            <section className="container-fluid full-section py-5">
                <div className="row">
                    {/*left column*/}
                    <div className="card shadow-sm col-md-6 mb-4">
                        <form className="text-start">
                            <h3 className="mb-4 text-center" ref={centerRef}>Contact Us</h3>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control w-100"
                                    placeholder="Your name"
                                    required
                                />

                            </div>


                            <div className="mb-3">

                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control w-100"
                                    placeholder="your@email.com"
                                    required
                                />

                            </div>


                            <div className="mb-3">

                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="form-control w-100"
                                    placeholder="Write your message here..."
                                    required
                                ></textarea>

                            </div>

                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>

                    {/*right column*/}
                    <div className="col-md-6">
                        <h3 className="mb-4">General Inquiry</h3>

                        <div className="alert alert-info">
                            <p>Have a question about our services or need more information?</p>
                                <p>We’re here to help and will get back to you as soon as possible.</p>
                        </div>

                        <h3 className="mb-4">Suggestions</h3>

                        <div className="alert alert-info">
                            <p>Got an idea that could improve our platform?</p>
                                <p>We’d love to hear your suggestions and explore how we can make things better.</p>
                        </div>


                        <h3 className="mb-4">Feedback</h3>

                        <div className="alert alert-info">
                            <p>Your feedback helps us grow.</p>
                                <p>Whether it’s positive or constructive, we appreciate every message.</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contact;
