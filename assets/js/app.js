var x = $('div');

$("#submit-button").on("click", function (event) {
    event.preventDefault();
    console.log(' Hi');
    $('#answer').removeClass("d-none");
});
