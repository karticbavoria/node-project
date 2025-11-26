const fs = require ('fs').promises;
const filePath = require('./database.json');
const{ readData} = require('./utils/file.js');

async function redData(){
    try {
        let data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
        
    } catch (error) {
    console.errors(error);
    }
}

async function writeData(data){
    try{
        awaitfs.writeFile(data, null , 2);
    } catch(error){
        console.error(error);
    }
}
module.exports ={
 readData,
 writeData
};

