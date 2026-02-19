import './App.css'
import Header from "./components/Header.jsx";

function App() {

  return (
      <div className="app-container d-flex flex-column min-vh-100">
          {/*hero section*/}
          <main class="container-fluid full-section">
              <Header/>
          </main>

          {/*tools section*/}
          <section className="container-fluid snap-section py-5">
              <div className="row py-5">
                  <div className="container-fluid tools-banner">
                      <div className="container"><h2>Our Tools</h2> <p>React Adaptive Cards • Signature
                          Canvas • Google Maps Add-ins</p></div>
                  </div>
                  <div className="col-md-4">
                      <div className="card shadow-sm p-3">
                          <img src="src/assets/react-adaptive-cards.png" className="img-fluid mb-3"
                               alt="Feature 1"/>
                          <h5>React Adaptive Cards</h5>
                          <p>Modern, dynamic UI components inside Business Central.</p>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="card shadow-sm p-3">
                          <img src="src/assets/signature-canvas.png" className="img-fluid mb-3"
                               alt="Feature 2"/>
                          <h5>Signature Canvas</h5>
                          <p>Capture signatures directly in your workflows.</p>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="card shadow-sm p-3">
                          <img src="src/assets/google-maps.png" className="img-fluid mb-3"
                               alt="Feature 3"/>
                          <h5>Google Maps Add‑ins</h5>
                          <p>Location-aware tools integrated into Business Central.</p>
                      </div>
                  </div>
              </div>
          </section>


          {/*mission vision section*/}
          <section className="container-fluid full-section py-5">

              <div className="row mb-4">
                  <div className="col-md-6 align-content-center">

                      <div className="card shadow-sm container text-center p-4">
                          <h3 className="mb-3">Our Mission</h3>
                          <p className="lead">At Business IT, our mission is to empower businesses by delivering
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


          {/*footer*/}
          <footer className="container-fluid full-section bg-dark text-white py-5">
              <div className="container text-center"><h4>Contact Us</h4> <p>Email • LinkedIn • GitHub</p></div>

              <div className="bg-dark text-white text-center py-3 mt-auto">
                  <small>© {new Date().getFullYear()} NagagamIT — All rights reserved.</small>
              </div>
          </footer>
      </div>
  )
}

export default App
