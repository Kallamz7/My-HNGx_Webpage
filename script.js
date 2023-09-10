// JavaScript to fetch and display current day of the week and UTC time
function updateDateTime() {
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const utcTimeElement = document.getElementById('utcTime');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const utcTime = currentDate.getTime();

    dayOfWeekElement.textContent = dayOfWeek;
    utcTimeElement.textContent = utcTime;
}

// Update date and time initially and set up interval for real-time updates
updateDateTime();
setInterval(updateDateTime, 1000); // Update every second