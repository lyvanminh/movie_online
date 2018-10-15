(function($) {
  var fbRoot;

  function saveFacebookRoot() {
    if ($("#fb-root").length) {
      fbRoot = $("#fb-root").detach();
    }
  };

  function restoreFacebookRoot() {
    if (fbRoot != null) {
      if ($("#fb-root").length) {
        $("#fb-root").replaceWith(fbRoot);
      } else {
        $("body").append(fbRoot);
      }
    }

    if (typeof FB !== "undefined" && FB !== null) {
      FB.XFBML.parse();
    }
  };

  document.addEventListener("turbolinks:request-start", saveFacebookRoot)
  document.addEventListener("turbolinks:load", restoreFacebookRoot)
}(jQuery));

$(document).on("turbolinks:load", function(){
  const player = new Plyr('#player');
});