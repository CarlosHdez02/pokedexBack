-This is the backend side of the project, here was used typescript with express, of course its necessary to install the typescript types for the dependencies
  It also is necessary to do npm install to get the node_modules, then we can do npm run dev to launch the project

  To deal with the cors error the cors package from express was used
    - cors: $ npm install cors
  To make the calls to the database i used .envs for security reasons
   -dotenv # install locally (recommended):npm install dotenv --save
   
  Express because its what we are using to make the API requests and responses
   -express:  npm install express --save

  Mongoose so i can communicate with mongoDB and make it easier 
   -mongo: npm install mongoose --save

  PDF because i missunderstood the requirements and made pdfs from my backend side
   pdf-lib: npm install --save pdf-lib

   Also installed Jest for tests but because of lack of time i could make them

  i deployed my backend on render.com
  my database is hosted on atlas 
  