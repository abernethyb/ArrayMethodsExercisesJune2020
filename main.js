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


//  // Array to contain all the Manufacturing businesses
//  const manufacturingBusinesses = businesses.filter(business => {
//     let manufacturer = false
  
//     if (business.companyIndustry === "Manufacturing") {
//         manufacturer = true
//     }
  
//     return manufacturer
//   })

//   console.log("Manufacturing Businesses", manufacturingBusinesses)

  
//   const ManufacturingBusinessSelector = document.querySelector(".manufacturing__businesses")

//   ManufacturingBusinessSelector.innerHTML = `<h1>Manufacturers</h1>`
  
//   manufacturingBusinesses.forEach(Mbusiness => {
//     ManufacturingBusinessSelector.innerHTML += `
//         <h2>${Mbusiness.companyName}</h2>
//         <section>
//           ${Mbusiness.addressFullStreet},
//         </section>
//         <section>
//           ${Mbusiness.addressCity}, ${Mbusiness.addressStateCode} ${Mbusiness.addressZipCode}
//         </section>
//       `
//       ManufacturingBusinessSelector.innerHTML += "<hr/>"
//     });

//     const agentElement = document.querySelector(".agents")
//     agentElement.innerHTML += "<h1>Purchasing Agents</h1>";

//     /*
//         Using map(), you extract the purchasing agent object
//         from each business and store it in a new array
//     */
//     const agents = businesses.map(business => {
//         return [business.purchasingAgent, business.companyName, business.phoneWork]
//     })
    
//     console.table(agents)
    
//     agents.forEach(agent => {
//         agentElement.innerHTML += `<h2>${agent[0].nameFirst} ${agent[0].nameLast}</h2>`;
//         agentElement.innerHTML += `<p>${agent[1]}</p>`;
//         agentElement.innerHTML += `<p>${agent[2]}</p>`;
//         agentElement.innerHTML += "<hr/>";
//     });    




    document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(business => business.companyName.includes(keyPressEvent.target.value));
            
            console.log(keyPressEvent.target.value)

            businessSelector.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
            console.log(foundBusiness)
        }
        
    });







