# One Developer's View

These are the steps you *might* take to complete this project. There's no right way to make an Express app -- nor any other app.

## Get something on Github

1. Create a new empty Github repository called "Project3". You can change the name later.
- Create the skeleteon of your Node app:

    ```bash
    $ git clone git@github.com:myusername/project3.git
    $ cd project3
    $ npm init # Then hit 'return' a bunch of times
    $ npm install --save body-parser express hbs method-override mongoose

    $ mkdir db
    $ touch db/schema.js
    $ touch db/seeds.js

    $ mkdir models
    $ touch models/.keep

    $ mkdir views
    $ touch views/layout.hbs
    $ touch views/index.hbs

    $ mkdir controllers
    $ touch controllers/.keep

    $ mkdir public
    $ mkdir public/js
    $ touch public/js/script.js
    $ touch public/styles.css

    $ touch app.js
    ```
- Then, create a basic `app.js`:

    ```js
    var express = require("express");
    var app = express();
    var bodyParser = require("body-parser");

    app.use(bodyParser.json());
    app.use(express.static("public"));
    app.set("view engine", "hbs");

    app.listen(3000, function(){
      console.log("Wheee! I'm working!");
    });
    ```
- Make sure it's working:

    ```bash
    $ nodemon app.js
    ```
- Push that to Github:

    ```bash
    $ git add .
    $ git commit -m "Initial commit"
    $ git push origin master
    ```

## [ERD](https://github.com/ga-dc/curriculum/tree/master/04-ruby-mvc-sinatra/domain_modeling)

1. Think of what apps can be made with **exactly** two models: posts and comments, restaurants and reviews, movies and reviews, animals and mating calls, questions and answers...
- Pick one of those combinations for your project. Just focus on those two models. Don't worry about user authentication (which is **not** required for this app). These two models are the star of what you're making.
- Create an ERD of how you want these models to interact with each other.
- Take a picture/screenshot of your ERD.
- In your project repo:

    ```bash
    $ mkdir planning
    # Then, put your ERD picture in the planning folder
    ```
- Push to Github.

## [Plan with Jasmine](https://github.com/ga-dc/curriculum/tree/master/08-single-page-web-apps/tdd)

1. Create a folder in your project repo for tests.

    ```bash
    $ mkdir spec
    $ touch spec/planning-spec.js
    ```
- If you don't have `jasmine-node` on your computer:

    ```bash
    $ npm install --global jasmine-node
    ```
- Write an outline of what your models are supposed to do in the `planning-spec` file:

    ```js
    describe("A movie", function(){
      it("has a title");
      describe("when its number of reviews", function(){
        describe("is zero", function(){
          it("is 'unwatched'");
        });
        describe("is greater than zero", function(){
          it("is 'watched'");
        });
      });
    });
    describe("A review", function(){
      it("has content");
    });
    ```
- Run your tests:

    ```bash
    $ jasmine-node --verbose spec
    ```
  You haven't written any code to make your tests actually *test* something, but even if you never do, you've already added a lot of legitimacy to your app by showing you can plan with tests.
- Push to Github.


## [User stories](https://github.com/ga-dc/curriculum/tree/master/02-intermediate-front-end/process-stories-wireframes)

1. Create a readme for your app:

    ```bash
    $ touch readme.md
    ```
- In the readme, write at least 5 user stories based on what you wrote with Jasmine.
- Push to Github.

## [Define your schema](https://github.com/ga-dc/tunr_mongo_oojs/blob/master/db/schema.js)

1. In your `db/schema.js` file:

    ```js
    var mongoose = require('mongoose')
    var Schema = mongoose.Schema;
    var MovieSchema = new Schema({
      title: String
    })
    var Movie = mongoose.model("Movie", AuthorSchema)
    ```
