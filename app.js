
const loadMobile = () => {
    document.getElementById("eror").innerHTML = ''
    document.getElementById("card-parent").innerHTML = ''
    document.getElementById("details-mobile").innerHTML = ''
    const inputValue = document.getElementById("search-input").value

    if (inputValue == '') {
        console.log("hello")
        document.getElementById("eror").innerHTML = `
        <h3 class="text-danger">Please write search a Mobile or Tab Name or a valid input !!!</h3>
        `
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.data)
                if (inputValue.toLowerCase() == 'nova' || inputValue.toLowerCase() == 'samsung'
                    || inputValue.toLowerCase() == 'iphone' || inputValue.toLowerCase() == 'tab') {
                    console.log(data.data.length)
                    displayMobile((data.data).slice(0, 20))

                }
                else {
                    document.getElementById("eror").innerHTML = `
                    <h4 class="text-danger">Please write search a Mobile or Tab or a valid input ami parvo !!!</h4>
                    `
                }
            })

    }
    // console.log(inputValue)
}

const displayMobile = (phones) => {
    // console.log(phones)
    const parent = document.getElementById("card-parent")
    phones.forEach(phone => {
        // console.log(phone)
        // console.log(phone.)
        const div = document.createElement("div")
        div.classList.add('mx-auto')
        div.innerHTML = `
        <div class="col-lg-4">
            <div class="card px-4 pt-3 mb-4 check-border shadow-lg" style="width: 21rem;">
                <img class="card-img-top w-75 b-0 mx-auto" src="${phone.image}" alt="Card image cap">
                <div class="card-body w-100">
                    <h6 class="card-title">Mobile: ${phone.phone_name}</h6>
                    <h6 class="card-title">Divice: ${phone.brand}</h6>
                    <a href="#" onclick="loadDetails('${phone.slug}')" class="btn btn-primary px-4 ms-5">Details</a>
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
    console.log(info.others.WLAN)
    // console.log(${info.name})
    const parent = document.getElementById("details-mobile")
    if (info.releaseDate === '' || info.others.WLAN === "") {
        console.log("Hello amar jan")
        parent.innerHTML = `
        <div class="card mx-auto" style="width: 45rem;">
            <h3 class="card-title text-center mt-3">Brand New ${info.name}</h3>
            <img src="${info.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold">Full Specifications Of ${info.name} </h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ReleaseDate :<h6 class="d-inline"> Comming soon</h6></li>
                <h5 class="list-group-item bg-light">MainFeatures :</h5>
                <li class="list-group-item">Storage: ${info.mainFeatures.storage}</li>
                <li class="list-group-item bg-light">DisplaySize: ${info.mainFeatures.displaySize}</li>
                <li class="list-group-item">ChipSet: ${info.mainFeatures.chipSet}</li>
                <li class="list-group-item bg-light">Memory: ${info.mainFeatures.memory}</li>
                <h5 class="list-group-item fw-bold">Sensors: ${info.mainFeatures.sensors}</h5>         
                <li class="list-group-item bg-light">Brand: ${info.brand}</li>
                <h5 class="list-group-item">Other Features:</h5>
                <li class="list-group-item ">Bluetooth: ${info.others.Bluetooth}</li>
                <li class="list-group-item bg-light">GPS: ${info.others.GPS}</li>
                <li class="list-group-item ">NFC: ${info.others.NFC}</li>
                <li class="list-group-item bg-light">Radio: ${info.others.Radio}</li>
                <li class="list-group-item ">USB: ${info.others.USB}</li>
            </ul>
        </div>
    `
    }
    else {
        parent.innerHTML = `
        <div class="card mx-auto" style="width: 45rem;">
            <h3 class="card-title text-center mt-3">Brand New ${info.name}</h3>
            <img src="${info.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold fw-bold">Full Specifications Of ${info.name} </h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ReleaseDate :${info.releaseDate}</li>
                <h5 class="list-group-item bg-light">MainFeatures :</h5>
                <li class="list-group-item">Storage: ${info.mainFeatures.storage}</li>
                <li class="list-group-item bg-light">DisplaySize: ${info.mainFeatures.displaySize}</li>
                <li class="list-group-item">ChipSet: ${info.mainFeatures.chipSet}</li>
                <li class="list-group-item bg-light">Memory: ${info.mainFeatures.memory}</li>
                <h5 class="list-group-item fw-bold">Sensors: ${info.mainFeatures.sensors}</h5>         
                <li class="list-group-item bg-light">Brand: ${info.brand}</li>
                <h5 class="list-group-item">Other Features:</h5> 
                <li class="list-group-item ">Bluetooth: ${info.others.Bluetooth}</li>
                <li class="list-group-item bg-light">GPS: ${info.others.GPS}</li>
                <li class="list-group-item ">NFC: ${info.others.NFC}</li>
                <li class="list-group-item bg-light">Radio: ${info.others.Radio}</li>
                <li class="list-group-item ">USB: ${info.others.USB}</li>
            </ul>
        </div>
    `
    }



}






