jQuery(document).ready(function(jQuery) {
jQuery(function () {
  jQuery('.responsiveGallery-wrapper').responsiveGallery({
    animatDuration: 400, //动画时长 单位 ms
    $btn_prev: jQuery('.responsiveGallery-btn_prev'),
    $btn_next: jQuery('.responsiveGallery-btn_next')
  });
});
        
jQuery('.sliderteam').slick({
         slidesToShow: 3,
         dots:false,
         centerMode: false,
            responsive: [{
                   breakpoint: 1024,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 1,
                       // centerMode: true,

                   }

               }, {
                   breakpoint: 800,
                   settings: {
                       slidesToShow:2,
                       slidesToScroll:2,
                       dots: false,
                       infinite: true,

                   }


               }, {
                   breakpoint: 600,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       dots: false,
                       infinite: true,
                       
                   }
               }, {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       dots: false,
                       infinite: true,
                       autoplay: true,
                       autoplaySpeed: 2000,
                   }
               }]
         });
       
jQuery('.center').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

    new WOW().init();

//      jQuery('#carousel1').slick({
//   centerMode: true,
//   arrows:true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: true,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: true,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });


    function toggleIcon(e) {
        jQuery(e.target).prev('.panel-heading').find(".more-less").toggleClass('glyphicon-plus glyphicon-minus')
    }
    jQuery('.panel-group').on('hidden.bs.collapse', toggleIcon);
    jQuery('.panel-group').on('shown.bs.collapse', toggleIcon);
    jQuery("#wpcf7-f1449-p1265-o8").on('wpcf7:mailsent', function(event) {
        jQuery('#industrail_form_popup').modal('show')
    });
    jQuery('#mobile-menu ul#menu-main-menu li').find('ul li:nth-child(1)').before("<li><a href='#' class='back_class'>back</a></li>");
    jQuery('a.back_class').click(function(m) {
        m.preventDefault();
        if (jQuery(this).parent().parent().parent().hasClass('active')) {
            jQuery(this).parent().parent().parent().removeClass('active')
        }
    });
    jQuery('#mobile-menu ul#menu-main-menu li').click(function(m) {
        m.stopPropagation();
        if (jQuery(this).hasClass('menu-item-has-children')) {
            jQuery(this).addClass('active')
        } else {}
    });
    jQuery("li.menu-item:nth-child(2) ul").addClass("mega-menu menu-5-col menu-fullwidth menu-hr-heading ul-node");
    jQuery('#myModal123').modal('show');
    
     setTimeout(function()
     {
    jQuery('#specialoffer_modal').modal('show');
       }, 20000);
//christmas popup
// setTimeout(function()
//      {
//     jQuery('#chrismas_popup').modal('show');
//     jQuery('#chrismas_popup').click(function(){
//         jQuery(this).modal('hide');
//         //jQuery('#get_a_free_consultation').modal('show');
//     });
//        }, 2000);
//contact form popup's

jQuery('.write_to_us').click(function(){
        jQuery('#write_to_us').modal('show');
});
jQuery('a[href="#myQuoteModal"]').click(function(e){
    e.preventDefault();
    jQuery('#myModal').modal('show');
});
jQuery('a[href="#myQuoteModal01"]').click(function(e){
    e.preventDefault();
    jQuery('#myrestaurentModal').modal('show');
});
// jQuery('#myModal').on('hidden.bs.modal', function(){
//     jQuery(this).find('form')[0].reset();
// });
jQuery('#myModal').on('hidden.bs.modal', function() {
 jQuery('.wpcf7-not-valid-tip').css({'display':'none'});
 jQuery('form.wpcf7-form .wpcf7-response-output').css({'display':'none'});
});

jQuery('a[href="#myTrainingModal"]').click(function(e){
    e.preventDefault();
    jQuery('#myTrainingModal').modal('show');
})
jQuery('.Have_us_call_you').click(function(){
     jQuery('#Have_us_call_you').modal('show');
});

