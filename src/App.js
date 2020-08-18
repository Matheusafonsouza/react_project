import React, { useState } from 'react';

import Header from './components/Header';

import Image from './assets/photo.jpeg';

import './App.css';

function App() {
    const [projects, setProjects] = useState(['Project 1', 'Project 2', 'Project 3']);

    function handleAddProject() {
        setProjects([...projects, `New project ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Homepage" />

            <img src={Image} width="200" alt="image" />

            <ul>
                {projects.map(project => (
                    <li key={project}>{project}</li>
                ))}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar um projeto</button>
        </>
    );
}

export default App;