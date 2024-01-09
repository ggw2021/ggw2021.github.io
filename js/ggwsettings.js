// -------------------------------------------------
// -----------------| 正向计时 |---------------------
// -------------------------------------------------
// 计算目标日期时间戳
const targetDate = new Date('2022-6-24 00:00:00').getTime();

// 更新计时函数
function updateCountup() {
    const currentDate = new Date().getTime();
    const timeDifference = currentDate - targetDate;

    // 计算已经过去的天数
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // 更新页面上的计时
    const countupElement = document.getElementById('ggw_countdown'); // 注意这里的 ID 应该是 ggw_countdown
    if (!countupElement) return         // 只在主页显示

    countupElement.innerHTML = `${days} 天`;

    // 如果目标日期已经过去，显示消息
    if (timeDifference > 0) {
        countupElement.innerHTML =  days + 1;
    }

    // 计算明天的日期
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // 计算明天的时间戳
    const tomorrowTimestamp = tomorrow.getTime();

    // 计算距离明天的毫秒数
    const timeUntilTomorrow = tomorrowTimestamp - currentDate;

    // 设置明天的更新
    setTimeout(updateCountup, timeUntilTomorrow);
}

// 初始更新
updateCountup();
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
