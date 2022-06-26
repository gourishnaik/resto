

addEventListener("load", function () {
  setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
  window.scrollTo(0, 1);
}

jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();
    
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
});

// $(document).ready(function () {
//     $().UItoTop({
//         easingType: 'easeOutQuart'
//     });

// });
////////////xzoom//////////////
// (function ($) {
//     $(document).ready(function() {
//         $('.xzoom, .xzoom-gallery').xzoom({zoomWidth: 400, title: true, tint: '#333', Xoffset: 15});
//         $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#ffa200'});
//         $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
//         $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#006699', Xoffset: 15});
//         $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#006699', Xoffset: 15});

//         //Integration with hammer.js
//         var isTouchSupported = 'ontouchstart' in window;

//         if (isTouchSupported) {
//             //If touch device
//             $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
//                 var xzoom = $(this).data('xzoom');
//                 xzoom.eventunbind();
//             });

//             $('.xzoom, .xzoom2, .xzoom3').each(function() {
//                 var xzoom = $(this).data('xzoom');
//                 $(this).hammer().on("tap", function(event) {
//                     event.pageX = event.gesture.center.pageX;
//                     event.pageY = event.gesture.center.pageY;
//                     var s = 1, ls;

//                     xzoom.eventmove = function(element) {
//                         element.hammer().on('drag', function(event) {
//                             event.pageX = event.gesture.center.pageX;
//                             event.pageY = event.gesture.center.pageY;
//                             xzoom.movezoom(event);
//                             event.gesture.preventDefault();
//                         });
//                     }

//                     xzoom.eventleave = function(element) {
//                         element.hammer().on('tap', function(event) {
//                             xzoom.closezoom();
//                         });
//                     }
//                     xzoom.openzoom(event);
//                 });
//             });

//         $('.xzoom4').each(function() {
//             var xzoom = $(this).data('xzoom');
//             $(this).hammer().on("tap", function(event) {
//                 event.pageX = event.gesture.center.pageX;
//                 event.pageY = event.gesture.center.pageY;
//                 var s = 1, ls;

//                 xzoom.eventmove = function(element) {
//                     element.hammer().on('drag', function(event) {
//                         event.pageX = event.gesture.center.pageX;
//                         event.pageY = event.gesture.center.pageY;
//                         xzoom.movezoom(event);
//                         event.gesture.preventDefault();
//                     });
//                 }

//                 var counter = 0;
//                 xzoom.eventclick = function(element) {
//                     element.hammer().on('tap', function() {
//                         counter++;
//                         if (counter == 1) setTimeout(openfancy,300);
//                         event.gesture.preventDefault();
//                     });
//                 }

//                 function openfancy() {
//                     if (counter == 2) {
//                         xzoom.closezoom();
//                         $.fancybox.open(xzoom.gallery().cgallery);
//                     } else {
//                         xzoom.closezoom();
//                     }
//                     counter = 0;
//                 }
//             xzoom.openzoom(event);
//             });
//         });

//         $('.xzoom5').each(function() {
//             var xzoom = $(this).data('xzoom');
//             $(this).hammer().on("tap", function(event) {
//                 event.pageX = event.gesture.center.pageX;
//                 event.pageY = event.gesture.center.pageY;
//                 var s = 1, ls;

//                 xzoom.eventmove = function(element) {
//                     element.hammer().on('drag', function(event) {
//                         event.pageX = event.gesture.center.pageX;
//                         event.pageY = event.gesture.center.pageY;
//                         xzoom.movezoom(event);
//                         event.gesture.preventDefault();
//                     });
//                 }

//                 var counter = 0;
//                 xzoom.eventclick = function(element) {
//                     element.hammer().on('tap', function() {
//                         counter++;
//                         if (counter == 1) setTimeout(openmagnific,300);
//                         event.gesture.preventDefault();
//                     });
//                 }

//                 function openmagnific() {
//                     if (counter == 2) {
//                         xzoom.closezoom();
//                         var gallery = xzoom.gallery().cgallery;
//                         var i, images = new Array();
//                         for (i in gallery) {
//                             images[i] = {src: gallery[i]};
//                         }
//                         $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
//                     } else {
//                         xzoom.closezoom();
//                     }
//                     counter = 0;
//                 }
//                 xzoom.openzoom(event);
//             });
//         });

