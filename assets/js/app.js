$(document).ready(function() {

    var x = $('div');
    var isValid = false;



    $("#submit-button").on("click", function(event) {
        $("#img").empty();
        $("#stuff").empty();
        event.preventDefault();


        var ak = "c6a18f9be9e8692a7c9ef136e473eb41";
        var url = $('#user-link').val().trim();
        if (url) {


            var auth = '4775-012efdf683fa5f53cd2a9f42456e4008';
            var imgUrl = `http://image.thum.io/get/auth/${auth}/https://${url}`;
            var pic = $('<img>');
            pic.attr("src", imgUrl);
            $('#img').append(pic);

            var info = $('<div>');
            info.attr("id", "txt");
            info.html(`<div class="p-2"><h2>IP: </h2> </div><div class="p-2"><h2>Info: </h2><h2>Child Friendly: </h2> </div><div class="p-2"><h2>Trustworthy: </h2></div>`)
            $('#stuff').append(info);

            // this is the CORB problem call. URL and authtoken are hardcoded into link for testing purposes
            // var ipURL = `https://www.enclout.com/api/v1/reputation/show?auth_token=jsvXsM7Cx4AH-r3YURXp&url=google.com`;

            $("#user-link").val("");
            $('#answer').removeClass("d-none");

            var ipURL = "test2.json";

            $.ajax({
                url: ipURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);
            });
        }





    });


    function checkUserLink(string) {

    }

})