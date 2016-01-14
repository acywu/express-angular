# express-angular
A angular JS project talking to a node.js based webserver

## How to use angular-express-seed

### Before you run

    1. Use 'npm install' in the / folder
    2. Install 'bower_components' in the /public folder 
    3. (Optional) If you want to have further development for the frondend, use 'npm install' in the /public folder

### Running the app

Runs like a typical express app:

    node app.js

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      app/              --> frontend app folder
        /images         --> default stylesheet
        /scripts
          /controllers
            book.js     --> controller of book section
            main.js     --> controller of index section
          /directives
            filterlist.html --> custom angular template for filterlist
            filterlist.js   --> custom directives for book section
        /styles
          main.css      --> complied sass
          main.scss     --> all of the styles to be used in on the client side
        /views
          book.html     --> view of the book section
          main.html     --> view of the main section
