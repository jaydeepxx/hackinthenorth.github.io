
$(document).ready(function(){
$(".dropdownbutton").click(function(){
	if($("ul.form").hasClass("active")){
		$(".main-body").css("padding-left","0px");
		$("ul.form").removeClass("active");
	}
	else
	{
		$(".main-body").css("padding-left","30px");
		$("ul.form").addClass("active");	
	}
	console.log("hello world");

});
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-buttons a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-buttons a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
    max_scroll=($(".landing-footer").position()).top+$(".landing-footer").outerHeight()-$(".nav-buttons").height();
    //console.log(($(".nav-buttons").position()).top);
     $(window).scroll(function () {
        var navbar = $(".nav-buttons");

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > max_scroll && !navbar.is(".navbuttonFixed")) {
                navbar.addClass("navbuttonFixed");
                 $(".main-header")
        }
        else if(scrollTop < max_scroll && navbar.is(".navbuttonFixed") ) {
                navbar.removeClass("navbuttonFixed");
        }

});


/* 
        Modals start 
*/

var collegeAmbassadorModal = document.getElementById('college-ambassador-modal');
var collegeAmbassadorButton = document.getElementById('college-ambassador-button');
var collegeAmbassadorClose = document.getElementsByClassName("close")[0];

collegeAmbassadorButton.onclick = function() {
    collegeAmbassadorModal.style.display = "block";
}

collegeAmbassadorClose.onclick = function() {
    collegeAmbassadorModal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == collegeAmbassadorModal){
        collegeAmbassadorModal.style.display = "none";
    }
}

/* 
        Modals end 
*/


});