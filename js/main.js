(function($) {

	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      // Resize sections
		      adjustWindow();
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  $vSlideNavPos = $('#vSlideNav').offset().top;
			  console.log('vSlideNavPos' + $vSlideNavPos);
		}, 100);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
			forceHeight: false
		});
		
		// Get window size
	    // winH = $window.height();
	    
	 //    if(winH <= 550) {
		// 	winH = 750;
		// } 

	    // for (var slideId=0; slideId<4; slideId++){
	    // 	// resizeSlide(i);
	    // 	var homeSlide = $('#slide-' + slideId+'.homeSlide');
	    // 	console.log(homeSlide);
	    // 	var pageTextHeight = $('#slide-'+slideId+' .hsContent').height();
	    // 	console.log(pageTextHeight);
	    // 	var hsContentTop = $('#slide-'+slideId+' .hsContent').css('top').split('px')[0];
	    // 	console.log(hsContentTop);
	    // 	var height = pageTextHeight + 0 + parseInt(hsContentTop)
	    // 	console.log('height ' + height);
	    // 	if (height <= 670) {
	    // 		height = 700;
	    // 	}
	    // }
	    s.refresh($('.homeSlide'));
	    
	}

    function resizeSlide() {
    	var height = $(window).height();
	    $('.bcg').css('min-height', height);
	    $('.hsContainer').css('min-height', height);
    }

    function dragLeftMenu() {
    	var distance = $('#vSlideNav').offset().top - $(window).scrollTop();
    	console.log('distance ' + distance);
    	if (distance <= 1) {
    		console.log('distance <=1');
    		// $('.vSlideNavCentered').css({
    		// 	position: 'fixed',
    		// 	top: '0'
    		// });
    		$('#vSlideNav').css({
    			position: 'fixed',
    			top: '0'
    		});
    		var currentScrollTop = $(window).scrollTop();
    		console.log('currentScrollTop ' + currentScrollTop);
    	 	if (currentScrollTop < $vSlideNavPos) {
    	 		console.log('currentScrollTop <= $vSlideNavPos');
	    		// $('.vSlideNavCentered').css({
	    		// 	position: 'absolute',
	    		// 	top: $vSlideNavPos + 'px'
	    		// });
	    		$('#vSlideNav').css({
	    			position: 'absolute',
	    			top: $vSlideNavPos + 'px'
	    		});
	    		return false;
    		}
    		return false;
    	}
    }

    $(window).scroll(function(){
    	dragLeftMenu();
    });
    resizeSlide();
		
})(jQuery);