$(document).ready(function(){       
$('#toggle, nav a').click(function() {
   $('#toggle, nav a').toggleClass('active');
   $('#overlay').toggleClass('open');
  });

var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("header").css({
                    	'display': 'block',
                    	'transition': '1s ease',
                    	'transition': '1s ease',
                    	'background-color': '#7e99bc',
                    	'border-bottom': '.5px ridge #ffffff',
                    	// 'height': '70px',

                    });
                    $("header img").css({
                    	'width': '200px',
                    	'transition': '1s ease',
                    	'padding-top': '5px'
                    });
                    $(".button_container").css({
                    	'width': '30px',
                    	'height': '22px',
                    	'transition': '1s ease',
                    	'margin-top': '-10px'
                    });


                }
                 else {
                    $("header").css({

                    	'background-color': 'transparent',
                    	'border-bottom': 'none'
                    });
                    $("header img").css({
                    	'width': '300px',
                    	'transition': '.5s ease'
                    });
                    $(".button_container").css({
                    	'width': '35px',
                    	'height': '27px',
                    	'transition': '.5s ease',
                    	// 'padding-top': '5px'
                    });
                }
            });

        });