- Feel free to refer to [reminders_mongo](https://github.com/ga-dc/reminders_mongo/blob/master/db/schema.js). Start simple, with maybe just one field for each model and one association connecting them. You can add more later.


## [Write a few seeds](https://github.com/ga-dc/reminders_mongo/blob/master/db/seeds.js)
1. In your `dbs/seeds.js` file:

    ```bash
    var mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost/movies");
    var Movie = require("../models/movie");
    Movie.remove().then(function(){
      new Movie({title: "Goldeneye"}).save();
      new Movie({title: "Little Mermaid"}).save();
    });
    ```
- Run your seeds:

    ```bash
    # In another Terminal window...
    $ mongod
    ```
    ```bash
    # In another window, in your repo...
    $ node db/seeds.js
    ```
- Make sure your seeds worked:

    ```bash
    $ mongo
    # This is NOT mongod, which must still be running in another window
    # Remember, mongod is MongoDB's "blue elephant"
    > use your-database-name
    > show collections
    > db.movies.find()
    ```
- Push to Github.

## Define some routes

1. Create a controller file:

    ```bash
    $ touch controllers/moviesController.js
    ```
- Link to your controller file in `app.js`:

    ```js
    app.use("/movies", moviesController);
    ```
- Put some RESTful routes that *don't do anything yet* in the controller file:

    ```js
    var express = require("express");
    var router = express.Router();

    router.get("/", function(req, res){
      res.send("This is the movies INDEX.");
    });
    router.get("/:id", function(req, res){
      res.send("This SHOWs movie number " + req.params.id);
    });
    router.post("/", function(req, res){
      res.send("This CREATEs a movie");
    });
    router.patch("/:id", function(req, res){
      res.send("This UPDATEs movie number " + req.params.id);
    });
    router.delete(":id", function(req, res){
      res.send("This DELETEs movie number " + req.params.id);
    });
    ```
- Test them out by going to `localhost:3000/movies` and `localhost:3000/movies/32` in your browser.
- Push to Github.

## [Deploy to Heroku](https://github.com/ga-dc/curriculum/tree/master/09-project-3/deployfest) (for the first time)

## Add your models

1. Create your model files
- Add [the appropriate code](https://github.com/ga-dc/tunr_mongo_oojs/blob/master/models/artist.js) to them
- Require them in [the appropriate controllers](https://github.com/ga-dc/tunr_mongo_oojs/blob/master/controllers/artists.js#L3)
- Update the "index" route in one of your controllers to display the information about this model:

    ```js
    router.get("/", function(req, res){
      Movie.find().then(function(movies){
        res.json(movies);
      });
    });
    ```
- Test it out by going to `localhost:3000/movies` in your browser.
- Push to Github.

## Create a front-end

1. Put some HTML in your `layout.hbs`:

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
        <link rel="stylesheet" href="styles.css" />
        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src="js/script.js"></script>
      </head>
      <body>
        {{{ body }}}
      </body>
    </html>
    ```
- Put anything in `index.hbs`:

    ```html
    <h1>Woo, this is working.</h1>
    ```
- Make your `app.js` show the `index.hbs`:

    ```js
    app.get("/", function(req, res){
      res.render("index", {});
    });
    ```
- Test it by going to `localhost:3000` in your browser (with `nodemon` running).
- Push to Github.

## Make your front-end load data from your API

1. In your `script.js` file:

    ```js
    $(document).ready(function(){
      $.getJSON("localhost:3000/movies").then(function(movies){
        console.log(movies);
      });
    });
    ```
- Make sure it works by going to `localhost:3000` and looking in the Chrome console.
- Now make the data show up on your webpage:

    ```js
    $(document).ready(function(){
      $.getJSON("localhost:3000/movies").then(function(movies){
        for(var i = 0; i < movies.length; i++){
          $("body").append("<p>" + movie.title + "</p>");
        }
      });
    });
    ```
- Push to Github.
- Deploy to Heroku again.

## Pick one small thing to add, and add it.

Later, rinse, repeat, until you've drawn the rest of the owl!

