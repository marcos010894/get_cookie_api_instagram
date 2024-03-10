const express = require('express');
const { igApi, getCookie } = require('insta-fetcher');

const app = express();
const port = 3000;

// Rota para obter o session ID
app.get('/session', async (req, res) => {
    try {
        // Recupera os parâmetros da query string
        const username = req.query.username;
        const password = req.query.password;

        if (!username || !password) {
            return res.status(400).json({ error: 'Parâmetros username e password são obrigatórios' });
        }

        const session_id = await getCookie(username, password);
        res.json({ session_id });
    } catch (error) {
        console.error('Erro na solicitação:', error);
        res.status(500).json({ error: 'Erro na solicitação' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


//exemplo de uso:
//http://localhost:3000/session?username=devsalzinho&password=mito010894