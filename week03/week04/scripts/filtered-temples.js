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
    imageUrl: "images2/cardstontemple.webp"
    
  },
  {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta, Canada",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl: "images2/calgarytemple.webp"
  
  },
  {
    templeName: "Edmonton Alberta",
    location: "Edmonton, Alberta, Canada",
    dedicated: "1999, December, 11-12 ",
    area: 10700,
    imageUrl: "images2/edmontontemple.webp"
   
  },
  {
    templeName: "Regina Saskatchewan",
    location: "Regina, Saskatchewan, Canada",
    dedicated: "1999, November, 14",
    area: 10700,
    imageUrl: "images2/reginatemple.webp"
    
  },
  {
    templeName: "Montreal Quebec",
    location: "Montreal, Quebec, Canada",
    dedicated: "2000, June, 4",
    area: 11550,
    imageUrl: "images2/montrealtemple.webp"
   
  },
  {
    templeName: "Vancouver British Columbia",
    location: "Langley, British Columbia, Canada",
    dedicated: "2010, May, 2",
    area: 28165,
    imageUrl: "images2/langleytemple.webp"
   
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Nuevo Leon, Mexico",
    dedicated: "2002, April, 28",
    area: 16498,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-1068-main.jpg"
   },
   {
    templeName: "Merida Mexico",
    location: "Merida, Yucatan, Mexico",
    dedicated: "2000, July, 8",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-14119-main.jpg"
   },
   {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25-30",
    area: 72000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
   },
];


const container = document.querySelector(".container");

function createTempleCard(filteredTemples) {
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
}
let currentFilter = null; 
createTempleCard(temples);

const oldButton = document.querySelector('Button[title="Old"]');

	
oldButton.addEventListener("click", () => {
	const oldtemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.substring(0, 4));
		return year < 2000
	});

	createTempleCard(oldtemples);

});

createTempleCard(temples);

const newButton = document.querySelector('Button[title="New"]');

	
newButton.addEventListener("click", () => {
	const newtemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.substring(0, 4));
		return year > 2000
	});

	createTempleCard(newtemples);

});

createTempleCard(temples);

const largeButton = document.querySelector('Button[title="Large"]');

	
largeButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	const largetemples = temples.filter(temple => temple.area > 40000);

		

	createTempleCard(largetemples);

});


createTempleCard(temples);

const smallButton = document.querySelector('Button[title="Small"]');

	
smallButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	const smalltemples = temples.filter(temple => temple.area < 40000);

		

	createTempleCard(smalltemples);

});

window.addEventListener("pagehide", () => {
    if (window.liveReloadSocket && window.liveReloadSocket.readyState === WebSocket.OPEN) {
        window.liveReloadSocket.close();
    }
});


