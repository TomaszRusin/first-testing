
// const os = require('os');

// const uptimeS = parseInt(os.uptime());

const formatDate = (recivedTime) => {
  const timeS = parseInt(recivedTime);

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
  }else if (timeS >= 3600){
      if(seconds == 0) {
          if(minutes == 0) {
              return `${hours}h`
          }
          return `${hours}h ${minutes}m`
      }
      if(minutes == 0) {
          if(seconds == 0) {
              return `${hours}h`
          }
          return `${hours}h ${seconds}s`
      }
    return `${hours}h ${minutes}m ${seconds}s`
  }else{
    return `0s`
  }
}

console.log(formatDate())

module.exports = formatDate