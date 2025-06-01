function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  
  script.onload = function() {
    if (callback) callback();
  };
  
  script.onerror = function() {
  };

  document.head.appendChild(script);
}

loadScript('https://cdn.jsdelivr.net/gh/sumitkedia9/tailwind@main/tailwindcss.js', function() {
});
