jQuery(document).ready(function(){
	jQuery('#nav-icon1').click(function(){
		jQuery(this).toggleClass('open');
		jQuery('body').toggleClass('menu-opened');
	});
});