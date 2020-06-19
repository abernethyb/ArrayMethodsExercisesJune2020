import businesses from "./data.js"

console.log("Hello! This is working!")
console.log(businesses)


const businessSelector = document.querySelector(".business__list")

businessSelector.innerHTML = `<h1>Active Businesses</h1>`

businesses.forEach(business => {
    businessSelector.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet},
      </section>
      <section>
        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
      </section>
    `
    businessSelector.innerHTML += "<hr/>"
  });