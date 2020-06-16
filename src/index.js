const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

/* Fake Device */
const projects = [];

/* Api de Projetos */
app.get('/projects', (request, response) => {
    const { title } = request.query;
    
    const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects

    return response.json(results)
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
    
    const project = {
        id: uuid(),
        title,
        owner
    };

    projects.push(project);

    return response.status(201).json(project);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    
    const index = projects.findIndex(project => project.id === id);
    if (index < 0) {
        return response.status(400).send({error: "Project not found."})
    }

    const {title, owner} = request.body;
    const project = {
        id,
        title,
        owner
    }

    projects[index] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const index = projects.findIndex(project => project.id === id);
    if (index < 0) {
        return response.status(400).send({error: "Project not found."})
    }

    projects.splice(index, 1);

    return response.status(204).send();
});

/* Console message that tells us that this app has started */
app.listen(3333, () => {
    console.log("🚀 Backend has started!")
});