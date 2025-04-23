export function getTodaysDate(){
    const date = new Date();
    let day;
    let fullDate = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    switch(date.getDay()){
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
    }
    
    
    let dateTag = `
        <h1 class="day">${day}</h1>
        <h1 class="date">${fullDate}</h1>

    `;
    
    return dateTag;
}

