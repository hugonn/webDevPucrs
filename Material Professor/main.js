window.addEventListener("load", loadedPage);

function loadedPage(){
  registerTabClickEvent();
}

function registerTabClickEvent(){
  var currentTabId = 'food';
  
  tabs = document.getElementsByClassName("show-section");
  for(var i=0; i < tabs.length; i++) {
	addTabEventListener(tabs[i]);
  }
  
  function addTabEventListener(object){
    object.addEventListener("click", changeTab);
  }

  function changeTab(event){
	event.preventDefault();  
	//getElementsByClassName seems to not work in IE8
	var clicked = this.id;
	document.getElementsByClassName(currentTabId)[0].style.display = 'none';
	document.getElementById(currentTabId).parentElement.className = "";
	currentTabId = clicked;
	document.getElementsByClassName(currentTabId)[0].style.display = 'block';
	document.getElementById(currentTabId).parentElement.className = "active";
  }
}