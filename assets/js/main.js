(function () {
  var S = document.currentScript;

  var bar = document.getElementById('progress');
  if (bar) {
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  if ('serviceWorker' in navigator && S && S.dataset.sw) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(S.dataset.sw).catch(function () {});
    });
  }

  var btn = document.getElementById('install');
  if (!btn) return;
  var standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (standalone) return;

  var ios = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var deferred = null;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    btn.hidden = false;
  });
  window.addEventListener('appinstalled', function () { btn.hidden = true; });
  if (ios) btn.hidden = false;

  btn.addEventListener('click', function () {
    if (deferred) {
      deferred.prompt();
      deferred.userChoice.then(function () { deferred = null; btn.hidden = true; });
      return;
    }
    var tip = document.getElementById('install-tip');
    if (tip) tip.hidden = !tip.hidden;
  });
})();
