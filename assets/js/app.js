var x = $('div');
var isValid = false;



$("#submit-button").on("click", function (event) {
    event.preventDefault();


    var ak = "c6a18f9be9e8692a7c9ef136e473eb41";
    var url = $('#user-link').val().trim();

    var auth = '4775-012efdf683fa5f53cd2a9f42456e4008';
    var imgUrl = `http://image.thum.io/get/auth/${auth}/${url}`;
    var pic = $('<img>');
    pic.attr("src", imgUrl);
    $('#img').append(pic);



    // var qURL = `https://image.thum.io/get/width/100/crop/600/${url}`;
    // var ipURL = `https://www.enclout.com/api/v1/reputation/show?auth_token=jsvXsM7Cx4AH-r3YURXp&url=google.com`;
    // var queryURL = `https://api.screenshotlayer.com/api/capture?access_key=${ak}&url=${url}&format=JPG`;
    // console.log(' Hi');

    $('#answer').removeClass("d-none");

    // $.ajax({

    //     url: imgUrl,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log('response :', response);
    // });



});


function checkUserLink(string) {

}
