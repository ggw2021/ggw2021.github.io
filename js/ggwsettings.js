// -------------------------------------------------
// -----------------| 倒计时 |-----------------------
// -------------------------------------------------
// 计算目标日期时间戳
const targetDate = new Date('2023-12-24 00:00:00').getTime();
        
// 更新倒计时函数
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    // 计算剩余的天数
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // 更新页面上的倒计时
    const countdownElement = document.getElementById('ggw_countdown');
    countdownElement.innerHTML = `${days} 天`;

    // 如果目标日期已经过去，显示消息
    if (timeDifference < 0) {
        countdownElement.innerHTML = '倒计时已结束！';
    }

    // 计算明天的日期
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // 计算明天的时间戳
    const tomorrowTimestamp = tomorrow.getTime();

    // 计算当前时间距离明天的毫秒数
    const timeUntilTomorrow = tomorrowTimestamp - currentDate;

    // 设置明天的更新
    setTimeout(updateCountdown, timeUntilTomorrow);
}

// 初始更新
updateCountdown();
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------