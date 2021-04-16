var slider_img = document.querySelector('.slider-img');
var images = ['nike-gallery-1.jpg', 'nike-gallery-2.jpg', 'nike-gallery-3.jpg', 'nike-gallery-4.jpg', 'nike-gallery-5.jpg', 'nike-gallery-6.jpg' ];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/gallery/"+images[i]);	
}