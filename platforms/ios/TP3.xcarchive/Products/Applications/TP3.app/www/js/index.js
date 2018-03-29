var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

$(document).ready(function(){
  $(".burger").click(function(){

    if($(".special-menu").is(":hidden")){
      $(".content,.cover").css("filter","blur(5px)");
    }
    else{
      $(".content,.cover").css("filter","none");
    }
    $(".special-menu").slideToggle();
  });
});
