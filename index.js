const app = require('./config/express');

app.listen(process.env.PORT || 3001, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
