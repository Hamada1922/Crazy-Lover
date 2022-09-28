// My Birth Day Date Event
let MyBirthDay = new Date(2023, 01, 19);
//
setInterval(() => {
    // date now
    let dateNow = new Date();
    // different between birth day and now
    let diffDate = MyBirthDay - dateNow;
    //
    let Month = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 30));
    document.querySelector(".month").innerHTML = Month < 10 ? `0${Month}` : Month;
    //
    let days = Math.floor(diffDate % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    //
    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    //
    let minutes = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    //
    let seconds = Math.floor(diffDate % (1000 * 60) / 1000);
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    //
}, 1000)
console.log(MyBirthDay);