//         } else {
//             //If not touch device

//             //Integration with fancybox plugin
//             $('#xzoom-fancy').bind('click', function(event) {
//                 var xzoom = $(this).data('xzoom');
//                 xzoom.closezoom();
//                 $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
//                 event.preventDefault();
//             });

//             //Integration with magnific popup plugin
//             $('#xzoom-magnific').bind('click', function(event) {
//                 var xzoom = $(this).data('xzoom');
//                 xzoom.closezoom();
//                 var gallery = xzoom.gallery().cgallery;
//                 var i, images = new Array();
//                 for (i in gallery) {
//                     images[i] = {src: gallery[i]};
//                 }
//                 $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
//                 event.preventDefault();
//             });
//         }
//     });
// })(jQuery);
////////////xzoom//////////////

////////////popup//////////////
// $(document).ready(function () {
//     $('.popup-with-zoom-anim').magnificPopup({
//         type: 'inline',
//         fixedContentPos: false,
//         fixedBgPos: true,
//         overflowY: 'auto',
//         closeBtnInside: true,
//         preloader: false,
//         midClick: true,
//         removalDelay: 300,
//         mainClass: 'my-mfp-zoom-in'
//     });

// });
// ////////////popup//////////////

// ////////////paypal//////////////
// paypalm.minicartk.render(); //use only unique class names other than paypalm.minicartk.Also Replace same class name in css and minicart.min.js

// paypalm.minicartk.cart.on('checkout', function (evt) {
//     var items = this.items(),
//         len = items.length,
//         total = 0,
//         i;

//     // Count the number of each item in the cart
//     for (i = 0; i < len; i++) {
//         total += items[i].get('quantity');
//     }

//     if (total < 3) {
//         alert('The minimum order quantity is 3. Please add more to your shopping cart before checking out');
//         evt.preventDefault();
//     }
// });
// ////////////paypal//////////////

// ////////////easyresponsive//////////////
// $(document).ready(function () {
//     //Horizontal Tab
//     $('#parentHorizontalTab').easyResponsiveTabs({
//         type: 'default', //Types: default, vertical, accordion
//         width: 'auto', //auto or any width like 600px
//         fit: true, // 100% fit in a container
//         tabidentify: 'hor_1', // The tab groups identifier
//         activate: function (event) { // Callback function if tab is switched
//             var $tab = $(this);
//             var $info = $('#nested-tabInfo');
//             var $name = $('span', $info);
//             $name.text($tab.text());
//             $info.show();
//         }
//     });
// });
// ////////////easyresponsive//////////////

// ////////////amountslider//////////////
// //<![CDATA[ 
//     $(window).load(function () {
//         $("#slider-range").slider({
//             range: true,
//             min: 0,
//             max: 9000,
//             values: [50, 6000],
//             slide: function (event, ui) {
//                 $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
//             }
//         });
//         $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

//     }); //]]>

//     ////////////amountslider//////////////

//  ////////////flexslider//////////////
//     // Can also be used with $(document).ready()
// 		$(window).load(function () {
// 			$('.flexslider').flexslider({
// 				animation: "slide",
// 				controlNav: "thumbnails"
// 			});
//         });

//         $(window).load(function () {
// 			$("#flexiselDemo1").flexisel({
// 				visibleItems: 3,
// 				animationSpeed: 1000,
// 				autoPlay: true,
// 				autoPlaySpeed: 3000,
// 				pauseOnHover: true,
// 				enableResponsiveBreakpoints: true,
// 				responsiveBreakpoints: {
// 					portrait: {
// 						changePoint: 480,
// 						visibleItems: 1
// 					},
// 					landscape: {
// 						changePoint: 640,
// 						visibleItems: 2
// 					},
// 					tablet: {
// 						changePoint: 768,
// 						visibleItems: 2
// 					}
// 				}
// 			});

//         });
//         $(window).load(function () {
// 			$("#flexiselDemo2").flexisel({
// 				visibleItems: 3,
// 				animationSpeed: 1000,
// 				autoPlay: true,
// 				autoPlaySpeed: 3000,
// 				pauseOnHover: true,
// 				enableResponsiveBreakpoints: true,
// 				responsiveBreakpoints: {
// 					portrait: {
// 						changePoint: 480,
// 						visibleItems: 1
// 					},
// 					landscape: {
// 						changePoint: 640,
// 						visibleItems: 2
// 					},
// 					tablet: {
// 						changePoint: 768,
// 						visibleItems: 2
// 					}
// 				}
// 			});