//contact form popup's ends

    jQuery('.offcanvas-nav-toggle').click(function(e) {
        e.preventDefault();
        jQuery('body').toggleClass('offcanvas-nav-open')
    });
    jQuery(document).mouseup(function(e) {
        var container = jQuery(".bgc-gray-base");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            jQuery('body').removeClass('offcanvas-nav-open')
        }
    });
    jQuery('.nav-hamburger').click(function(e) {
        e.preventDefault();
        jQuery('body').toggleClass('mobile-nav-open')
    });
    jQuery('.mobile-nav-toggle i').click(function(e) {
        e.preventDefault();
        jQuery('body').removeClass('mobile-nav-open')
    });
    jQuery('.select_box1').on('change', function(e) {
        var arr = [];
        jQuery('.select_box1').each(function() {
            arr.push(jQuery(this).val())
        });
        var optionSelected1 = jQuery("option:selected", this);
        var valueSelected1 = this.value;
        var url = MYAJAXURL.ajaxurl;
        jQuery.ajax({
            url: url + '?action=customfunction123',
            type: 'POST',
            data: 'valueSelected1=' + arr,
            datatype: 'text',
            success: function(response) {
                jQuery('.case_study_div').html(response)
            },
        })
    });
    if (jQuery('.fusion-header').length > 0) {
        var $body = jQuery('body');
        var $appear_target = jQuery('.page-body');
        jQuery(window).on('scroll , load', function() {
            var windowToTop = jQuery(this).scrollTop();
            if (windowToTop > 1 && !$body.hasClass('$body')) {
                $body.addClass('nav-fixed-transformed')
            } else {
                $body.removeClass('nav-fixed-transformed')
            }
            if (windowToTop >= $appear_target.position().top) {
                $body.addClass('nav-fixed-appeared')
            } else {
                $body.removeClass('nav-fixed-appeared')
            }
        })
    }
    jQuery(".btnMore").on("click", function(e) {
        e.preventDefault();
        jQuery('.about-rv').slideDown(1000);
        jQuery('.About-rvtechnologies').fadeOut('slow')
    });
    jQuery(".closeMore").on("click", function(e) {
        e.preventDefault();
        jQuery('.about-rv').hide();
        jQuery('.About-rvtechnologies').slideDown(1000)
    });
    var res = jQuery('li').find('#fusion-tab-seoservices h4.fusion-tab-heading');
    jQuery("<span class='logo web-8'>&nbsp;</span>").insertBefore(res);
    var res = jQuery('li a[href*="#tab-174e7998bd6738501bb"]').children('h4.fusion-tab-heading');
    jQuery("<span class='logo web-10'>&nbsp;</span>").insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-payperclick').children('h4.fusion-tab-heading');
    jQuery("<span class='logo web-11'>&nbsp;</span>").insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-orm').children('h4.fusion-tab-heading');
    jQuery("<span class='logo web-12'>&nbsp;</span>").insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-contentmarketing').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-14">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-phpdevelopment').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-43">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li  a[href*="#tab-827926aa32bde7c0b1c"]').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-49">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-python').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-50">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-rubyonrails').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-51">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-javadevelopment').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-52">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-logodesign').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-3">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-graphicdesign').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-4">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-responsiveweb').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-5">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-parallaxweb').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-7">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-landingpages').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-32">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li a[href*="#tab-2645d815e133545b567"]').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-60">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-wordpress').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-16">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-joomla').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-17">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-drupal').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-19">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-squarespace').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-48">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-laravel').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-34">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-cakephp').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-54">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-codeigniter').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-55">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-yiidevelopment').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-56">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-symfony').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-57">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-magento').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-23">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-shopify').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-27">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-prestashop').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-28">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-opencart').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-36">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-bigcommerce').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-58">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-iphone').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-9">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-android').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-13">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-windowsphone').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-15">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-ipad').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-18">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-gamesapp').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-53">&nbsp;</span>').insertBefore(res);
     var res = jQuery('li a[href*="#tab-fa60d2cec646b05bbf6"]').children('h4.fusion-tab-heading');
    jQuery('<span class="logo web-53">&nbsp;</span>').insertBefore(res);
    var res = jQuery('li').find('#fusion-tab-benefitsfromouryearsofexperience').children('h4.fusion-tab-heading');
    jQuery('<img class="os-img_spy" src="https://rvtechnologies.com/wp-content/uploads/2017/10/tab4.png" alt="">').insertAfter(res);
    var res = jQuery('li').find('#fusion-tab-skilledteamofdevelopers').children('h4.fusion-tab-heading');
    jQuery('<img class="os-img_spy" src="https://rvtechnologies.com/wp-content/uploads/2017/10/tab1.png" alt="">').insertAfter(res);
    var res = jQuery('li').find('#fusion-tab-rapidresponseandfriendlysupport').children('h4.fusion-tab-heading');
    jQuery('<img class="os-img_spy" src="https://rvtechnologies.com/wp-content/uploads/2017/10/tab2.png" alt="">').insertAfter(res);
    var res = jQuery('li').find('#fusion-tab-confidentialityguaranteed').children('h4.fusion-tab-heading');
    jQuery('<img class="os-img_spy" src="https://rvtechnologies.com/wp-content/uploads/2017/10/tab3.png" alt="">').insertAfter(res);
    var res = jQuery('.custom_image_wrapper').find('.fusion-image-wrapper a').children('img');
    jQuery('<div class="dh-overlay"> <span class="ico"><i class="fa fa-plus"></i></span> </div>').insertAfter(res);
    jQuery('.custom_image_wrapper').directionalHover()
})


