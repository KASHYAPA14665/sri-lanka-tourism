
var nextDom = document.getElementById('next');
var prevDom = document.getElementById('prev');
var carouselDom = document.querySelector('.carousel');
var listItemDom = document.querySelector('.carousel .list');
var thumbnailDom = document.querySelector('.carousel .thumbanil');



nextDom.onclick = function(){
    showSlider('next');
};


prevDom.onclick = function(){
    showSlider('prev');
};


var timeRunning = 2000;
var runTimeout;

function showSlider(type){
    var itemSlider = document.querySelectorAll('.carousel .list .item');
    var itemThumbnail = document.querySelectorAll('.carousel .thumbanil .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(()=>{
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')
    }, timeRunning)
}



window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";
  
      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  
      //get current date and time
      const date = monthList[month] + " " + day + ", " + year;
      const time = hourTime + ":" + minute + ":" + second + " "+ ampm;
  
      //combine current date and time
      const dateTime = date + " - " + time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });
