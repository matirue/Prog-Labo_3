/// <reference path="../libs/jquery/index.d.ts" />

$(document).ready(function(){

    $("#p01").mouseover(function(){//mouseover - cuando el puntero pasa por aariba del elemento

        $("#p01").addClass("negrita");

    });

    $("#p01").mouseout(function(){//mouseout - cuando el puntero sale de mi elemento
        
        $("#p01").removeClass("negrita");
        
    });

    $("#btn01").click(function(){//click - lo q va hacer cuando haga click en el elemnto

        if($("#p02").attr("class") == "negrita")
            $("#p02").removeClass("negrita");
        else
            $("#p02").addClass("negrita");
        
    });    
});
