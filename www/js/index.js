function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
    document.addEventListener("offline", ifOffline, false);
    alert("Device Ready");
    cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
    });
}
function ifOffline() {
    alert("No internet. Check connection and restart the app.");
    navigator.app.exitApp();
}
$(".menuicon").click(function(){
    $(".menuexit").fadeIn(250);
    $(".menu").addClass("show");
});
$(".menuexit").click(function(){
    $(".menuexit").delay(250).fadeOut(250);
    $(".menu").removeClass("show");
});
function menuexit() {
    $(".menuexit").delay(250).fadeOut(250);
    $(".menu").removeClass("show");
}
$(".daslink").click(function(){
    cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
    });
    $(".contdiv").fadeOut(500);
    $(".dashboard").delay(500).fadeIn(500);
    dashboard();
    menuexit();
});
$(".inclink").click(function(){
    $(".contdiv").fadeOut(500);
    $(".income").delay(500).fadeIn(500);
    income();
    menuexit();
});
$(".explink").click(function(){
    $(".contdiv").fadeOut(500);
    $(".expenses").delay(500).fadeIn(500);
    expenses();
    menuexit();
});
$(".analink").click(function(){
    $(".contdiv").fadeOut(500);
    $(".analytics").delay(500).fadeIn(500);
    analytics();
    menuexit();
});
$(".reflink").click(function(){
    $(".contdiv").fadeOut(500);
    $(".refer").delay(500).fadeIn(500);
    refer();
    menuexit();
});
$(".incadd img").click(function(){
    $(".newinc").fadeIn(500);
});
$(".incclose").click(function(){
    $(".newinc").fadeOut(500);
});
$(".expadd img").click(function(){
    $(".newexp").fadeIn(500);
});
$(".expclose").click(function(){
    $(".newexp").fadeOut(500);
});