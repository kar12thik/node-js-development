// path is a core module
const path = require('path');

console.log(__filename);
//E:\Python Materials\Python 3\GuviProjects\Dani\Node js\references\path_module.js

//Base file name
console.log(path.basename(__filename));
//path_module.js

//Directory name
console.log(path.dirname(__filename));
//E:\Python Materials\Python 3\GuviProjects\Dani\Node js\references

//Extension name
console.log(path.extname(__filename));
//.js

//Create oath object
console.log(path.parse(__filename));
// {
  //   root: 'E:\\',
  //   dir: 'E:\\Python Materials\\Python 3\\GuviProjects\\Dani\\Node js\\references',
  //   base: 'path_module.js',
  //   ext: '.js',
  //   name: 'path_module'
  // }
  console.log(path.parse(__filename).base);
  //path_module.js

//Concatenate paths 
console.log(path.join(__dirname,"test", "hello.html"));
//E:\Python Materials\Python 3\GuviProjects\Dani\Node js\references\test\hello.html
  