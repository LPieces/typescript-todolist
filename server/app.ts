import express, { Application } from 'express';
import bodyParse from 'body-parser';
import { readFile } from './utils';


const app: Application = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.all('*',(req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-methods','POST,GET,PUT,DELETE,OPTIONS');
    next();
});

app.get('/todolist',(req, res)=>{
    const todoList: string = readFile('todo.json');
    res.send(todoList);
});

app.post('/toggle',(req, res)=>{
    
});

app.post('/remove',(req, res)=>{
    
});

app.post('/add',(req, res)=>{
    
});

app.listen(8080,()=>{
    console.log("Listening on port 8080");
});