const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

hamButton.setAttribute(
  "aria-label",
  hamButton.classList.contains("open") ? "Close navigation menu" : "Open navigation menu"
);

});


document.getElementById("lastModified").innerHTML = document.lastModified;

const temples = [
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26-29",
    area: 88562,
    imageUrl: "images2/cardstontemple.jpg"
    
  },
  {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta, Canada",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl: "images2/calgarytemple.jpg"
  
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21-23",
    area: 74792,
    imageUrl: "images2/manti-utah-temple.jpg"
   
  },
  {
    templeName: "Cali Colombia",
    location: "Cali, Colombia",
    dedicated: "2025, March, 1",
    area: 9500,
    imageUrl: "images2/cali-colombia-temple.jpg"
    
  },
  {
    templeName: "Montreal Quebec",
    location: "Montreal, Quebec, Canada",
    dedicated: "2000, June, 4",
    area: 11550,
    imageUrl: "images2/montrealtemple.jpg"
   
  },
  {
    templeName: "Vancouver British Columbia",
    location: "Langley, British Columbia, Canada",
    dedicated: "2010, May, 2",
    area: 28165,
    imageUrl: "images2/langleytemple.jpg"
   
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images2/mexico-city-temple.jpg"
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Nuevo Leon, Mexico",
    dedicated: "2002, April, 28",
    area: 16498,
    imageUrl: "images2/monterrey-mexico-temple.jpg"
   },
   {
    templeName: "Merida Mexico",
    location: "Merida, Yucatan, Mexico",
    dedicated: "2000, July, 8",
    area: 10700,
    imageUrl: "images2/merida-mexico-temple.jpg"
   },
   {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25-30",
    area: 72000,
    imageUrl: "images2/sandiegotemple.jpg"
   },
];


const container = document.querySelector(".container");

function createTempleCard(filteredTemples) {
	
  const currentHeight = container.offsetHeight;
  container.style.minHeight = currentHeight + "px";
  container.innerHTML = "";

	filteredTemples.forEach(temple => {
		const card = document.createElement("div");
		card.classList.add("temple-card");

		const img = document.createElement("img");
		img.src = temple.imageUrl;
		img.alt = temple.templeName;
		
    img.width = 600;
    img.height = 400;
    
	
    img.loading = "lazy";

    


    

		const info = document.createElement("div");
		info.classList.add("temple-info");
		info.innerHTML = `
	    <h3>${temple.templeName}</h3>
	    <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} </p>
	    `;
	
		card.appendChild(img);
		card.appendChild(info);
		container.appendChild(card);


  });
  
  setTimeout(() => {
    container.style.minHeight = "500px";
  }, 50);
}
let currentFilter = null; 
createTempleCard(temples);

const homeButton = document.querySelector('button[title="Home"]');

homeButton.addEventListener("click", () => {
  createTempleCard(temples);
})


const oldButton = document.querySelector('button[title="Old"]');

	
oldButton.addEventListener("click", () => {
	const oldtemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.substring(0, 4));
		return year < 1900
	});

	createTempleCard(oldtemples);

});



const newButton = document.querySelector('button[title="New"]');

	
newButton.addEventListener("click", () => {
	const newtemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.substring(0, 4));
		return year > 2000
	});

	createTempleCard(newtemples);

});



const largeButton = document.querySelector('button[title="Large"]');

	
largeButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	const largetemples = temples.filter(temple => temple.area > 90000);

		

	createTempleCard(largetemples);

});




const smallButton = document.querySelector('button[title="Small"]');

	
smallButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	const smalltemples = temples.filter(temple => temple.area < 10000);

		

	createTempleCard(smalltemples);

});





