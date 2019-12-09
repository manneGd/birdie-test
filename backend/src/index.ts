import express = require('express');
import * as path from "path";
import app from './application';

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'frontend/build')));
// Handle React routing, return all requests to React app
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}


app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
