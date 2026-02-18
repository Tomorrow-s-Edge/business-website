import './App.css'
import Header from "./components/Header.jsx";

function App() {

  return (
    <div className="app-container d-flex flex-column min-vh-100">
        <Header/>
        <main className="flex-grow-1 container py-4">
            <h1 className="mb-4">Welcome to My App</h1>

            <div className="card shadow-sm p-4">
                <p>This is your main content area.</p>
            </div>
        </main>
        <footer className="bg-dark text-white text-center py-3 mt-auto">
            <small>© {new Date().getFullYear()} Business IT — All rights reserved.</small>
        </footer>
    </div>
  )
}

export default App
