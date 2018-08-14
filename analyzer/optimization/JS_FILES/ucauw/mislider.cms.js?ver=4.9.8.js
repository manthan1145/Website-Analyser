(function($){
	"use strict";
    $(document).ready(function(){
		/* Style 1 */


			var cms_special_carousel = {"cms-special-carousel":{"increment":"1","pause":"3000","speed":"700","navButtons":"1","navList":"1","slideWidth":"815","stageHeight":"434","slideScaling":"150"}};
var cms_special_carousel = {"cms-special-carousel":{"increment":"1","pause":"3000","speed":"700","navButtons":"1","navList":"1","slideWidth":"815","stageHeight":"434","slideScaling":"150"},"cms-special-carousel-2":{"increment":"1","pause":"300000","speed":"700","navButtons":"","navList":"","slideWidth":"100","stageHeight":"438","slideScaling":"150"}};

    	$(".template-cms_special_carousel").each(function(){
    		var $this = $(this),
    			slide_id = $this.attr('id'),
				slider_settings = cms_special_carousel[slide_id];
                slider_settings.slidesOnStage = false;
                slider_settings.increment = parseInt(slider_settings.increment);
    			slider_settings.pause = parseInt(slider_settings.pause);
    			slider_settings.speed = parseInt(slider_settings.speed);
                slider_settings.navButtons = (slider_settings.navButtons);
    			slider_settings.navList = false;
    			slider_settings.navButtonsShow = true;
    			slider_settings.slidePosition =  'center';
                slider_settings.slideStart = 'mid';
                slider_settings.slideScaling = parseInt(slider_settings.slideScaling);
				switch($(window).width()) {
					case 1920:
						slider_settings.slideWidth = 822;
						slider_settings.stageHeight = 440;
						break;
					case 1366:
						slider_settings.slideWidth = 585;
						slider_settings.stageHeight = 312;
						break;
					case 1349:
						slider_settings.slideWidth = 578.9;
						slider_settings.stageHeight = 308;
						break;
					case 1280:
						slider_settings.slideWidth = 548;
						slider_settings.stageHeight = 293;
						break;
					case 1265:
						slider_settings.slideWidth = 542;
						slider_settings.stageHeight = 290;
						break;
					case 1200:
						slider_settings.slideWidth = 514;
						slider_settings.stageHeight = 274;
						break;
					case 1024:
						slider_settings.slideWidth = 435;
						slider_settings.stageHeight = 234;
						break;
					case 992:
						slider_settings.slideWidth = 425;
						slider_settings.stageHeight = 227;
						break;
					case 991:
						slider_settings.slideWidth = 424;
						slider_settings.stageHeight = 226;
						break;
					case 800:
						slider_settings.slideWidth = 338;
						slider_settings.stageHeight = 180;
						break;
					case 768:
						slider_settings.slideWidth = 325;
						slider_settings.stageHeight = 180;
						break;
					default:
						slider_settings.slideWidth = 514;
						slider_settings.stageHeight = 274;
				}
    		var $slider = $this.miSlider(slider_settings);
    	});
 
		$(".template-cms_special_carousel--quote").each(function(){
			var $this = $(this),slide_id = $this.attr('id'),slider_settings = cms_special_carousel[slide_id];
			slider_settings.slidesOnStage = false;
			slider_settings.increment = parseInt(slider_settings.increment);
			slider_settings.pause = parseInt(slider_settings.pause);
			slider_settings.speed = parseInt(slider_settings.speed);
			slider_settings.navButtons = (slider_settings.navButtons);
			slider_settings.navList = false;
			slider_settings.navButtonsShow = true;
			slider_settings.slidePosition =  'center';
			slider_settings.slideStart = 'mid';
			slider_settings.slideScaling = parseInt(slider_settings.slideScaling);
			slider_settings.slideWidth = parseInt(slider_settings.slideWidth);
			slider_settings.stageHeight = parseInt(slider_settings.stageHeight);

			var $slider = $this.miSlider(slider_settings);
		});
    $('.popup-youtube').magnificPopup({
	  disableOn: 700,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,

	  fixedContentPos: false
	})
    });

})(jQuery)