//console.log("Hello World");
//console.log(process.argv);
if(process.argv.length<3)
{
    console.log("Hello Guest")
}
else{
    console.log("Hello "+process.argv[2])
}