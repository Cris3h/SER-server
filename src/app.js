const server = require('./server');
const { PORT } = require('./config/envs');

server.listen(PORT, () => {
    console.log(`server listening in port ${PORT}`);
})