
const setup = () => { 
	let btnOptellen=document.getElementById("btnOptellen");
	let btnAftrekken=document.getElementById("btnAftrekken");
	let btnVermenigvuldigen=document.getElementById("btnVermenigvuldigen");
	let btnDelen=document.getElementById("btnDelen");
	
	btnOptellen.addEventListener("click", optellen);
	btnAftrekken.addEventListener("click", aftrekken);
	btnVermenigvuldigen.addEventListener("click", vermenigvuldigen);
	btnDelen.addEventListener("click", delen);
} 

const optellen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");
	
	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1+g2;

	let resultaatTekst=g1+" + "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

const aftrekken = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");

	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1-g2;

	let resultaatTekst=g1+" - "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

const vermenigvuldigen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");

	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1*g2;

	let resultaatTekst=g1+" * "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

const delen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");

	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1/g2;

	let resultaatTekst=g1+" / "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}
 
window.addEventListener('load',setup); 

















