/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */

 const fs=require('fs');
 
 fs.readFile('data1.txt',async (err,data1)=>{
     if(err) throw err;
     else 
     {
       // console.log(data1.toString());
         fs.appendFile('data.txt',data1.toString(),(err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!')});
     }
 })
 fs.readFile('data2.txt',async (err,data2)=>{
    if(err) throw err;
    else 
    {
       // console.log(data2.toString());
        fs.appendFile('data.txt',data2.toString(),(err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!')});
    }
})
fs.readFile('data3.txt',async (err,data3)=>{
    if(err) throw err;
    else
     {
       // console.log(data3.toString());
        fs.appendFile('data.txt',data3.toString(),(err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!')});
     }
})
fs.readFile('data.txt',(err,data)=>{
    if(err) throw err;
    else
     {
         console.log(data.toString());
     }
    })