const express = require('express')
const { json } = require('express/lib/response')
const app = express()

app.use(express.json());
/** 
 * Imagine there is a list of tasks like this: 
 *  1. Enroll to Scaler 
 *  2. Learn Node.js
 *  3. Learn React.js
 *  4. Get a job
 *  5. Get a girlfriend/boyfriend
 *  
 */
let tasklist=[ 'Enroll to Scaler',
        'Learn Node.js',
        'Learn React.js',
        'Get a job',
        'Get a girlfriend/boyfriend']

/**
 * When GET request is sent to 127.0.0.1:4114/tasks,
 * response will be 
 *      [
 *         'Enroll to Scaler',
 *         'Learn Node.js',
 *         'Learn React.js',
 *         'Get a job',
 *         'Get a girlfriend/boyfriend'
 *      ]
 */
app.get('/',(req,res)=>{
    res.send("Home Page!")
})
app.get('/tasks', (req, res) => {
  res.send(tasklist);
})

/**
 * If GET request is sent to 127.0.0.1:4114/tasks/1,
 * Then response will be 
 * 
 *     'Enroll to Scaler'
 * 
 * If GET request is sent to 127.0.0.1:4114/tasks/2
 * Then response will be
 * 
 *    'Learn Node.js'
 */

app.get('/tasks/:id', (req, res) => {

    // BONUS: figure out how `:id` part works
    if(req.params.id<tasklist.length) 
    res.send(tasklist[req.params.id]);
    else
    res.send("Invalid ID");

})

app.delete('/tasks/:id', (req, res) => {
    
    // Delete task with given id
    del_id=req.params.id;
    if(req.params.id<tasklist.length)
    {
        tasklist.splice(del_id,1)
        res.send(del_id+" is Deleted Successfully");

    } 
    else
    res.send("Invalid ID");


})

/**
 * When POST request is sent to 127.0.0.1:4114/tasks,
 * with the body:
 *          { "task": "Complete NodeJS Assignment" } 
 * 
 * Then a new task will be added to the list.
 *   
 *   6. Complete NodeJS Assignment
 */

app.post('/tasks', (req, res) => {
 //   res.send(tasklist[req.body.Task]);

if(!tasklist.includes(req.body.Task))
{
tasklist.push(req.body.Task);
res.send(req.body.Task+" is Pushed into TaskList!");
}
else{
    res.send("Task is Already Present!! Either Finish it OR Delete the Task!");
}

})

app.listen(4114, () => {
    console.log('server started on http://127.0.0.1:4114')
})

/**
 * BONUS: 
 *  - Save the tasks to a file tasks.json 
 *  - Update the file every time a new task is created/deleted
 *  - When server is restarted, old tasks should be available 
 *     - Read the file at server start to load the saved tasks
 */