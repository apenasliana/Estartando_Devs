const prettyjson = require('prettyjson')

const data = {
  name: "Liana Meneghini",
  github: ["https://github.com/apenasliana"],
  linkedin: ["https://www.linkedin.com/in/liana-meneghini-978690232/"],
  technologies: ['javascript','html','css', 'python', 'c++']
}


const options = {
  keysColor: 'rainbow',
  dashColor: 'green',
  stringColor: 'cyan',

}

module.exports = () => prettyjson.render(data, options)