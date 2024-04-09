import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// Sidebar menu
const iconSidebar = document.querySelector('.sidebar-icon');
const sidebar = document.querySelector('.sidebar');
if (iconSidebar) {
	iconSidebar.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconSidebar.classList.toggle('_active');
		sidebar.classList.toggle('_active');		
	});
}



