
const os = require('os');
const formatDate = require('./index');

const uptimeS = parseInt(formatDate(os.uptime()));


const formatTime = (timeS) => {
    const seconds = timeS%60;
    const minutes = Math.floor((timeS/60)%60);
    const hours = Math.floor((timeS/60)/60);
    if(timeS < 60){
        return `${seconds}s`
    }else if(timeS < 3600){
        if(seconds == 0) {
            return `${minutes}m`
        }
        return `${minutes}m ${seconds}s`
    }else {
        if(seconds == 0) {
            if(seconds == 0) {
                return `${hours}h`
            }
            return `${hours}h ${minutes}m`
        }
        if(seconds == 0) {
            if(seconds == 0) {
                return `${hours}h`
            }
            return `${hours}h ${seconds}s`
        }
        return `${hours}h ${minutes}m ${seconds}s`
    }
}

console.log(`Current uptime is ${formatTime(uptimeS)}`);