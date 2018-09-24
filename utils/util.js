const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getYearMonth(){
  var date=new Date;
  var year=date.getFullYear(); 
  var month=date.getMonth()+1;
  return (year.toString()+month.toString());
}

function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

function objToArry(obj){
  var arr = Object.values(obj); //对象转化为数组
  return arr;
}

module.exports = {
  formatTime: formatTime,
  getYearMonth:getYearMonth,
  objToStrMap: objToStrMap,
  objToArry: objToArry
}
