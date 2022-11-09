
const data={
    "fechaActual": "2022-01-01",
    "eventos": [
        {
            "image":"../assets/museo.jpg",
            "name":"Parisian Museum",
            "date":"2022-11-02",
            "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
            "category":"Museum",
            "place":"Paris",
            "capacity":8200,
            "estimate":8200,
            "price":3500
        },
        {
            "image":"../assets/Fiesta de disfraces1.jpg",
            "name":"Halloween Night",
            "date":"2022-02-12",
            "description":"Come with your scariest costume and win incredible prizes.",
            "category":"Costume Party",
            "place":"Room C",
            "capacity":12000,
            "estimate":9000,
            "price":12
        },
        {
            "image":"../assets/metallica.jpg",
            "name":"Metallica in concert",
            "date":"2022-01-22",
            "description":"The only concert of the most emblematic band in the world.",
            "category":"Music Concert",
            "place":"Room A"
            ,"capacity":138000,
            "estimate":138000,
            "price":150
        },
        {
            "image":"../assets/school.jpg",
            "name":"School's book fair",
            "date":"2022-10-15",
            "description":"Bring your unused school book and take the one you need.",
            "category":"Book Exchange",
            "place":"Room D1",
            "capacity":150000,
            "estimate":123286,
            "price":1
        },
        {
            "image":"../assets/cine7.jpg",
            "name":"Avengers",
            "date":"2022-10-15",
            "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":9000,
            "estimate":9000,
            "price":250
        }
    ]
}
const $cardsContainer = document.getElementById("cards-container");

function paintDom(dateDom){
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-210">
        <img src="${dateDom.image}" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column align-items-center">
            <div>
                <h5 class="card-title">${dateDom.name}</h5>
                <p class="card-text">${dateDom.description}</p>
            </div>
            <div class="price d-flex justify-content-between align-items-start">
                <p>Price $${dateDom.price}</p>
                <a id="seeMore" href="../pages/details.html"><button class="button">See more</button></a>
            </div>
        </div>
    </div>
    `
    $cardsContainer.appendChild(div);
};

function compareDate(dataAE){
    const dateToCompare = dataAE.fechaActual.split("-");
    const dateActualToCompareTimeStamp = new Date(dateToCompare[0], dateToCompare[1]-1, dateToCompare[2]).getTime();

    dataAE.eventos.forEach((_date) => {
        let dateCompare = _date.date.split("-");
        let dateCompareTimeStamp = new Date(dateCompare[0], dateCompare[1]-1, dateCompare[2]).getTime();
        if(dateActualToCompareTimeStamp < dateCompareTimeStamp){
            paintDom(_date);
        }
    });
}
compareDate(data);

