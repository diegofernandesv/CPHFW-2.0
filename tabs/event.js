function addToCalendar(title, image, time) {
    // Get existing schedule from local storage or initialize as empty array
    let schedule = JSON.parse(localStorage.getItem('schedule')) || [];

    // Add new event with image to the schedule
    schedule.push({ title, image, time });
    
    // Save the updated schedule back to local storage
    localStorage.setItem('schedule', JSON.stringify(schedule));
    
    alert(`${title} has been added to your schedule.`);
}

function changeButtonImage(button) {
    button.querySelector('img').src = 'imagesevents/Round Button2.png';
}