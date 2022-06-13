////////////////////////////////////////////////
//      Estartando Devs - Atividade 1         //
//                                            //
//              Liana Meneghini               //
//        discord@lianameneghini#0703         //
////////////////////////////////////////////////

const fs = require("fs");
const path = require('path');
const os = require ('os')




const getDirectoryDataPath = () => {
    return path.dirname(__filename)
};
  
const createFile = async (data, fileName) => {

    try {
        fs.writeFile(fileName+".txt", data, (err) => {
            if (err) throw err
            console.log('The file has been created!')
        })
    } catch (err) {
        console.log("Error creating file")
    }


};
  

async function renameFile(currentName, newName) {

    try {
        fs.rename((currentName+".txt"),(newName+".txt"), (err) => {
            if (err) throw err
            console.log('The file has been renamed!')
        })
    } catch (err) {
        console.log("Error renaming file")
    }


}


const deleteFile = async (fileName) => {

    try {
        fs.unlink(fileName+".txt", (err) => {
            if (err) throw err
            console.log(`${fileName} deleted successfully!`)
        })
    } catch (err) {
        console.log("Error deleting file")   
    }
};


getDirectoryDataPath()
createFile("este eh um arquivo de texto","nomeArquivo")
renameFile("nomeArquivo","novoNomeArquivo")
deleteFile("novoNomeArquivo")

