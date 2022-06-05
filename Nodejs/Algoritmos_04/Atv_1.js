////////////////////////////////////////////////
//      Estartando Devs - Atividade 1         //
//                                            //
//              Liana Meneghini               //
//        discord@lianameneghini#0703         //
////////////////////////////////////////////////
//import { writeFile } from 'fs'
//import { Buffer } from 'buffer'

const fs = require("fs");




for (let index = 1; index < 6; index++) {
    fs.writeFile("Async-text-"+index+".txt", "string vazia", (err) => {
        if (err) throw err
        console.log('The file has been saved!')
      })    
}


for (let index = 1; index < 6; index++) {
    fs.writeFileSync("Sync-text-"+index+".txt", "string vazia", (err) => {
        if (err) throw err
        console.log('The file has been saved!')
      })    
}