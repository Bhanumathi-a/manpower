const searchIco =  document.querySelector(".search-ico")
const searchInput = document.querySelector("#search")

let showSearchbox = (e) => {
    searchInput.classList.toggle("active")
}

searchIco.addEventListener("click", showSearchbox)