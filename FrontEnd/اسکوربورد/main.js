// your code here
function fetchData() {
  return Promise.resolve([
    { name: "بهرام", score: 100 },
    { name: "فاطمه", score: 70 },
    { name: "زهرا", score: 80 },
    { name: "علي", score: 90 },
    { name: "محمد", score: 40 },
    { name: "مريم", score: 95 },
    { name: "مهدي", score: 50 },
    { name: "حسين", score: 45 },
    { name: "عليرضا", score: 55 },
    { name: "محمدرضا", score: 80 },
    { name: "معصومه", score: 20 },
    { name: "زينب", score: 60 },
    { name: "رضا", score: 85 },
    { name: "اميرحسين", score: 10 },
    { name: "محمدحسين", score: 35 },
    { name: "مرضيه", score: 75 },
    { name: "ابوالفضل", score: 65 },
    { name: "حسن", score: 90 },
    { name: "محسن", score: 65 },
    { name: "محمدمهدي", score: 55 },
    { name: "صديقه", score: 45 },
    { name: "زهره", score: 80 },
    { name: "ليلا", score: 60 },
    { name: "احمد", score: 65 },
    { name: "طاهره", score: 65 },
    { name: "عباس", score: 55 },
    { name: "اعظم", score: 50 },
    { name: "سميه", score: 55 },
    { name: "سعيد", score: 45 },
    { name: "محمدعلي", score: 65 },
    { name: "سكينه", score: 85 },
    { name: "رقيه", score: 80 },
    { name: "مرتضي", score: 100 },
    { name: "ريحانه", score: 30 },
    { name: "نرگس", score: 90 },
    { name: "مصطفي", score: 100 },
    { name: "خديجه", score: 95 },
    { name: "مجيد", score: 55 },
    { name: "محمدجواد", score: 65 },
  ]);
}

let arr = []
fetchData()
  .then((data) => {
    data.sort((a, b) => b.score - a.score)
    for (let i = 0; i < data.length; i++) {
      if (data[i].score >= 50) {
        if (i > 0 && data[i - 1].score == data[i].score) {
          data[i].id = data[i - 1].id;
        }
        else {
          data[i].id = i + 1;
        }
        arr.push(data[i]);
      }
    }
    Func(arr);
  })



function Func(arr) {
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    const trElement = document.createElement("tr");
    const tdElement1 = document.createElement("td");
    const tdElement2 = document.createElement("td");
    const tdElement3 = document.createElement("td");


    tdElement1.innerText = arr[i].id;
    tdElement2.innerText = arr[i].name;
    tdElement3.innerText = arr[i].score;

    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement3);

    tBody.appendChild(trElement);

  }

}


