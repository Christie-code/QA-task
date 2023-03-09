# QA-task

Testing the API
The API documentation is done using Postman and can be accessed here. 

Install dependencies by running npm install on the terminal on the /naya-api folder
Start the local API server, by running npm start 
The API will be running on http://localhost:9000. This is your baseUrl.
On Postman, make sure to choose the Naya-Studio Dev Environment.
You are all good to start testing.

Testing the FrontEnd E2E.
The Frontend e2e tests were written using cypress and cucumber to support BDD functional test cases.

Install dependencies by running npm install on the terminal on the /naya-web folder.
Start the react app by running npm start.
Start cypress studio  by running npm run cypress:open
Choose E2E Testing on the options presented by cypress studio.
The Tests Should be run in the following order:
Login,
CreateSketch,
ViewSketch,
DrawElements,
Logout,

Testing React Components
The Component tests were written using cypress.
Install dependencies by running npm install on the terminal on the /naya-web folder,
Start the react app by running npm start.
Start cypress studio  by running npm run cypress:open
Choose Component Testing on the options presented by cypress studio,
You can run tests for the following components:
ColorPicker
SketchPreview



Use npm start to run the server in naya-web and naya-api

Set MONGO_URI to database link in .env of backend
