
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const HomeRouter = require('./routes/home');
const Page1Router = require('./routes/page1');
const Page2Router = require('./routes/page2');
const Page3Router = require('./routes/contact');
const Page4Router = require('./routes/video');


app.use('/' , HomeRouter);
app.use('/home' , HomeRouter);
app.use('/AboutMe', Page1Router);
app.use('/Job', Page2Router);     
app.use('/contact', Page3Router);
app.use('/video' , Page4Router)
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
 