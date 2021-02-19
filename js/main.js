///// RESEARCH BOX 1 /////
//Display text using class selector "hoverable"
$(document).ready(function () {

    $("div .research-block1").mouseover(function () {
        $(this).find(".hoverable").show();
    });

    $("div .research-block1").mouseout(function () {
        $(this).find(".hoverable").hide();
    });
});

//Change opacity @ mouseover
$(document).ready(function () {
    $(".research-block1").mouseover(function () {
        $(".research-block1").css("opacity", "80%");
    });
    $(".research-block1").mouseout(function () {
        $(".research-block1").css("opacity", "100%");
    });
});

//Animate div @ mouseover
var baseMargin = 5;
$(document).ready(function () {
    $(".research-block1").hover(function () {
        $(this).stop().animate({ marginTop: (baseMargin + 5) + 'px' }, 500);
    },
        function () {
            $(this).stop().animate({ marginTop: (baseMargin - 5) + 'px' }, 500);
        });
});

//Add drop shadow @ mouseover
$(document).ready(function () {
    $(".research-block1").mouseover(function () {
        $(".research-block1").css("box-shadow", "12px 20px 18px #3f474d"); 
    });
    $(".research-block1").mouseout(function () {
        $(".research-block1").css("box-shadow", "none");
    });
});

///// RESEARCH BOX 2 /////
//Display text using class selector "hoverable"
$(document).ready(function () {

    $("div .research-block2").mouseover(function () {
        $(this).find(".hoverable").show();
    });

    $("div .research-block2").mouseout(function () {
        $(this).find(".hoverable").hide();
    });
});

//Change opacity @ mouseover
$(document).ready(function () {
    $(".research-block2").mouseover(function () {
        $(".research-block2").css("opacity", "80%");
    });
    $(".research-block2").mouseout(function () {
        $(".research-block2").css("opacity", "100%");
    });
});

//Animate div @ mouseover
var baseMargin = 5;
$(document).ready(function () {
    $(".research-block2").hover(function () {
        $(this).stop().animate({ marginTop: (baseMargin + 5) + 'px' }, 500);
    },
        function () {
            $(this).stop().animate({ marginTop: (baseMargin - 5) + 'px' }, 500);
        });
});

//Add drop shadow @ mouseover
$(document).ready(function () {
    $(".research-block2").mouseover(function () {
        $(".research-block2").css("box-shadow", "12px 20px 18px #3f474d"); 
    });
    $(".research-block2").mouseout(function () {
        $(".research-block2").css("box-shadow", "none");
    });
});

///// RESEARCH BOX 3 /////
//Display text using class selector "hoverable"
$(document).ready(function () {

    $("div .research-block3").mouseover(function () {
        $(this).find(".hoverable").show();
    });

    $("div .research-block3").mouseout(function () {
        $(this).find(".hoverable").hide();
    });
});

//Change opacity @ mouseover
$(document).ready(function () {
    $(".research-block3").mouseover(function () {
        $(".research-block1").css("opacity", "80%");
    });
    $(".research-block3").mouseout(function () {
        $(".research-block3").css("opacity", "100%");
    });
});

//Animate div @ mouseover
var baseMargin = 5;
$(document).ready(function () {
    $(".research-block3").hover(function () {
        $(this).stop().animate({ marginTop: (baseMargin + 5) + 'px' }, 500);
    },
        function () {
            $(this).stop().animate({ marginTop: (baseMargin - 5) + 'px' }, 500);
        });
});

//Add drop shadow @ mouseover
$(document).ready(function () {
    $(".research-block3").mouseover(function () {
        $(".research-block3").css("box-shadow", "12px 20px 18px #3f474d"); 
    });
    $(".research-block3").mouseout(function () {
        $(".research-block3").css("box-shadow", "none");
    });
});

