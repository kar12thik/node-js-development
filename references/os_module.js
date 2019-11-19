const os = require('os');

//Platform
console.log(os.platform());
//win32

//CPU Arch
console.log(os.arch());
//x64

//CPU core info
console.log(os.cpus());
// [
//   {
//     model: 'Intel(R) Core(TM) i3-3217U CPU @ 1.80GHz',
//     speed: 1796,
//     times: {
//       user: 4034687,
//       nice: 0,
//       sys: 2645187,
//       idle: 42988187,
//       irq: 144375
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i3-3217U CPU @ 1.80GHz',
//     speed: 1796,
//     times: {
//       user: 4239468,
//       nice: 0,
//       sys: 2852218,
//       idle: 42576078,
//       irq: 537703
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i3-3217U CPU @ 1.80GHz',
//     speed: 1796,
//     times: {
//       user: 4790203,
//       nice: 0,
//       sys: 2216734,
//       idle: 42660828,
//       irq: 48968
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i3-3217U CPU @ 1.80GHz',
//     speed: 1796,
//     times: {
//       user: 4616265,
//       nice: 0,
//       sys: 2176265,
//       idle: 42875234,
//       irq: 62390
//     }
//   }
// ]

//CPU free memory
console.log(os.freemem());
//4999684096

//Total memory
console.log(os.totalmem());
//8477057024

// Home dir
console.log(os.homedir());
//C:\Users\karthikeyan

//Uptime of CPU in seconds
console.log(os.uptime());
//269709
