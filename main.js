const flowers = [
    {
      id: 1,
      type: "Rose",
      colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
      price: 2.59,
      usdaZones: [3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: 2,
      type: "Tulip",
      colors: ["Orange", "White", "Yellow", "Violet", "Red"],
      price: 1.04,
      usdaZones: [5, 6, 7, 8, 9],
    },
    {
      id: 3,
      type: "Daisy",
      colors: ["Gold", "White", "Orange", "Crimson"],
      price: 0.89,
      usdaZones: [3, 4, 5, 6, 7, 8],
    },
    {
      id: 4,
      type: "Carnation",
      colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
      price: 1.59,
      usdaZones: [5, 6, 7, 8, 9],
    },
    {
      id: 5,
      type: "Bird of Paradise",
      colors: ["Orange", "White"],
      price: 2.33,
      usdaZones: [9, 10, 11],
    },
    {
      id: 6,
      type: "Delphinium",
      colors: ["Blue", "Violet", "White", "Pink"],
      price: 1.67,
      usdaZones: [3, 4, 5, 6, 7],
    },
    {
      id: 7,
      type: "Gladiolus",
      colors: [
        "White",
        "Cream",
        "Yellow",
        "Red",
        "Pink",
        "Green",
        "Lavender",
        "Voilet",
      ],
      price: 1.85,
      usdaZones: [6, 7, 8, 9, 10],
    },
    {
      id: 8,
      type: "Lilly",
      colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
      price: 1.52,
      usdaZones: [3, 4, 5, 6, 7, 8, 9],
    },
    {
      id: 9,
      type: "Chinese Lantern",
      colors: ["Orange"],
      price: 2.33,
      usdaZones: [3, 4, 5, 6, 7, 8, 9],
    },
  ];
  
  /*
      Below are some functions, in which you will write ALL of your
      code. Do not modify the code that defines the functions, and
      do not write any code outside of the functions.
  */
  
  /*
      This function should return inexpensive flowers - ones that cost
      less than 2.00 per flower.
  */
  const inexpensiveFlowers = () => {
    const filteredFlowers = []; // Do not modify
  
    // write logic that populates the filteredFlowers array with only those flowers with a price less than 2.00 per flower. create for of with if but include price
    for (const flower of flowers) {
         if (flower.price < 2) {
         filteredFlowers.push(flower);
      }
    }
    return filteredFlowers; // Do not modify
  };
  //console.log(inexpensiveFlowers());
  /*
      This function should return flowers that grow in
      USDA zones of 3 and 8.
  */
  const zoneFlowers = () => {
    const filteredFlowers = []; // Do not modify
  
    // write logic that populates the filteredFlowers array with only those flowers that grow in USDA zones 3 and 8.
    // create for of , if with , or +
    for (const flower of flowers) {
      if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
        filteredFlowers.push(flower);
      }
      
        
      } return filteredFlowers; // Do not modify
    }
  ;
  
  //console.log(zoneFlowers())
  
  /*
      This function should return flowers that come in the color Orange
  */
  const orangeFlowers = () => {
    const filteredFlowers = []; // Do not modify
  
    // write logic that populates the filteredFlowers array with only those flowers that come in the color "Orange". Remember that JavaScript is case-sentitive.
    //"orange" !== "Orange"
    // create a for of 
    for (const flower of flowers) {
      if (flower.colors.includes("Orange")){
          filteredFlowers.push(flower);
      }
  
      
    }return filteredFlowers; // Do not modify
  };
  
  console.log(orangeFlowers())
  
  /*
      This function should return an HTML representation of each flower.
  
      Expected string format:
          <article>
              <h1>Bird of Paradise</h1>
  
              <h2>Colors</h2>
              <section>White</section>
              <section>Orange</section>
  
              <h2>USDA Zones</h2>
              <div>9</div>
              <div>10</div>
              <div>11</div>
          </article>
  */
  const flowersAsHTML = () => {
    let flowersHTMLString = ""; // Do not modify
    /*
            write logic produces one, large string that contains an <article> for each flower, a <section> for each flower's colors, and a <div> for each flower's USDA zones.
  
          const new list for each html 
  
          use . to access colors and zones 
          
          <article>
              <h1>Bird of Paradise</h1>
  
              <h2>Colors</h2>
              <section>White</section>
              <section>Orange</section>
  
              <h2>USDA Zones</h2>
              <div>9</div>
              <div>10</div>
              <div>11</div>
          </article>
      */
    for (const flower of flowers) {
      flowersHTMLString += `<article>\n`
      flowersHTMLString += `\t<h1>${flower.type}</h1>\n`;
      flowersHTMLString += `\t<h2>Colors</h2>\n`
      for (const color of flower.colors){
          flowersHTMLString += `\t<section>${color}</section>\n`
      }
      flowersHTMLString += `\t<h2>${flower.usdaZones}</h2>\n`
         for (const usdaZone of flower.usdaZones){
          flowersHTMLString += `\t<div>${usdaZone}</div>\n`
         }
      flowersHTMLString += `</article>\n`
      
  
      // for ( let  of flower.color){
      // flowersHTMLString += `\t<section>${flowers.color}</section>\n`
  
      // for (let of flower.usdaZones)
      // flowersHTMLString += `\t\n<div>${flowers.usdaZones}</div>`
    }
  
    return flowersHTMLString; // Do not modify
  };
  console.log(flowersAsHTML())
  
  /*  DO NOT TOUCH THIS CODE  */
  const getFlowers = () => flowers;
  module.exports = {
    inexpensiveFlowers,
    orangeFlowers,
    zoneFlowers,
    flowersAsHTML,
  };
  /*  DO NOT TOUCH THIS CODE  */