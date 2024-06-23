
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Projects from './paginas/Projects';
import Resume from './paginas/Resume';






function App() {
    console.log('prueba')
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />

                </Routes>
            </Router>



        </>
    )



}


export default App;