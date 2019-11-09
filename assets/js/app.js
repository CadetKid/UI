$(document).ready(function(){
        $("#all").click(function(){
            $("#number").show();
        });
        $("#one").click(function(){
            $("#number").hide();
        });

        $('input[type="checkbox"]').click(function(){
            if($("#retakeCheck").is(":checked")){
                $("#retakeCourse").show();
            }
            else if($("#retakeCheck").is(":not(:checked)")){
                $("#retakeCourse").hide();
            }
        });

});
