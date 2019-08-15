

// fill random painting array

var randomPainting = [];


var numPaintings = 133;
for (var i = 0; i < numPaintings; i++) {
	randomPainting[i]="<img id='loadedimg' class='im' src='paintings/painting"+ i +".jpg' />";
};




// find random entry
function showImg(){
	var randomEntry = Math.round(Math.random() * (randomPainting.length) );

	//Insert the random content!
	$('.inside').html(randomPainting[randomEntry]);	
}

showImg();


$(window).on('load', function() {
	
	setTimeout(function(){ 
		$('body').addClass('ready');
	}, 100);
	setTimeout(function(){ 
		$('body').addClass('ready2');
	}, 200);
	setTimeout(function(){ 
		$('.title.one span').css('display', 'inline');
	}, 300);
	

})


$('.title.one').on('click', function() {
	showImg();
})

$('.inside').on('click', function() {
	showImg();
})