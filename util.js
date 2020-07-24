var localStorageVersion = 'v1.0.2'

function setLocalStorage(key, value) {
  localStorage.setItem(localStorageVersion + ':' + key, value);
}

function getLocalStorage(key) {
  return localStorage.getItem(localStorageVersion + ':' + key);
}

function removeLocalStorage(key) {
  return localStorage.removeItem(localStorageVersion + ':' + key);
}

function removeLocalStorageByFilter(word) {
  Object.keys(localStorage).forEach((key) => {
    if (key.indexOf(word) > -1) {
      localStorage.removeItem(key);
    }
  });
}

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

function insertParam(url, key, value) {
  key = escape(key); value = escape(value);

  var kvp = '';
  if (url.indexOf('http') === 0) {
    kvp = url.split('&');
  } else {
    kvp = url.substr(1).split('&');
  }
  if (kvp[0].indexOf('?') === -1) {
      url = url + '?' + key + '=' + value;
  }
  else {

      var i = kvp.length; var x; while (i--) {
          x = kvp[i].split('=');

          if (x[0] == key) {
              x[1] = value;
              kvp[i] = x.join('=');
              break;
          }
      }

      if (i < 0) { kvp[kvp.length] = [key, value].join('='); }

      //this will reload the page, it's likely better to store this until finished
      url = kvp.join('&');
  }
  return url;
}

$( document ).ready(function() {
  var access_token = getLocalStorage('access_token');
  var inDashboard = window.location.pathname.indexOf('/dashboard/') === 0;
  if (inDashboard && !access_token) window.location.href = "/login";
});