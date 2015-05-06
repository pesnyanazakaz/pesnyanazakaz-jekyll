$(document).ready(function () {

    function playVideoTour() {
        $("#content").hide();
        $("#tour").get(0).play();
    }

    function stopVideoTour() {
        $("#tour").get(0).pause();
        afterStopVideoTour();
    }

    function afterStopVideoTour() {
        $("#callback").show();
        $("#brand").show();
    }

    $("#play-tour").click(function () {
        playVideoTour();
    });

    $("#stop-tour-video").click(function () {
        stopVideoTour();
    });

    $("#tour").on("ended", function () {
        afterStopVideoTour();
    });

    audiojs.events.ready(function () {
        var as = audiojs.createAll();
    });
});