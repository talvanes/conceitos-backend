const express = require('express');

const app = express();

app.use(express.json());

/* Api Mestra */
app.get('/', (request, response) => {
    return response.json({ message: "Hello, GoStack!" });
});

/* Api de Projetos */
app.get('/projects', (request, response) => {
    const query = request.query;
    console.log(query);

    return response.json([
        {id: 1, name: "Projeto 1"},
        {id: 2, name: "Projeto 2"},
        {id: 3, name: "Projeto 3"},
    ])
});

app.post('/projects', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json([
        {id: 1, name: "Projeto 1"},
        {id: 2, name: "Projeto 2"},
        {id: 3, name: "Projeto 3"},
        {id: 4, name: "Projeto 4"}
    ]);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    console.log(id);

    return response.json([
        {id: 1, name: "Projeto 4"},
        {id: 2, name: "Projeto 2"},
        {id: 3, name: "Projeto 3"},
    ]);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;
    console.log(id);

    return response.json([
        {id: 2, name: "Projeto 2"},
        {id: 3, name: "Projeto 3"},
    ]);
});

/* Console message that tells us that this app has started */
app.listen(3333, () => {
    console.log("🚀 Backend has started!")
});