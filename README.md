# QuestWich

## Instructions on how I built the application
### File Structure for Project
#### Quest-Portal
#### User-Portal

### Initial Setup
1. Create Angular Application
```
ng new Quest-Portal
```
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
```
mongod
```
5. Start Application Server from main directory (Quest-Portal)
```
node server.js
```
6. Create Angular Service for common AJAX API calling from main directory (Quest-Portal).
```
//File will be saved in Quest-Portal/src/app
ng g s common -spec=false
```
7. Run Angular App from main directory (Quest-Portal)
```
ng serve
```
8.
9.
10.
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
..*Adding Bootstrap and Yarn to Project
<br />

### Technologies Used
:link: [Angular CLI](https://cli.angular.io)<br />
:link: [Angular](https://angular.io)<br />
:link: [Visual Studio Code](https://code.visualstudio.com)<br />

