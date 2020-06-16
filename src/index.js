const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: "Hello, GoStack!" });
});

app.get('/projects', (request, response) => {
    return response.json([
        {id: 1, name: "Projeto 1"},
        {id: 2, name: "Projeto 2"},
        {id: 3, name: "Projeto 3"},
    ])
});

app.post('/projects', (request, response) => {
    return response.json([
        {id: 1, name: "Projeto 1"},
        {id: 2, name: "Projeto 2"},
        {id: 3, name: "Projeto 3"},
        {id: 4, name: "Projeto 4"}
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        {id: 1, name: "Projeto 4"},
        {id: 2, name: "Projeto 2"},
        {id: 3, name: "Projeto 3"},
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        {id: 2, name: "Projeto 2"},
        {id: 3, name: "Projeto 3"},
    ]);
});

app.listen(3333, () => {
    console.log("🚀 Backend has started!")
});