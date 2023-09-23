const loadPhone = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
};
const displayPhone = (phones) => {
  // console.log(phones);
  const phoneContainer = document.getElementById("phone-hunter");
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = "";
    phoneDiv.textContent = '';
    phones = phones.slice(0, 6);
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
};
document.getElementById("btn-search").addEventListener("click", () => {
  const searchField = document.getElementById("search-text");
  const searchText = searchField.value;
  loadPhone(searchText);
});
loadPhone("phone");