//         });
////////////flexslider//////////////

////////////submenu//////////////
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    
    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
    $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }	
  
  var accordion = new Accordion($('#accordion'), false);
});
////////////submenu//////////////


////////////mobilesubmenu//////////////
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mobileoverlay").style.display = "block";
}
function openNav1() {
  document.getElementById("mySidenav1").style.width = "250px";
  document.getElementById("mobileoverlay1").style.display = "block";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("mobileoverlay").style.display = "none";
  document.getElementById("mobileoverlay1").style.display = "none";
}
$(document).ready(function(){
  $(".sidenav1").click(function(){
    // $(".sidenav1").hide();
    closeNav();
  });
});
$(document).ready(function(){
  // $(".dot").click(function(){
  //   $("#mobileoverlay1 , #mobileloginmenu").toggle();
  // });
  
});
// $(document).ready(function(){
//   $("#mobileloginmenu").click(function(){
//     $("#mobileoverlay1 , #mobileloginmenu").hide();
//   });

// });



////////////mobilesubmenu//////////////
////////////fliter//////////////
$(document).ready(function(){
  $(".sort").click(function(){
    $("#sortbox , #mobileoverlay3").toggle();
  });
});
$(document).ready(function(){
  $(".down").click(function(){
    $(".pricecart1").hide();
    $(".pricecart2").show();
  });
  $(".up").click(function(){
    $(".pricecart1").show();
    $(".pricecart2").hide();
  });
});
////////////fliter//////////////

////////////cart//////////////

function showCart(){
  $(".cartbox").show();
  $(".overlaycart").show();
  $("body ").css("overflow", "hidden");
}

function hideCart(){
  $(".cartbox").hide();
  $(".overlaycart").hide();
  $("body ").css("overflow", "scroll");
}

$(document).ready(function(){
  
  $(".overlaycart").click(function(){
    $(".cartbox").hide();
    $(".overlaycart").hide();
    $("body ").css("overflow", "scroll");
  });
  
  $(".left").click(function(){
    $(".cartbox").hide();
    $(".overlaycart").hide();
    $("body").css("overflow", "scroll");
  });
  
  $(".miniCartProceedButtonCls").click(function(){
    
    $("body").css("overflow", "scroll");
    $(".cartbox").hide();
    $(".overlaycart").hide();
    
  });
  
});

function hideCart(){
  $("body").css("overflow", "scroll");
  $(".cartbox").hide();
  $(".overlaycart").hide();
}

////////////cart//////////////

$(document).ready(function(){
  $(".drop").click(function(){
    $(".dropmenu").show();
    $(" .minus").show();
    $(".plus").hide();
    
    
  });
});

$(document).ready(function(){
  $(".coupon-btn").click(function(){
    $(".input-btn").show();
    $(".coupon-btn").hide();
    
    
  });
  
});

//  slider Home Page
// 		$(document).ready(function(){
//     $("body , .mainnavmobile ").hover(function(){
//       $(".makeupmenulist").hide();
//    });


//   });
//   $(document).ready(function(){
// 		$(".makeup").hover(function(){
// 		$(".makeupmenulist").show();
// 		});
// 	});

$(document).ready(function(){
  $(".makeup").click(function(){
    $(".makeupmenulist").toggle();
  });
});
$(document).ready(function () {
  
  $(".thirdheader").mouseenter(function(){
    $(".makeupmenulist").show(); 
  });
  
  $("body , .mainnavmobile , .hideli ").mouseenter(function(){
    $(".makeupmenulist").hide(); 
  });
});

$(document).ready(function(){
  $(".close").click(function(){
    $(".orderreview").hide();
  });
});



function getLocation(){
  if(navigator.getLocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    $("#output").text("Browser not supported");
  }
}

function showPosition(position){
  var inn = "";
  inn = "lattitude = "+ position.coords.latitude;
  inn += "<br />";
  inn += "lattitude = "+ position.coords.longitude;
  
  var locAPI = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true"
  
  $("#output").text(locAPI);
}


