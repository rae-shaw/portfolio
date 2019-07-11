//responsible for changing the image icon on mouseover
function imageMouseOver(){
	$("#cornermouseover").mouseover(function(){
  console.log("mouseover");
});
}


//responsible for expanding the hamburger nav
function expandMenu(){
	$("div.menu").toggleClass("menu_show");
	}

function animateBars(){
  $('.container').toggleClass("change");
}

/*function collapseMenu(){
		$('body').on('click', '.container', function(){
			$("menu_show").toggleClass("div.menu");
			console.log('click2 ran!')
	});
}*/

function hamburgerClick(){
	$('.nav').on('click', '.container', function(event){
		event.preventDefault();
		console.log('hamburger clicked!');
		expandMenu();
		animateBars();
		//collapseMenu();
	});
}

function menuItemClick(){
	$('.nav').on('click', '.menu', function(event){
		//event.preventDefault();
		expandMenu();
		animateBars();
});
}


function loadPage () {
  hamburgerClick();
  menuItemClick();
  console.log('load page!');

}

$(loadPage);


