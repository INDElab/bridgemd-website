/* Mobile navigation toggle. Progressive enhancement: without JS the nav
   stays visible, because the `hidden` attribute is only added here. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  var mq = window.matchMedia('(max-width: 820px)');

  function collapse() {
    nav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function sync() {
    if (mq.matches) {
      collapse();
    } else {
      nav.hidden = false;
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  toggle.addEventListener('click', function () {
    var open = nav.hidden;
    nav.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.addEventListener('click', function (e) {
    if (mq.matches && e.target.closest('a')) collapse();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mq.matches && !nav.hidden) {
      collapse();
      toggle.focus();
    }
  });

  mq.addEventListener('change', sync);
  sync();
})();
