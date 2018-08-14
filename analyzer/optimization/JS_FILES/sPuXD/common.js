var esferaJS=function(){document.onkeydown=function(e){if(e.ctrlKey&&(e.keyCode===67||e.keyCode===86||e.keyCode===85||e.keyCode===117)){return false;}else{return true;}};$(document).keydown(function(e){if(e.which===123){return false;}if(e.keyCode==123){return false;}if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0)){return false;}if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0)){return false;}if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0)){return false;}});jQuery(window).load(function(){jQuery(".se-pre-con").fadeOut("slow");;});jQuery(".top_image").backstretch("images/top_image.jpg");jQuery('.single-item').slick({dots:true,autoplay:true,autoplaySpeed:2000,});
jQuery(document).ready(function(){
	setTimeout(function(){ 
      $('form#generalquery').on('submit', function (e) {
          e.preventDefault();
          var data=$('form#generalquery').serialize()+'&type=general';
          $.ajax({
            type: 'post',
            //url: 'http://www.esferasoftitacademy.com/form.php',
            url:'../mailgenral.php',
            data: data,
            success: function (result) {
            	$('#freeConsulationModal').modal('hide');
            	$('#generalquery').trigger("reset");
            	$('#busnsquery').trigger("reset");
            	$('#thankyouModal').modal('show');
            	setTimeout(function(){ $('#thankyouModal').modal('hide'); }, 4000);
            }
          });
	});
      $('form#busnsquery').on('submit', function (e) {
          e.preventDefault();
          var data=$('form#busnsquery').serialize();

          $.ajax({
            type: 'post',
           // url: 'http://www.esferasoftitacademy.com/form.php',
            url:'../mailgenral.php',
            data: data,
            success: function (result) {
            	$('#freeConsulationModal').modal('hide');
            	$('#generalquery').trigger("reset");
            	$('#busnsquery').trigger("reset");
            	$('#thankyouModal').modal('show');
            	setTimeout(function(){ $('#thankyouModal').modal('hide'); }, 4000);
            }
          });
	});
	 }, 1000);
	function dropdown(){
		if($(window).width()<768){
			$(".dropdown-menu").css("display","none");
			jQuery("a.dropdown-toggle").on('click tap',function(e){
				jQuery(e.currentTarget).parent().toggleClass('open');
			});
		}}
		setTimeout(function(){
			dropdown();
		},3000);
		var magnificPopup=$.magnificPopup.instance;jQuery('.home-popup-gallery').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}},callbacks:{open:function(){var data=$('#slider-button-'+magnificPopup.index).data('link');var link="/"+data;if(data!=undefined){$('#button_id').remove();$('#_button').remove();var html="";html+='<div class="portfolio_footer">'+'<a class="btn btn-danger" id="button_id" href='+link+'>View case study</a>'+'<a class="btn btn-danger" id="_button" href='+'/contact-us'+'>Get Quote</a>'+'</div>';$(".mfp-content").append(html);}else{$('#_button').remove();var html="";html+='<div class="portfolio_footer">'+'<a class="btn btn-danger" id="_button" href='+'/contact-us'+'>Get Quote</a>'+'</div>';$(".mfp-content").append(html);}},afterChange:function(){var data=$('#slider-button-'+magnificPopup.index).data('link');var link="/"+data;if(data!=undefined){$('#button_id').remove();$('#_button').remove();var html="";html+='<div class="portfolio_footer">'+'<a class="btn btn-danger" id="button_id" href='+link+'>View case study</a>'+'<a class="btn btn-danger" id="_button" href='+'/contact-us'+'>Get Quote</a>'+'</div>';$(".mfp-content").append(html);}else{$('#button_id').remove();$('#_button').remove();var html="";html+='<div class="portfolio_footer">'+'<a class="btn btn-danger" id="_button" href='+'/contact-us'+'>Get Quote</a>'+'</div>';$(".mfp-content").append(html);}}}});jQuery('.popup-gallery').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery1').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery2').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery3').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery4').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery5').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery6').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery7').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery8').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery9').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});jQuery('.popup-gallery10').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});});jQuery(window).scroll(function(){if($(this).scrollTop()>200){$('#scroll').fadeIn();}else{$('#scroll').fadeOut();}});jQuery('#scroll').click(function(){$("html, body").animate({scrollTop:0},600);return false;});jQuery("a.click_here").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;jQuery('html, body').animate({scrollTop:$(hash).offset().top},800,function(){window.location.hash=hash;});}});jQuery("a.event_prevent").on('click',function(event){event.preventDefault();});var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:true,live:true,callback:function(box){},scrollContainer:null});wow.init();jQuery(function(){jQuery(' .port_box ').each(function(){jQuery(this).hoverdir();});});

