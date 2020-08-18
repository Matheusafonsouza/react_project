import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

import Image from './assets/photo.jpeg';

import './App.css';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    function handleAddProject() {
        setProjects([...projects, `New project ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Homepage" />

            <img src={Image} width="200" alt="image" />

            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar um projeto</button>
        </>
    );
}

export default App;