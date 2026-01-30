const fs=require("fs");


// write a file using fs module

// fs.writeFile("data.txt","Hello world ",(err)=>{
//     if(err){
//         console.log("error in writing in a file : ",err);
//     }
//     else{
//         console.log("file created successfully..");
//     }
// })

// read a file using fs module

fs.readFile("data.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error in reading a file",err);
    }
    else{
        console.log("data is ",data);
    }
})

// append a file using fs module

// fs.appendFile("data.txt","I am Sanket",(err,data)=>{
//     if(err){
//         console.log("Error in append data",err);
//     }
//     else{
//         console.log("Append done in file");
//     }

// })
