$(document).ready(function () {

    function getUrlInfo(url) {

        let url2Check = url;
        let aKey = "at_3fGj57nrEWvCnPmWisKfWJwaVgE7N";
        let ipURL = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${aKey}&domainName=${url2Check}&outputFormat=JSON&ip=1`;
        

        $.ajax({
            url: ipURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var ip = response.WhoisRecord.ips[0];
            // console.log(ip);
            var x = $('<div>');
            x.html(`<div class="p-2"><h2>IP: ${ip}</h2></div>`);
            x.attr("id", "txt");        
            $('#stuff').append(x);

        });
    }


    $("#submit-button").on("click", function (event) {
        $("#img").empty();
        $("#stuff").empty();
        event.preventDefault();



        var url = $('#user-link').val().trim();
        if (url) {

            // function that takes the url the user gave and performs an AJAX call for Info
            getUrlInfo(url);

            $("#user-link").val("");
            $('#answer').removeClass("d-none");

            // img created from thum.io and appended onto the page
            var auth = '4775-012efdf683fa5f53cd2a9f42456e4008';
            var imgUrl = `http://image.thum.io/get/auth/${auth}/https://${url}`;
            var pic = $('<img>');
            pic.attr("src", imgUrl);
            $('#img').append(pic);

        }





    });

})