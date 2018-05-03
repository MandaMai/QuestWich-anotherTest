# QuestWich

## Instructions on how I built the application
## Running the Application
1. Start MongoDB
```mongod```
2. Start Node Server
```node server.js```
3. Start Angular Application
```ng serve```
4. Have a fourth bash open for Git (if choosing to upload code to github that way)

### File Structure for Project
#### Quest-Portal
#### User-Portal
### Pushing Changes to Git
#### Through Commandline
1. Go to application folder (Quest-Portal)
2. Pull any existing changes
```git pull```
3. Add changes to stage
```git add .```
4. Check what was added
```git status```
5. Commit changes
```
git commit -m "basic note for what was changed"
```
6. Push changes to git
```git push```
7. You may be prompted to log into Git in order for changes to be accepted successfully

#### Through Visual Studio Code
1. Navigate to Source Control Tab (on right-hand side of application)
1. Create New Branch in VS Code
1. Make Code Changes
1. Navigate to Source Control Tab (on right-hand side of application)
1. Click Three Dots (...) And Select Pull
1. Enter Commit Message
1. Click Check Mark
1. When Prompted Let Visual Studio Code Stage Changes
1. Click Three Dots (...) And Select Push
1. Navigate to GitHub Project [QuestWich](https://github.com/MandaMai/QuestWich)
1. Click Button to Create Pull Request
1. Navigate to Pull Requests and Ensure Request Can Merge
1. Merge Branch to Master
1. Navigate back to VS Code to the Source Control Tab
1. Click Three Dots (...) And Select Pull

### Initial Setup
1. Create Angular Application
```ng new Quest-Portal```
2. Install Express and Mongoose
```
npm install express --save
npm install mongoose --save
npm install body-parser --save
```
3. Create server.js file in main directory (Quest-Portal)
```
//From ~/Desktop/QuestWich/Quest-Portal
touch server.js
```
4. Start Mongo database from anywhere (I would recommend Quest-Portal for consistency)
```mongod```
5. Start Application Server from main directory (Quest-Portal)
```node server.js```
6. Create Angular Service for common AJAX API calling from main directory (Quest-Portal).
```
//File will be saved in Quest-Portal/src/app
ng g s common -spec=false
```
7. Run Angular App from main directory (Quest-Portal)
```ng serve```
8. Use Yarn to add bootstrap to project
```
yarn add bootstrap ngx-bootstrap
```
You will also need to add entry to styles array in .angular-cli.json file in src folder
Styles in .angular-cli.json will look like this...
```
"styles": [
    "styles.css"
    ,”../node_modules/bootstrap/dist/css/bootstrap.min.css”
    ],
```
9. Restart angular server
```
Ctrl+C
ng serve
```
10. Add Sass to Project (see tutorial below to go through the conversion from .css to .scss. In the future, could change initial project command to  ```ng new app-name --style=scss```
11.
12.
13.
14.
15.
16.
17.
18.
19.
20.



### References and Tutorials Used
:link: [Tutorial Reference](https://www.c-sharpcorner.com/article/angular-5-crud-opration-using-nodeexpressmongo/)<br />
:link: [Additioan Tutorial Reference](http://www.belatrixsf.com/blog/how-to-easily-build-an-angular-5-app-using-visual-studio-code/)<br />
..*Adding Bootstrap and Yarn to Project<br />

:link: [Jasmine and Karma Testing](https://docs.microsoft.com/en-us/visualstudio/cross-platform/tools-for-cordova/debug-test/basic-tests-with-jasmine?view=toolsforcordova-2017)<br />
:link: [Adding Sass to Project](https://scotch.io/tutorials/using-sass-with-the-angular-cli)<br />

### Technologies Used
:link: [Angular CLI](https://cli.angular.io)<br />
:link: [Angular](https://angular.io)<br />
:link: [Visual Studio Code](https://code.visualstudio.com)<br />
:link: [Yarn](https://yarnpkg.com/en/)<br />
:link: [Karma]()<br />

