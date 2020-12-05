import { scheduleList } from "./_schedule.js";
export function calendarManager() {
  const now = new Date();
  let thisYear = now.getFullYear();
  let dayOfWeek = now.getDay(); // 曜日(数値)
  let dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek]; // 曜日(日本語表記)
  let nowMonth = now.getMonth() + 1;
  let month = now.getMonth() + 1;
  console.log();
  let flag = true;
  if (now.getDate() <= 17) {
    flag = false;
  }
  let control = 1;
  const calendarList = document.querySelector(".calendar__Contents");
  const thisMonth = document.querySelector(".js-calendar__Month-Number");
  const Year = document.querySelector(".js-calendar__Year");
  const previousButton = document.querySelector(".js-PreviousButton");
  const nextButton = document.querySelector(".js-NextButton");
  // calendar実装
  nextCalendarContent();

  nextButton.addEventListener("click", () => {
    if (month >= nowMonth + 1 && flag === false) {
      return false;
    } else if ((previousButton.style.opacity = ".1")) {
      previousButton.style.opacity = "1";
    }
    nextCalendarContent();
    if (month >= nowMonth + 1 && flag === false) {
      nextButton.style.opacity = ".1";
    }
  });

  previousButton.addEventListener("click", () => {
    if (month <= nowMonth - 1 && flag === true) {
      return false;
    } else if ((nextButton.style.opacity = ".1")) {
      nextButton.style.opacity = "1";
    }
    previousCalendarContent();
    if (month <= nowMonth - 1 && flag === true) {
      previousButton.style.opacity = ".1";
    }
  });

  function nextCalendarContent() {
    flag = !flag;
    control = 1;

    calendarList.textContent = null;
    showDateControl(flag, control);
  }
  function previousCalendarContent() {
    flag = !flag;
    control = -1;
    calendarList.textContent = null;
    showDateControl(flag, control);
  }

  function createContent(i, month, thisYear) {
    let thisDate = new Date(`${thisYear}/${month}/${i}`);
    dayOfWeek = thisDate.getDay(); // 曜日(数値)
    dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek]; // 曜日(日本語表記)
    let calendarListBox = document.createElement("li");
    let calendarDate = document.createElement("span");
    let calendarDesc = document.createElement("span");
    calendarListBox.className = "calendar__ListBox";
    calendarDate.className = "calendar__Date";
    calendarDesc.className = "calendar__Desc";
    Year.textContent = `(${thisYear}年)`;
    calendarDate.textContent = `${i}日 (${dayOfWeekStr})`;
    if (dayOfWeek === 0) {
      calendarDate.classList.add("calendar__Sunday");
    } else if (dayOfWeek === 6) {
      calendarDate.classList.add("calendar__Saturday");
    }
    let scheduleContent = new Object(
      scheduleList.find(
        schedule =>
          schedule.month === month &&
          schedule.date === i &&
          schedule.year === thisYear
      )
    );

    const l = (calendarDesc.innerHTML = scheduleContent.content);
    calendarList.appendChild(calendarListBox).appendChild(calendarDate);
    calendarList.appendChild(calendarListBox).appendChild(calendarDesc);
  }

  function showDateControl(flag, control) {
    let getMonthDays = function(year, month) {
      return new Date(year, month, 0).getDate();
    };
    let monthDays = getMonthDays(thisYear, month);

    if (flag === true) {
      if (control === 1) {
        if (month >= 12) {
          month = 1;
          thisYear += 1;
          thisMonth.textContent = `${month}`;
        } else {
          month += 1;
          thisMonth.textContent = `${month}`;
        }
      }
      for (let i = 1; i < 17; i++) {
        createContent(i, month, thisYear);
      }
      return month, thisYear;
    } else {
      if (control === 1) {
        thisMonth.textContent = `${month}`;
      } else if (control === -1) {
        month -= 1;
        thisMonth.textContent = `${month}`;
        monthDays = getMonthDays(thisYear, month);
        if (month < 1) {
          month = 12;
          thisYear -= 1;
          thisMonth.textContent = `${month}`;
        }
      }
      for (let i = 17; i <= monthDays; i++) {
        createContent(i, month, thisYear);
      }
      return month, thisYear;
    }
  }
}
