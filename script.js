  function createbrewery(input){
    input.map((user) => document.body.innerHTML += `<div class="container">
    <div class="row">
     <div class="col-8">
      <div class="card text-bg-warning mb-3" style="width:auto;">
      <div class="brewery-name">${user.name}</div>
      <div class="brewery-body">
        <p class="brewer-type"><span>Brewery-type:</span>${user.brewery_type}</p>
        <p class="brwery-address"><span>Brewey-address:</span>${user.address_1}</p>
        <p class="brwery-URL"><span>Brewery-URL:</span><a href="${user.brewery_url}">Click here to know more</a></p>
        <p class="brwery-phone"><span>Phone:</span>${user.phone}</p>
      </div>
      </div>
    </div>
  </div>`
 )}

 async function getdata() {
  try {
      const data = await fetch("https://api.openbrewerydb.org/breweries", {
          method: "GET",
      });
      const brev = await data.json()
      console.log(createbrewery(brev))
  } catch (clear) {
      console.log(clear)
  }
}
getdata()
