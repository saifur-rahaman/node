const os = require('os');
//info about current user
const user = os.userInfo();
console.log(user);
// methods of system uptime in seconds
console.log(`the uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
}
console.log(currentOS);