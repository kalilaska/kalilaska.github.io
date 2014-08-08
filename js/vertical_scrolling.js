var homeSlides = $(".hSlideNavCentered");
var $slideContent = $(".hsContainer");
var activeSlide = 1;

// Navigation highligting
var $activeSlide = $('#activeSlide');
var $slideNavMain = $('.slideNavMain');
var $slideNavMission = $('.slideNavMission');
var $slideNavGiveStuff = $('.slideNavGiveStuff');
var $slideNavActions = $('.slideNavActions'); 
 
 var menuItems = [$slideNavMain, $slideNavMission, $slideNavGiveStuff, $slideNavActions];

// Fade out unnecesary nav items
function showHideNavItems(){
    var $activeSlideNumber = parseInt($activeSlide.text());
    for (var i=0; i<menuItems.length; i++){
        menuItems[i].animate({opacity: 0.1});
    }    
}

//Slides scroller
$slideNavMain.click(function (e) {
    e.preventDefault();
    $("#hSlideNavCentered").animate({opacity: 0});
    scrollToSlide(0);
    $("#hSlideNavCentered").animate({opacity: 1});
});

$slideNavMission.click(function (e) {
    e.preventDefault();
    $("#hSlideNavCentered").animate({opacity: 0});
    scrollToSlide(1);
    $("#hSlideNavCentered").animate({opacity: 1});
});

$slideNavGiveStuff.click(function (e) {
    e.preventDefault();
    $("#hSlideNavCentered").animate({opacity: 0});
    scrollToSlide(2);
    $("#hSlideNavCentered").animate({opacity: 1});
});

$slideNavActions.click(function (e) {
    e.preventDefault();
    $("#hSlideNavCentered").animate({opacity: 0});
    scrollToSlide(3);
    $("#hSlideNavCentered").animate({opacity: 1});
});

function scrollToSlide(slideId){
     console.log(slideId);
    // Custom slide content offset
    var customSlideOffset = $("#slide-"+slideId).attr('data-content-offset');
    console.log(customSlideOffset);
    // Scroll to the top of a container if it doesn't have custom offset defined
    if(typeof customSlideOffset === "undefined"){
        $("body").animate({scrollTop: ($("#slide-"+slideId).offset().top) + "px"},"slow");
    } else {
        // Convert percentage 'eg. 25p' into pixels
        if(customSlideOffset.indexOf("p")!=-1) {
            var customSlideOffset = parseInt(customSlideOffset.split("p")[0]);
            var slideHeight = $slide.height();
            customSlideOffset = Math.ceil((slideHeight/100) * customSlideOffset);
            $("body").animate({scrollTop: ($("#slide-"+slideId).offset().top + customSlideOffset) + "px"},"slow");
        } else {
           var customSlideOffset = parseInt(customSlideOffset);
           $("body").animate({scrollTop: ($("#slide-"+slideId).offset().top + customSlideOffset) + "px"},"slow");
        }     
    }
    // $("#hSlideNavCentered").animate({opacity: 0});
    setTimeout("$('#slideNav').css('margin-top','0%');",500);

    // if (slideId == 0) {
    //     //TODO Change #hSlideNavCentered UI and layout to specific
    // } else {
    //     //TODO Change #hSlideNavCentered UI and layout to common
    //     setTimeout("$('#slideNav').css('margin-top','0%');",500);
    // }
    // resizeSlide(slideId);
}

function resizeSlide(slideId) {
        var pageTextHeight = $('#slide-'+slideId+' .hsContent').height();
        var hsContentTop = $('#slide-'+slideId+' .hsContent').css('top').split('px')[0];
        var slideSectionHeight = $('section' + '#slide-'+slideId).height(pageTextHeight + 60 + parseInt(hsContentTop));
    // s.refresh($('.homeSlide'));
    // 0. Get height of .pageText
    // 1. Resize .hsContent to height of .homeSlide;
    // 2. ?????
    // 3. PROFIT!
}

function dragLeftMenu() {
    var distance = $('#vSlideNav').offset().top - $(window).scrollTop();
    console.log('Left menu distance ' + distance);
}