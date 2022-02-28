
const loadMobile = () => {
    const inputValue = document.getElementById("search-input").value

    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobile(data.data))
}

const displayMobile = (phones) => {
    // console.log(phones)
    const parent = document.getElementById("card-parent")
    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement("div")
        div.classList.add('mx-auto')
        div.innerHTML = `
        <div class="col-lg-4">
            <div class="card px-4 pt-3 mb-4" style="width: 18rem;">
                <img class="card-img-top w-75 b-0 mx-auto" src="${phone.image}" alt="Card image cap">
                <div class="card-body w-100">
                    <h6 class="card-title">Mobile: ${phone.phone_name}</h6>
                    <h6 class="card-title">Divice: ${phone.brand}</h6>
                    <a href="#" onclick="loadDetails('${phone.slug}')" class="btn btn-primary me-auto">Details</a>
                </div>
            </div>
        </div>
        `
        parent.appendChild(div)
    });
}

const loadDetails = (id) => {
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.data))
}

const setDetails = (info) => {
    console.log(info)
    const parent = document.getElementById("details-mobile")
    parent.innerHTML = `
    <div class="card mx-auto" style="width: 35rem;">
        <h3 class="card-title text-center mt-3">Brand New ${info.name}</h3>
        <img src="${info.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h5 class="card-title">Card title</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item bg-dark">A third item</li>
        </ul>
    </div>
`

}






