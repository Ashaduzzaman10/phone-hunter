const loadPhone = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-hunter");
  phoneContainer.textContent = "";
  phoneContainer.innerHTML = "";
  const notFound = document.getElementById("not-found");
  phones = phones.slice(0, 9);
  if (phones.length === 0) {
    notFound.classList.remove("d-none");
  } else {
    notFound.classList.add("d-none")
  }
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
  
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
     <div class="col">
            <div class="card p-4 gap-1 ms-1 mx-auto container-fluid">
              <img src="${phone.image}" class="card-img-top img-thumbnail" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
  // stop  loader
  toggleSpinner(false);
};
document.getElementById("btn-search").addEventListener("click", () => {
  // start loader 
  toggleSpinner(true);
  const searchField = document.getElementById("search-text");
  const searchText = searchField.value;
  loadPhone(searchText);
});


const toggleSpinner = isLoading => {
  const loadSection = document.getElementById("loader");
  if (isLoading) {
    loadSection.classList.remove("d-none");
  } else {
     loadSection.classList.add("d-none");
  }
}
loadPhone("phone");
