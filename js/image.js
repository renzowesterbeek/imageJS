var position = 0;

var setImg = function(imgList, imgPath, element){
	path = imgPath + imgList[position];
	document.getElementById(element).src=path;
};

var randomImg = function(imgList, imgPath, element){
	var listLength = imgList.length;
	var random = Math.floor((Math.random()*listLength));
	path = imgPath + imgList[random];
	document.getElementById(element).src=path;
};

var nextImg = function(imgList, imgPath, element){
	var listLength = imgList.length;
	position = position + 1;
	
	if(position > (listLength - 1)){
		position = position - listLength;
	}
	
	path = imgPath + imgList[position];
	document.getElementById(element).src=path;
};

var previousImg = function(imgList, imgPath, element){
	var listLength = imgList.length;
	position = position - 1;
	
	if(position < 0) {
		position = position + listLength;
	}
	
	path = imgPath + imgList[position];
	document.getElementById(element).src=path;
};