jQuery('.carousel').each(function() {
	//console.log('sasasas');
	var sectionid  = jQuery(this).attr('id');
	if (sectionid == "carousel-example-generic") {

	}else{
			jQuery(this).carousel({interval:false});
	};
	// console.log('sectionid');
	// console.log(sectionid);
	


// 	jQuery('.testimonial-trainingpage').carousel({
//     interval: 2000
// });

});

jQuery('.carousel-control.left,.carousel-inner').click(function(event){event.stopPropagation();
	jQuery('#carousel-example-generic').carousel('prev');
});
jQuery('.carousel-control.right,.carousel-inner').click(function(event){
	event.stopPropagation();
	jQuery('#carousel-example-generic').carousel('next');
});
jQuery(document).on('click','#place_click',function(){jQuery('#placePopup').css("display","block");});jQuery('.center_mode2').slick({centerMode:true,slidesToShow:1,centerPadding:'0px',autoplay:false,autoplaySpeed:1000,dots:false,responsive:[{breakpoint:768,settings:{arrows:false,centerMode:true,centerPadding:'0px',slidesToShow:1}},{breakpoint:480,settings:{arrows:false,centerMode:true,centerPadding:'0px',slidesToShow:1}}]});jQuery('.center_mode1').slick({centerMode:true,slidesToShow:1,centerPadding:'0px',autoplay:true,autoplaySpeed:1000000000,responsive:[{breakpoint:768,settings:{arrows:false,centerMode:true,centerPadding:'0px',slidesToShow:1}},{breakpoint:480,settings:{arrows:false,centerMode:true,centerPadding:'0px',slidesToShow:1}}]});jQuery('.center_mode').slick({centerMode:true,slidesToShow:4,autoplay:true,autoplaySpeed:2000,responsive:[{breakpoint:768,settings:{arrows:false,centerMode:true,centerPadding:'40px',slidesToShow:3}},{breakpoint:480,settings:{arrows:false,centerMode:true,centerPadding:'40px',slidesToShow:1}}]});jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>100){jQuery('#scroll').fadeIn();}else{jQuery('#scroll').fadeOut();}});jQuery('#scroll').click(function(){jQuery("html, body").animate({scrollTop:0},600);return false;});jQuery("div.bhoechie-tab-menu>div.list-group>a").click(function(e){e.preventDefault();jQuery(this).siblings('a.active').removeClass("active");jQuery(this).addClass("active");var index=$(this).index();jQuery("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");jQuery("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");});
};esferaJS();
		function OpenRegForm()
		{

		    jQuery("#exampleModal").modal('hide');
		    jQuery("#exampleModal12").modal('show');
		}

// $(document).ready(function(){
// 	setTimeout(function(){
// 	 if ($(window).width() >= 768 && $(window).width() < 1025) {
//     $(".nav .dropdown .dropdown-toggle").click(function(){
//         $(this).parent().siblings().find(".dropdown-menu").slideUp();
//         $(this).parent().siblings().removeClass("open");
//         $(this).parent().toggleClass("open");
//         $(this).parent().find(".dropdown-menu").slideToggle();
//     });
//     }
// }, 5000);
// });	

	// var path = window.location.pathname; 
 //        var newpath = path.replace("/services/","");
 //        if (newpath) {
 //        	window.location.href = '../'+newpath;
 //        };
        
