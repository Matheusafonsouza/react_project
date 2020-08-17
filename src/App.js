import React, { useState } from 'react';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Project 1', 'Project 2', 'Project 3']);

    function handleAddProject() {
        setProjects([...projects, `New project ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Homepage" />
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