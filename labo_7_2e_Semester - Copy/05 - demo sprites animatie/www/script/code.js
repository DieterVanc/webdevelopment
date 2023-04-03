let UPDATE_DELAY=50; // constante voor timer delay, in milliseconden
let speedX;
let speedY;

const setup = () => {
	window.addEventListener("resize", updateSize);
	
	// al 1 keer op voorhand oproepen, voor het geval 
	// dat de gebruiker nooit manueel het browservenster
	// groter of kleiner maakt
	updateSize();

	let speelveld=document.getElementById("speelveld");
	let sprite=document.getElementsByClassName("sprite")[0];
	sprite.style.left=parseInt(speelveld.style.width)/2+"px";
	sprite.style.top=parseInt(speelveld.style.height)/2+"px";
	
	// start een timer die om de 50ms de moveSprite method oproept
	setInterval(moveSprite, UPDATE_DELAY);
}

const updateSize = () => {
	// telkens het window van grootte verandert,
	// wordt deze method opgeroepen
	// 
	// Merk op dat de <div> voor layout redenen "leeg" is,
	// omdat het enige kind absoluut gepositioneerd is. Als
	// we niets speciaals doen zal het dus 0px hoog zijn.
	// Daarom stellen we hier programmatorisch de breedte
	// en hoogte in, zodat het altijd alle ruimte inneemt.
	let speelveld=document.getElementById("speelveld");
	speelveld.style.width=window.innerWidth+"px";
	speelveld.style.height=window.innerHeight+"px";
	
	speedX=window.innerWidth/(1000/UPDATE_DELAY); // 1x per seconde ganse breedte afleggen
	speedY=window.innerHeight/(1000/UPDATE_DELAY); // 1x per seconde ganse hoogte afleggen
}

const moveSprite = () => {
	// Deze function wordt ongeveer om de 50ms opgeroepen
	let sprite=document.getElementsByClassName("sprite")[0];
	let speelveld=document.getElementById("speelveld");
	
	let maxLeft=speelveld.clientWidth - sprite.offsetWidth;
	let maxTop=speelveld.clientHeight - sprite.offsetHeight;
	
	// bepaal de nieuwe positie van de sprite
	let left=parseInt(sprite.style.left); // begin met huidige left waarde
	left+=speedX; // pas aan voor horizontale snelheid
	let top=parseInt(sprite.style.top); // begin met huidige top waarde
	top+=speedY; // pas aan voor verticale snelheid
	
	// controleer of rand bereikt werd (horizontaal)
	if (left<0) {
		// linkerrand
		speedX=-speedX;
		left=0;
	} else if (left>maxLeft) {
		// rechterrand
		speedX=-speedX;
		left=maxLeft;
	}
	
	// controleer of rand bereikt werd (horizontaal)
	if (top<0) {
		// bovenrand
		speedY=-speedY;
		top=0;
	} else if (top>maxTop) {
		// onderrand
		speedY=-speedY;
		top=maxTop;
	}
	
	// verplaats de sprite
	sprite.style.left=left+"px";
	sprite.style.top=top+"px";
}

window.addEventListener("load", setup);