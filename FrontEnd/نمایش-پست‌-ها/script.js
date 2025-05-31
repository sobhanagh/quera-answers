//implement your code here...

const arr = []
fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            arr.push(data[i])
        }
        fillUl(arr);
    })


const ul = document.querySelector("#post-list");

function fillUl(arr) {
    for (let i = 0; i < arr.length; i++) {
        const liElement = document.createElement("li");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const em = document.createElement("em");

        h3.innerText = arr[i].title;
        p.innerText = arr[i].body;
        em.innerText = `شماره ${arr[i].id}`

        liElement.appendChild(h3);
        liElement.appendChild(p);
        liElement.appendChild(em);

        ul.appendChild(liElement);
    }
}





// console.log("aaa");

