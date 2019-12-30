const app = require('./api/app.js');

const port = 4000;

app.listen(port, ()=>console.log(`Server started on port:${port}`));

