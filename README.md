## deployment in firebase:

npm i -g firebase-tools
login to firebase portal
firebase deploy -> type in terminal it will open a window as google open and redirect back to vs code
then in terminal type -> firebase init
npm run build

make sure you are in the folder where your firbase.js file is
then one option will come in terminal go for that and select hoisting with spacebar and hit enter
for prject select your project and then for public directory give answer as build
and singlepageapp -> y

make a build after that
firebase deploy

done!

## stripe for payment

@stripe/stripe-js
@stripe/react-stripe-js

## for backend stuff

firebase init
select the cloud option
select javascript as language and set eslint and dependencies to yes.
you will get a function folder which is all the backend.

## BACKEND STEPS:

set up every thing in index.js of function folder.
start the emulator using cmd as firebase emulators:start (its like running the local server without hoisting just like in java using apache server.)
http://localhost:5001/clone-b6acf/us-central1/api -> this url will show u the result
