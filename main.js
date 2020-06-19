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

  // Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
  
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }
  
    return inNewYork
  })

  console.log("NY businesses", newYorkBusinesses)


 // Array to contain all the Manufacturing businesses
 const manufacturingBusinesses = businesses.filter(business => {
    let manufacturer = false
  
    if (business.companyIndustry === "Manufacturing") {
        manufacturer = true
    }
  
    return manufacturer
  })

  console.log("Manufacturing Businesses", manufacturingBusinesses)

  
  const ManufacturingBusinessSelector = document.querySelector(".manufacturing__businesses")

  ManufacturingBusinessSelector.innerHTML = `<h1>Manufacturers</h1>`
  
  manufacturingBusinesses.forEach(Mbusiness => {
    ManufacturingBusinessSelector.innerHTML += `
        <h2>${Mbusiness.companyName}</h2>
        <section>
          ${Mbusiness.addressFullStreet},
        </section>
        <section>
          ${Mbusiness.addressCity}, ${Mbusiness.addressStateCode} ${Mbusiness.addressZipCode}
        </section>
      `
      ManufacturingBusinessSelector.innerHTML += "<hr/>"
    });












