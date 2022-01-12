function getCard(icons){
    icons.forEach((element ,index) => {
        document.getElementById("card-container").innerHTML +=`
        <div>
            <div id="card-${index}" class="icon-card-local d-flex flex-column align-items-center justify-content-center">
                <i class="fa-solid fa-${element.name} icons-size-local"></i>
                <span class="icon-text-size-local mt-3">${element.name}</span>
            </div>
        </div>
        `
        document.getElementById(`card-${index}`).style.color = `${element.color}`
    });
}

function searchIcon(icons,string){
        return icons.filter((element) => element.name.indexOf(string)==0);
}
