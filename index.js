const app = require('./config/express')

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
