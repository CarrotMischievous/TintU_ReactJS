/* 计算已确定月份天数后daye加一之后年月日的变化 */
const computeSimpleDayIncrease = ({year, month, date}, dayOfMonth) => {
  if (date < dayOfMonth) {
    date++;
  } else {
    date = 1;
    month = (month + 1) % 12;
    month = month ? month : 12;
    if (1 === month) {
      year++;
    }
  }

  return {year, month, date};
}

/* 计算任意一天的下一天 */
const computeNextDay = ({year, month, date, day}) => {
  let dayOfMonth = 0;
  let newTime = {year, month, date};

  if (2 !== month) {
    if (date < 30) {
      /* 非2月至少30天，小于30直接加1 */
      newTime.date++;
    } else {
      dayOfMonth = ((4 === month) || (6 === month) || (9 === month) || (11 === month)) ? 30 : 31;
      newTime = computeSimpleDayIncrease({year, month, date}, dayOfMonth);
    }
  } else {
    if (date < 28) {
      /* 2月至少28天，小于28直接加1 */
      newTime.date++;
    } else {
      const isLeapYear = ((year & 3) === 0) && ((year % 100) !== 0 || (year % 400) === 0);
      dayOfMonth = isLeapYear ? 29 : 28;
      newTime = computeSimpleDayIncrease({year, month, date}, dayOfMonth);
    }
  }

  /* 星期单独处理 */
  day = (day + 1) % 7;
  
  return {...newTime, day};
}

/* 获取当前日期开始后固定天数的所有日期信息 */
const calcFutureDays = (startDate, totalDays) => {
  let index = 0;
  const futureDays = [];

  /* 当前时间 */
  let currentDate = {
    year:   startDate.getFullYear(),
    month:  startDate.getMonth() + 1,
    date:   startDate.getDate(),
    day:    startDate.getDay(),
  };

  while (index < totalDays) {
    futureDays.push(currentDate);
    currentDate = computeNextDay(currentDate);

    index++;
  }

  return futureDays;
}

/* 基于开始时间和总时间计算覆盖过的时间点 */
const calcAllDayTimeFragment = (start_time, totalHour, interval) => {
  const timeFragments = [];
  let tempCurTime = start_time; /* 修正到前一个半小时 */
  let index = 0;
  const totalIndex = parseInt((totalHour * 60) / interval, 10);

  while (index < totalIndex) {
    timeFragments.push(tempCurTime);

    tempCurTime = tempCurTime + interval;
    index++;
  }

  return timeFragments;
}

/* day转换成week的显示内容 */
const Week = ["一", "二", "三", "四", "五", "六", "日"];
const transDayToWeek = (day) => {
  return `周${Week[day]}`;
}

/* 全部可Schedule的时间格式化 */
const transDateToDisplay = (day, time) => {
  let dayDate = "";
  let dayTime = "";

  if (day) {
    dayDate = `${day.year}年${day.month}月${day.date}日（${transDayToWeek(day.day)}）`;
  }

  if (time) {
    dayTime = `${transMinsToTime(time)}`;
  }

  return `${dayDate}${dayTime}`;
}

/* 距离0点的分钟差转换成显示时间 */
const transMinsToTime = (minutes) => {
  const timeMin = minutes % 60;
  return `${parseInt(minutes / 60, 10)}:${(timeMin / 10) ? "" : "0"}${minutes % 60}`;
}

module.exports = {
  calcFutureDays,
  calcAllDayTimeFragment,
  transDayToWeek,
  transDateToDisplay,
  transMinsToTime,
}