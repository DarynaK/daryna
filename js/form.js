$(document).ready(function() {
    $(function() {
        $("#send").click(function() {
            $.ajax({
                url: "https://formspree.io/dara.klymenko@gmail.com", 
                method: "POST",
                data: {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    textarea: $("#textarea").val()
                },
                dataType: "json"
            }).then(function(){
                $("form").trigger("reset");
                }).then(function(){
                    $(".modal").fadeIn();
            });
        });
    });

    $(".close").click(function() {
        $(".modal").fadeOut();
    });
    
});
