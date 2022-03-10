/*
	Standards Compliant Rollover Script
	Author : Daniel Nolan
	http://www.bleedingego.co.uk/webdev.php
*/

function initRollovers() {
	if (!document.getElementById) return
	
	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');

	for (var i = 0; i < aImages.length; i++) {		
		if (aImages[i].className == 'imgover') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_o'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}	
			
			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_o'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}




conf = {
	className : "stripedtable",
	oddlineClassName : "oddline",
	evenlineClassName : "evenline"
}

function setStripedTable(){
	var tables = getElementsByClassName(conf.className);
	for (var i=0, len=tables.length; i<len; i++){
		var table = tables[i];
		var lines = table.getElementsByTagName("tr");

		for (var j=0, llen=lines.length; j<llen; j++){
			tr = lines[j];
			if(j%2==0) {
				tr.className = conf.oddlineClassName;
			} else {
				tr.className = conf.evenlineClassName;
			}
		}
	}
}

function getElementsByClassName(name){
	var elements = new Array();
	var allElements = document.getElementsByTagName('*');
	for (var i=0, len=allElements.length; i<len; i++){
		if (allElements[i].className == name){
			elements.push(allElements[i]);
		}
	}
	return elements;
} 
window.onload = function(){
	setStripedTable();
	initRollovers();
}
