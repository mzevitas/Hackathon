$(document).ready(function(){       
$('#toggle, nav a').click(function() {
   $('#toggle, nav a').toggleClass('active');
   $('#overlay').toggleClass('open');
  });

            // var scroll_pos = 0;
            // $(document).scroll(function() { 
            //     scroll_pos = $(this).scrollTop();
            //     if(scroll_pos > 210) {
            //         $("header").css({
            //         	'transition': '1s ease',
            //         	'background-color': 'hsla(0,0%,0%,0.3)',
            //         	'border-bottom': '.5px ridge hsla(209, 49%, 68%, 1)',
            //         	'height': '70px',

            //         });
            //         $("header img").css({
            //             'width': '40px',
            //             'transition': '1s ease'
            //         });
            //         $(".button_container").css({
            //             'width': '30px',
            //             'height': '22px',
            //             'transition': '1s ease',
            //             'margin-top': '-10px'
            //         });


            //     } else {
            //         $("header").css({
            //             'background-color': 'transparent',
            //             'border-bottom': 'none',
            //             'color': '#000000'
            //         });
            //         $("header img").css({
            //         	'width': '50px',
            //         	'transition': '.5s ease'
            //         });
            //         $(".button_container").css({
            //         	'width': '35px',
            //         	'height': '27px',
            //         	'transition': '.5s ease',
            //         	// 'padding-top': '5px'
            //         });
            //     }
            // });
        });

