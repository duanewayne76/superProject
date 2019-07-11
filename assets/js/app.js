$(document).ready(function () {


    function getUrlInfo(url) {


        let url2Check = url;
        let aKey = "at_3fGj57nrEWvCnPmWisKfWJwaVgE7N";
        let ipURL = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${aKey}&domainName=${url2Check}&outputFormat=JSON&ip=1`;

        let catKey = "at_EIIrtzYfiUiqdQfGcXoPvRaMgclE0";
        let catURL = `https://website-categorization-api.whoisxmlapi.com/api/v1?apiKey=${catKey}&domainName=${url2Check}&outputFormat=JSON&ip=1`;
        let ipURL2 = `https://domain-reputation-api.whoisxmlapi.com/api/v1?apiKey=${catKey}&domainName=${url2Check}&outputFormat=JSON&ip=1`;


        $.ajax({
            url: ipURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var ip = response.WhoisRecord.ips[0];
            console.log(ip);
            $("#ip").html(ip);
            

        });
        $.ajax({
            url: ipURL2,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var rep = response.reputationScore + "%";
            var warning = response.testResults[0].warnings[0];
            $("#rScore").html(rep);
            $("#rWarnings").html(warning);
            // console.log(ip);


        });

        $.ajax({
            url: catURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var cat = response.categories[0];
            var dName = response.domainName;
            $("#cat").html(cat);
            $("#dName").html(dName);
            // console.log(ip);




        });
    }






    //         var ip = response3.WhoisRecord.ips[0];
    //         // console.log(ip);
    //         var x = $('<div>');
    //         x.html(`<div class="p-2"><h2>IP: ${ip}</h2></div>`);
    //         x.attr("id", "txt");
    //         $('#stuff').append(x);

    //     });
    //     var rep = response2.reputationScore + "%";
    //     var warning = response2.testResults[0].warnings[0];
    //     // console.log(ip);
    //     var x = $('<div>');
    //     x.html(`<div class="p-2"><h2>Reputation Score: ${rep}</h2></div><div class="p-2"><h2>Warning(s): ${warning}</h2></div>`);
    //     x.attr("id", "txt");
    //     $('#stuff').append(x);
    // });
    // var cat = response1.categories[0];
    // var dName = response1.domainName;
    // console.log(cat);
    // console.log(dName);
    // var x = $('<div>');
    // x.html(`<div class="p-2"><h2>Domain Name: ${dName}</h2></div><div class="p-2"><h2>Category: ${cat}</h2></div>`);
    // x.attr("id", "txt");
    // $('#stuff').append(x);










    $("#submit-button").on("click", function (event) {
        $("#img").empty();
        $("#ip").empty();
        event.preventDefault();



        var url = $('#user-link').val().trim();
        if (url) {

            // function that takes the url the user gave and performs an AJAX call for Info
            // $("#img").empty();
            // $("#stuff").empty();
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