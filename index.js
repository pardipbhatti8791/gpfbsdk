function gpFbSDK(options) {
  window.fbAsyncInit = function() {
    FB.init({
      appId: options.client_id,
      autoLogAppEvents: true,
      xfbml: true,
      version: "v5.0"
    });

    // Broadcast an event when FB object is ready
    var fbInitEvent = new Event("FBObjectReady");
    document.dispatchEvent(fbInitEvent);
  };

  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

module.exports = gpFbSDK;