function editMyProfile(){
  $(".edit , .onedit").hide();
  $(".save , .onsave").show();
}

function closeMyProfile(){
  $(".save , .onsave").hide();
  $(".edit , .onedit").show();
}


//////////////personaldetails
$(document).ready(function(){
  $(".edit").click(function(){
    $(".edit , .onedit").hide();
    $(".save , .onsave").show();
  });
});
$(document).ready(function(){
  $(".save").click(function(){
    $(".save , .onsave").hide();
    $(".edit , .onedit").show();
  });
});

$(document).ready(function(){
  $(".dropdown-toggle").click(function(){
    $(".dropdown-menu").toggle();
    
    
    
  });
  
});



// Google Location Code Starts here


// This sample uses the Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'), {types: ['geocode']});
    
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields(['address_component']);
    
    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }
  
  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    
    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }
    
    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
      }
    }
  }
  
  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle(
          {center: geolocation, radius: position.coords.accuracy});
          autocomplete.setBounds(circle.getBounds());
        });
      }
    }
    
    // Google Location Code Starts ends here
    
    
    function copyToClipboard(textBoxId) {
      var success   = true,
      range     = document.createRange(),
      selection;
      
      // For IE.
      if (window.clipboardData) {
        window.clipboardData.setData("Text", $("#"+textBoxId).val());        
      } else {
        // Create a temporary element off screen.
        var tmpElem = $('<div>');
        tmpElem.css({
          position: "absolute",
          left:     "-1000px",
          top:      "-1000px",
        });
        // Add the input value to the temp element.
        tmpElem.text($("#"+textBoxId).val());
        $("body").append(tmpElem);
        // Select temp element.
        range.selectNodeContents(tmpElem.get(0));
        selection = window.getSelection ();
        selection.removeAllRanges ();
        selection.addRange (range);
        // Lets copy.
        try { 
          success = document.execCommand ("copy", false, null);
        }
        catch (e) {
          copyToClipboardFF($("#"+textBoxId).val());
        }
        if (success) {
          tmpElem.remove();
        }
      }
    }
    
    function copyToClipboardFF(text) {
      window.prompt ("Copy to clipboard: Ctrl C, Enter", text);
    }
    
    
    
    
    function openStoreMenu() {
      document.getElementById("mySidenav2").style.width = "300px";
    }
    
    function closeStoreMenu() {
      document.getElementById("mySidenav2").style.width = "0";
    }
    
    
    
    $(document).ready(function() {
      // Set the carousel options
      
      // window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          document.getElementById("fixhead").style.padding = "4px 254px";
          document.getElementById("mysticky").style.boxShadow = "0px -20px 30px 6px black";
          document.querySelector(".firstrow").style.display = "none";
          document.querySelector(".thirdheader").style.display = "none";
        } else {
          document.getElementById("fixhead").style.padding = "26px 254px";
          document.getElementById("mysticky").style.boxShadow = "none";
          document.querySelector(".firstrow").style.display = "block";
          document.querySelector(".thirdheader").style.display = "flex";
        }
      }
      
      $(".carousel.zoom").carousel().on("slide.bs.carousel", function (data) {
        var n = $(data.target).find(".item").length;
        var active = data.relatedTarget;
        if(active===undefined){
          active = $(data.target).find(".item.active");
        }else{
          active = $(data.relatedTarget);
        }
        console.log(active);
        $(data.target).find(".item.next").removeClass("next");
        var next = $(data.target).find(".item").eq(active.index()-n+1);
        next.addClass("next");
        $(data.target).find(".item.prev").removeClass("prev");
        var prev = $(data.target).find(".item").eq(active.index()-1);
        prev.addClass("prev");
      }).trigger("slide.bs.carousel"); 
      
    });
    
    function getReverseGeocodingData(lat, lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      // This is making the Geocode request
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
          if (status !== google.maps.GeocoderStatus.OK) {
              alert(status);
          }
          // This is checking to see if the Geoeode Status is OK before proceeding
          if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
              var address = (results[0].formatted_address);
              $(".addressSearchInputCls").val(address);
  
              // var areaName = results[0].address_components[3].long_name;
              // $("#defaultAreaName").val(areaName);
          }
      });
  }