//responsible for expanding the hamburger nav
function expandMenu(){
	$("div.menu").toggleClass("menu_show");
}

//responsible for toggling the bars to an X
function animateBars(){
  $('.container').toggleClass("change");
}

//responsible for when a user clicks on the hamburger icon
function hamburgerClick(){
	$('.nav').on('click', '.container', function(event){
		event.preventDefault();
		expandMenu();
		animateBars();
	});
}

//resonsble for what happens when the user clicks on a menu item
function menuItemClick(){
	$('.nav').on('click', '.menu', function(event){
		expandMenu();
		animateBars();
	});
}

//responsible for rendering the landing page
function loadPage () {
  hamburgerClick();
  menuItemClick();
  console.log('load page!');
}

$(loadPage);


