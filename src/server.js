const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Student Express App running on http://0.0.0.0:${PORT}`);
});
