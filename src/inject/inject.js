chrome.extension.sendMessage({}, function(response) {
  var favicon;
  var getUnreadCount = function(callback){
    var googleId = getMultipleAccountId();
    var request = new XMLHttpRequest();

    request.open('GET', 'https://mail.google.com/mail/u/' + googleId + '/feed/atom', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var res = request.responseText.match(/<fullcount>(\d)<\/fullcount>/);
        callback(null, res[1]);
      }
      callback('Error request status ' + request.status);
    };

    request.onerror = function() {
      callback('Error get Gmail atom feed');
    };

    request.send();
  }

  var getMultipleAccountId = function () {
    return window.location.pathname.substr(3, 1) || 0;
  }

  var check = function(){
    getUnreadCount(function(error, unread){
      if(error === null){
        favicon.badge(unread);
      }
    });
  }

  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      document.getElementsByClassName('i1Vy9')[0].setAttribute('href', 'data:image/png;base64,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');

      favicon = new Favico({
        animation:'none',
      });

      favicon.badge(0);
      check();

      var checkInterval = setInterval(function(){ check(); }, 30000);
    }
  }, 10);
});
