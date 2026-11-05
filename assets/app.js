
(function () {
  'use strict';

  function SPRITE_HTML() {
    /* ══ Icon system · v8-g7 — crafted SVG sprite, one-time boot injection ══
       24x24 grid · 2px stroke · round caps/joins · unified nav line style:
       every ic-* UI symbol is stroke-only currentColor — no accent fills.
       Sticker art (stk-*) intentionally keeps its duotone fills. */
    var _ICONS = '<svg id="ss-icons" style="display:none" aria-hidden="true">'
      /* ── UI symbols ── */
      + '<symbol id="ic-squad" viewBox="0 0 24 24"><circle cx="12" cy="9.2" r="4.9"/><path d="M7 20.5a5 5 0 0 1 10 0"/><circle cx="4.4" cy="7.2" r="1.9"/><path d="M2 13.9a3.1 3.1 0 0 1 5.4 1.4"/><circle cx="19.6" cy="7.2" r="1.9"/><path d="M22 13.9a3.1 3.1 0 0 0-5.4 1.4"/></symbol>'
      + '<symbol id="ic-bolt" viewBox="0 0 24 24"><path d="M13 2.2 4.8 13.4h5.1L8.9 21.8l8.4-11.4h-5.1L13 2.2Z"/></symbol>'
      + '<symbol id="ic-trophy" viewBox="0 0 24 24"><path d="M7 4h10v4.5a5 5 0 0 1-10 0V4Z"/><path d="M8 21h8M12 17.5V21"/><path d="M7 5.5H4.2v1.6a3.2 3.2 0 0 0 3 3.2M17 5.5h2.8v1.6a3.2 3.2 0 0 1-3 3.2"/></symbol>'
      + '<symbol id="ic-footprint" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><ellipse cx="9.3" cy="8.5" rx="2.1" ry="2.9" transform="rotate(-16 9.3 8.5)"/><ellipse cx="13.9" cy="14.6" rx="2.1" ry="2.9" transform="rotate(16 13.9 14.6)"/></symbol>'
      + '<symbol id="ic-coin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><ellipse cx="11.1" cy="10.4" rx="1.6" ry="2.2" transform="rotate(-16 11.1 10.4)"/><ellipse cx="13.6" cy="14.3" rx="1.6" ry="2.2" transform="rotate(16 13.6 14.3)"/><path d="M5.9 9.6a6.5 6.5 0 0 1 3.4-3.5"/></symbol>'
      + '<symbol id="ic-gear" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M19 12a7 7 0 0 0-.14-1.4l2-1.56-2-3.46-2.35.95a7 7 0 0 0-2.42-1.4L13.7 3h-3.4l-.4 2.53a7 7 0 0 0-2.41 1.4l-2.36-.95-2 3.46 2 1.56A7.1 7.1 0 0 0 5 12c0 .48.05.95.14 1.4l-2 1.57 2 3.46 2.35-.95a7 7 0 0 0 2.42 1.4l.39 2.52h3.4l.4-2.52a7 7 0 0 0 2.41-1.4l2.36.95 2-3.46-2-1.57c.09-.45.13-.92.13-1.4Z"/></symbol>'
      + '<symbol id="ic-flame" viewBox="0 0 24 24"><path d="M12 2.6c.7 3.1-1.3 4.5-2.6 6.1A6.7 6.7 0 0 0 7 14.3a5 5 0 0 0 10 0c0-2-.8-3.6-1.9-4.9-.4 1.3-1.1 2-1.9 2.3.9-3 .4-6.5-1.2-9.1Z"/><path d="M12 14c1.5 1.7 2.1 2.7 2.1 3.8a2.6 2.6 0 0 1-5.2 0c0-1.1 1.1-2.2 3.1-3.8Z"/></symbol>'
      + '<symbol id="ic-gift" viewBox="0 0 24 24"><rect x="3.5" y="8.5" width="17" height="11.8" rx="1.6"/><path d="M3.5 12.6h17M12 8.5v11.8"/><path d="M12 8.5C11.2 5.9 9.7 4.7 8.2 5c-1.6.3-2 2.3-.7 3.2 1 .7 3.2.8 4.5.3Z"/><path d="M12 8.5c.8-2.6 2.3-3.8 3.8-3.5 1.6.3 2 2.3.7 3.2-1 .7-3.2.8-4.5.3Z"/></symbol>'
      + '<symbol id="ic-event" viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="17" height="15" rx="2.2"/><path d="M3.5 10h17M8 3.5v4M16 3.5v4"/><circle cx="8.6" cy="14.2" r="1.2"/><circle cx="12.6" cy="14.2" r="1.2"/></symbol>'
      + '<symbol id="ic-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.8"/><path d="M3.2 12h17.6M12 3.2c4 5 4 12.6 0 17.6-4-5-4-12.6 0-17.6Z"/></symbol>'
      + '<symbol id="ic-photo" viewBox="0 0 24 24"><rect x="3.2" y="5.5" width="17.6" height="14" rx="2.4"/><circle cx="9" cy="10.2" r="1.5"/><path d="m4.5 17 4.5-4.5 3.5 3 3-2 4 3.5"/></symbol>'
      + '<symbol id="ic-bell" viewBox="0 0 24 24"><path d="M6.2 16V11a5.8 5.8 0 0 1 11.6 0v5l1.6 2.6H4.6L6.2 16Z"/><path d="M10 21.2a2.2 2.2 0 0 0 4 0"/></symbol>'
      + '<symbol id="ic-star" viewBox="0 0 24 24"><path d="m12 3.4 2.7 5.4 6 .9-4.3 4.3 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.7l6-.9L12 3.4Z"/></symbol>'
      + '<symbol id="ic-medal" viewBox="0 0 24 24"><path d="M8.8 3.6 11 8.8M15.2 3.6 13 8.8"/><circle cx="12" cy="14.8" r="5.8"/><circle cx="12" cy="14.8" r="1.9"/></symbol>'
      + '<symbol id="ic-route" viewBox="0 0 24 24"><path d="M6.2 18.6c3.2-1 2-4.2-.4-5.4-3-1.6-2.2-5.8 1.6-6.6 3-.6 6.6.6 9.4-1.4"/><circle cx="4.4" cy="19.8" r="1.9"/><circle cx="19.6" cy="4.4" r="1.9"/></symbol>'
      + '<symbol id="ic-arrow-right" viewBox="0 0 24 24"><path d="M4.5 12h14"/><path d="m13.5 6.2 5.8 5.8-5.8 5.8"/></symbol>'
      + '<symbol id="ic-arrow-left" viewBox="0 0 24 24"><path d="M19.5 12h-14"/><path d="m10.5 6.2-5.8 5.8 5.8 5.8"/></symbol>'
      + '<symbol id="ic-arrow-down" viewBox="0 0 24 24"><path d="M12 4.5v14"/><path d="m6.2 13.5 5.8 5.8 5.8-5.8"/></symbol>'
      + '<symbol id="ic-dots" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.7" fill="currentColor" stroke="none"/></symbol>'
      + '<symbol id="ic-users-plus" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><circle cx="16.6" cy="7.6" r="2.2"/><path d="M17.2 11.6v6M14.2 14.6h6"/></symbol>'
      + '<symbol id="ic-shield-check" viewBox="0 0 24 24"><path d="M12 2.8 5 5.5v5.6c0 4.4 3 7.7 7 9.5 4-1.8 7-5.1 7-9.5V5.5l-7-2.7Z"/><path d="m9 12.2 2.3 2.3 4.4-5"/></symbol>'
      + '<symbol id="ic-check" viewBox="0 0 24 24"><path d="m5 13 4 4L19 7"/></symbol>'
      + '<symbol id="ic-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.8"/><path d="M12 6.8V12l3.6 2.2"/></symbol>'
      + '<symbol id="ic-chart" viewBox="0 0 24 24"><path d="M4.5 19.5h15"/><path d="M7.8 16.5V11M12 16.5V6.5M16.2 16.5v-3.6"/></symbol>'
      + '<symbol id="ic-spark" viewBox="0 0 24 24"><path d="M11 3.2c1 4.7 2.6 6.3 7.3 7.3-4.7 1-6.3 2.6-7.3 7.3-1-4.7-2.6-6.3-7.3-7.3 4.7-1 6.3-2.6 7.3-7.3Z"/><path d="M18.8 15.2c.4 1.8 1 2.4 2.8 2.8-1.8.4-2.4 1-2.8 2.8-.4-1.8-1-2.4-2.8-2.8 1.8-.4 2.4-1 2.8-2.8Z"/></symbol>'
      + '<symbol id="ic-cheer" viewBox="0 0 24 24"><path d="M3.8 20.4 7.4 9.8l6.8 6.8-10.4 3.8Z"/><path d="m6.4 15.6 4.4 2.8"/><circle cx="17.2" cy="6.4" r="1"/><circle cx="20.8" cy="10.4" r=".9"/><path d="M14.6 3.2v2.6M19.6 2.6l-1.4 2.2M21.6 6.6l-2.4.8"/></symbol>'
      + '<symbol id="ic-flag" viewBox="0 0 24 24"><path d="M5 21V4"/><path d="M5 4.8h14.6v8H5Z"/></symbol>'
      + '<symbol id="ic-logout" viewBox="0 0 24 24"><path d="M9.5 4.5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h3.5"/><path d="m15.5 8.5 3.5 3.5-3.5 3.5"/><path d="M19 12H9.5"/></symbol>'
      /* ── sticker art symbols — playful duotone, no text ── */
      + '<symbol id="stk-kicks" viewBox="0 0 24 24"><path d="M4.6 16.4c.3-3.4 1.4-5.5 3.4-7l1.8-1.3c.6-.4 1.2-.3 1.8.1 1.4.9 3 1.4 4.7 1.6 1.7.2 2.8 1.3 3.1 3l.4 2.1c.1 1-.7 1.9-1.7 1.9H6.3c-1 0-1.8-.9-1.7-1.9l-.3.5Z" fill="rgba(245,158,11,.4)"/><path d="M4.6 18.8h14.9"/><path d="m8.8 12.8 3 2.6"/><path d="M5.9 16.9h6.3" stroke="#A3E635"/></symbol>'
      + '<symbol id="stk-flameface" viewBox="0 0 24 24"><path d="M12 3c.7 3-1.2 4.4-2.4 6A6.4 6.4 0 0 0 7.8 14.4a4.6 4.6 0 0 0 9.2 0c0-1.9-.8-3.4-1.8-4.6-.4 1.2-1.1 1.8-1.8 2 .8-2.9.3-6-1.4-8.8Z"/><circle cx="10.2" cy="13.4" r=".85" fill="currentColor" stroke="none"/><circle cx="13.8" cy="13.4" r=".85" fill="currentColor" stroke="none"/><path d="M10.4 15.8c.5.7 1 1 1.6 1s1.1-.3 1.6-1"/><circle cx="8.2" cy="14.6" r=".9" fill="rgba(163,230,53,.8)" stroke="none"/><circle cx="15.8" cy="14.6" r=".9" fill="rgba(163,230,53,.8)" stroke="none"/></symbol>'
      + '<symbol id="stk-bolt2" viewBox="0 0 24 24"><path d="M13.2 2.2 5.2 13h4.6L8.4 21.6 18.8 10.4h-4.9l-.7-8.2Z" fill="rgba(163,230,53,.45)"/><path d="M19.8 13.8l-3.2 4.5h1.9l-.9 3.1 3.3-4.4h-2l.9-3.2Z" fill="rgba(163,230,53,.85)" stroke="none"/></symbol>'
      + '<symbol id="stk-starburst" viewBox="0 0 24 24"><path d="M12 6.4 13.7 10l4 .5-3 2.7.9 3.9L12 14.9l-3.6 2.2.9-3.9-3-2.7 4-.5L12 6.4Z" fill="rgba(163,230,53,.5)"/><path d="M12 2.2v2.4M12 19.4v2.4M2.2 12h2.4M19.4 12h2.4M5.2 5.2 6.9 6.9M17.1 17.1l1.7 1.7M18.8 5.2 17.1 6.9M6.9 17.1l-1.7 1.7"/></symbol>'
      + '<symbol id="stk-medal2" viewBox="0 0 24 24"><path d="M8.5 3.2 10.6 8M15.5 3.2 13.4 8"/><circle cx="12" cy="14" r="6.2" fill="rgba(245,158,11,.4)"/><path d="m12 10.4 1.2 2.4 2.6.4-1.9 1.9.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.9 2.6-.4L12 10.4Z"/></symbol>'
      + '<symbol id="stk-rocket" viewBox="0 0 24 24"><path d="M12 2.6c3.1 2.3 4.6 5.5 4.6 9v2.6l-2 2.2H9.4l-2-2.2v-2.6c0-3.5 1.5-6.7 4.6-9Z" fill="rgba(163,230,53,.3)"/><circle cx="12" cy="10.4" r="2"/><path d="M7.4 13.4 5 16.6l3 .8M16.6 13.4 19 16.6l-3 .8"/><path d="M10.6 19.9c.5 1 .9 1.5 1.4 2.1.5-.6.9-1.1 1.4-2.1" stroke="#A3E635"/></symbol>'
      + '<symbol id="stk-crown" viewBox="0 0 24 24"><path d="M4.3 6.4 8 9.6 12 4l4 5.6 3.7-3.2-1.3 10H5.6L4.3 6.4Z" fill="rgba(245,158,11,.45)"/><path d="M6 18.9h12"/><circle cx="12" cy="12.4" r=".9" fill="currentColor" stroke="none"/></symbol>'
      + '<symbol id="stk-lion" viewBox="0 0 24 24"><circle cx="12" cy="12.8" r="8.3" fill="none" stroke="#A3E635" stroke-dasharray="1.6 2.4"/><circle cx="12" cy="12.8" r="6" fill="rgba(245,158,11,.35)"/><circle cx="10" cy="11.6" r=".9" fill="currentColor" stroke="none"/><circle cx="14" cy="11.6" r=".9" fill="currentColor" stroke="none"/><path d="M10.9 13.8h2.2L12 15.1Z" fill="currentColor" stroke="none"/><path d="M12 15.1v1.2"/><path d="M9.8 16.6c.8 1.1 1.7 1.6 2.2 1.6s1.4-.5 2.2-1.6"/></symbol>'
      + '<symbol id="stk-cap" viewBox="0 0 24 24"><path d="M5 15.2a7 7 0 0 1 14 0Z" fill="rgba(163,230,53,.4)"/><path d="M3.4 15.6h17.2c-.9 2.4-4.6 3.9-8.6 3.9s-7.7-1.5-8.6-3.9Z" fill="rgba(163,230,53,.18)"/><circle cx="12" cy="8.7" r=".8" fill="currentColor" stroke="none"/><path d="M12 9.6v5.4"/></symbol>'
      + '<symbol id="stk-visor" viewBox="0 0 24 24"><path d="M4.2 13.4a7.8 7.8 0 0 1 15.6 0"/><path d="M2.8 13.6h18.4c-.9 3.2-4.8 5.2-9.2 5.2S3.7 16.8 2.8 13.6Z" fill="rgba(163,230,53,.35)"/><path d="M12 6.8v6.8"/></symbol>'
      + '<symbol id="stk-helmet" viewBox="0 0 24 24"><path d="M3.6 14.6a8.4 8.4 0 0 1 16.8 0Z" fill="rgba(163,230,53,.25)"/><path d="M3.4 15.8h17.2"/><path d="M8.6 12.4 9.8 9.6M12 11.8V8.6M15.4 12.4l-1.2-2.8"/><path d="m6.4 16.4 1.2 3.4M17.6 16.4l-1.2 3.4"/><circle cx="12" cy="20.6" r="1.1" fill="rgba(163,230,53,.8)" stroke="none"/></symbol>'
      + '<symbol id="stk-sunhat" viewBox="0 0 24 24"><path d="M8 13.6c0-3.7 1.8-6.4 4-6.4s4 2.7 4 6.4"/><path d="M8.2 11.2c2.4.9 5.2.9 7.6 0"/><path d="M3.2 15c1.7-1.3 4.9-2 8.8-2s7.1.7 8.8 2c-1.9 2.8-5.1 4.2-8.8 4.2s-6.9-1.4-8.8-4.2Z" fill="rgba(245,158,11,.35)"/></symbol>'
      + '<symbol id="stk-palette" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.6" fill="rgba(163,230,53,.2)"/><circle cx="15.6" cy="15.4" r="2.1"/><circle cx="8.6" cy="8.8" r="1.1" fill="#A3E635" stroke="none"/><circle cx="12.6" cy="6.8" r="1.1" fill="rgba(245,158,11,.9)" stroke="none"/><circle cx="16.4" cy="9.2" r="1.1" fill="rgba(15,23,42,.6)" stroke="none"/><circle cx="7.4" cy="13" r="1.1" fill="rgba(163,230,53,.5)" stroke="none"/></symbol>'
      + '<symbol id="stk-dust" viewBox="0 0 24 24"><path d="M8.2 4.2c.5 2.3 1.3 3.1 3.6 3.6-2.3.5-3.1 1.3-3.6 3.6-.5-2.3-1.3-3.1-3.6-3.6 2.3-.5 3.1-1.3 3.6-3.6Z" fill="rgba(245,158,11,.5)"/><path d="M16.6 12.6c.4 1.7 1 2.3 2.7 2.7-1.7.4-2.3 1-2.7 2.7-.4-1.7-1-2.3-2.7-2.7 1.7-.4 2.3-1 2.7-2.7Z" fill="rgba(245,158,11,.8)" stroke="none"/><circle cx="14.8" cy="6.4" r=".9" fill="rgba(245,158,11,.85)" stroke="none"/><circle cx="5.4" cy="16.4" r=".9" fill="rgba(245,158,11,.85)" stroke="none"/><circle cx="10.4" cy="19.4" r=".8" fill="rgba(15,23,42,.55)" stroke="none"/></symbol>'
      + '<symbol id="stk-coins" viewBox="0 0 24 24"><path d="M5.6 13.4v3.4c0 1.4 2.9 2.6 6.4 2.6s6.4-1.2 6.4-2.6v-3.4"/><path d="M5.6 10v3.4c0 1.4 2.9 2.6 6.4 2.6s6.4-1.2 6.4-2.6V10"/><ellipse cx="12" cy="6.6" rx="6.4" ry="2.6" fill="rgba(245,158,11,.4)"/></symbol>'
      + '</svg>';
      return _ICONS;
    }
  'use strict';

  (function injectIcons() {
    if (document.getElementById('ss-icons')) return;
    var _w = document.createElement('div');
    _w.innerHTML = SPRITE_HTML();
    (document.body || document.documentElement).appendChild(_w.firstChild);
  })();

  /* ══ migration · shared-DOM stub layer ═══════════════════════════════
     Pages ship only their own screens + overlays; the shared runtime still
     wires every handler. Missing elements resolve to detached stubs inside a
     hidden root so addEventListener/classList/textContent all remain safe. */
  var _STUBS = document.createElement('div');
  _STUBS.id = 'stub-root';
  _STUBS.setAttribute('aria-hidden', 'true');
  _STUBS.setAttribute('hidden', '');
  _STUBS.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;';
  document.documentElement.appendChild(_STUBS);
  var _stubCache = {};
  function _mkStub(tag, selText) {
    var key = tag + '|' + selText;
    if (_stubCache[key]) return _stubCache[key];
    var s = document.createElement(tag);
    s.setAttribute('data-stub', '1');
    if (/^#([\w-]+)/.test(selText)) s.id = RegExp.$1;
    s.value = '';
    s.disabled = false;
    /* stubs self-resolve .closest() so boot-time chains like
       getElementById(...).closest('.field').querySelectorAll(...) stay safe */
    s.closest = function () { return s; };
    _STUBS.appendChild(s);
    _stubCache[key] = s;
    return s;
  }
  (function () {
    var _get = document.getElementById.bind(document);
    var _qs  = document.querySelector.bind(document);
    document.getElementById = function (id) {
      return _get(id) || _mkStub('div', '#' + id);
    };
    document.querySelector = function (sel) {
      var el = _qs(sel);
      if (el) return el;
      if (sel.charAt(0) === '#') return _mkStub('div', sel);
      return null;   /* class selectors legitimately absent on some pages */
    };
  })();

  /* ══ migration · cross-page router map ══ */
  var PAGE_OF = {
"scr-splash": "index.html",
"scr-today": "index.html",
"scr-signup": "signup.html",
"scr-login": "login.html",
"scr-forgot": "forgot.html",
"scr-reset": "reset.html",
"scr-verify": "verify.html",
"scr-onboarding": "onboarding.html",
"scr-choose": "choose.html",
"scr-goal": "goal.html",
"scr-groups": "groups.html",
"scr-group": "group.html",
"scr-create": "create.html",
"scr-leaderboard": "board.html",
"scr-chat": "chat.html",
"scr-chat-thread": "thread.html",
"scr-dm-thread": "thread.html",
"scr-user": "user.html",
"scr-buddies": "buddies.html",
"scr-wallet": "wallet.html",
"scr-achievements": "achievements.html",
"scr-notif": "notif.html",
"scr-nearby": "nearby.html",
"scr-profile": "profile.html",
"scr-avatar": "avatar.html",
"scr-settings": "settings.html",
"scr-settings-account": "settings-account.html",
"scr-edit-profile": "edit-profile.html",
"scr-linked-accounts": "linked-accounts.html",
"scr-change-password": "change-password.html",
"scr-settings-notifications": "settings-notifications.html",
"scr-settings-privacy": "settings-privacy.html",
"scr-privacy-policy": "privacy-policy.html",
"scr-terms": "terms.html",
"scr-blocklist": "blocklist.html",
"scr-settings-help": "settings-help.html",
"scr-settings-about": "settings-about.html",
"scr-account-deleted": "account-deleted.html",
"scr-stats": "stats.html"
};

  /* ── Screen registry ───────────────────────────────────────────────
     Built by iterating document.querySelectorAll and keying on el.id.
     Never Object.keys(nodeList) — that yields numeric strings and
     silently breaks navigation. */
  var SCREENS = {};
  document.querySelectorAll('.screen').forEach(function (el) {
    SCREENS[el.id] = el;
  });

  var phone   = document.querySelector('.phone');
  var tabs    = Array.prototype.slice.call(document.querySelectorAll('.tab'));

  var enterHooks = {};   // id -> fn, runs each time the screen becomes visible

  /* sub-screens keep their parent tab highlighted */
  var SCREEN_TAB = {
    'scr-group':       'scr-groups',
    'scr-create':      'scr-groups',
    'scr-chat-thread': 'scr-chat',
    'scr-dm-thread':   'scr-chat',
    'scr-achievements': 'scr-today', 'scr-notif': 'scr-today',
    'scr-wallet': 'scr-today', 'scr-nearby': 'scr-today',
    'scr-settings': 'scr-profile', 'scr-settings-account': 'scr-profile',
    'scr-stats': 'scr-today',
    'scr-edit-profile': 'scr-profile', 'scr-linked-accounts': 'scr-profile',
    'scr-avatar': 'scr-profile', 'scr-change-password': 'scr-profile', 'scr-settings-notifications': 'scr-profile',
    'scr-settings-privacy': 'scr-profile', 'scr-privacy-policy': 'scr-profile',
    'scr-terms': 'scr-profile', 'scr-blocklist': 'scr-profile',
    'scr-settings-help': 'scr-profile', 'scr-settings-about': 'scr-profile'
  };
  var NO_TABBAR = ['scr-splash', 'scr-onboarding', 'scr-choose', 'scr-goal',
    'scr-signup', 'scr-login', 'scr-forgot', 'scr-reset', 'scr-verify', 'scr-account-deleted'];

  function showScreen(id) {
    if (!SCREENS[id]) { routeTo(id); return; }
    // exactly one visible screen
    Object.keys(SCREENS).forEach(function (key) {
      SCREENS[key].classList.toggle('is-visible', key === id);
    });
    var activeTab = SCREEN_TAB[id] || id;
    tabs.forEach(function (t) { t.classList.toggle('active', t.dataset.tab === activeTab); });
    phone.classList.toggle('no-tabbar', NO_TABBAR.indexOf(id) !== -1);
    if (enterHooks[id]) enterHooks[id]();
  }

  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () { showScreen(btn.dataset.tab); });
  });

  /* delegated [data-goto] — works for static markup and anything rendered later */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-goto]');
    if (btn) showScreen(btn.dataset.goto);
  });

  function escapeHtml(s) {
    var d = document.createElement('div'); d.appendChild(document.createTextNode(s)); return d.innerHTML;
  }

  /* icon plumbing · {{ic:name}}/{{stk:name}} tokens carry icons through escaped text */
  function ic(n) { return '<svg class="ico" aria-hidden="true"><use href="#ic-' + n + '"></use></svg>'; }
  function safeHTML(s) {
    return escapeHtml(s).replace(/\{\{(ic|stk):([a-z0-9-]+)\}\}/g, function (m, t, n) {
      return '<svg class="ico" aria-hidden="true"><use href="#' + t + '-' + n + '"></use></svg>';
    });
  }
  function icSvgField(v) {
    var m = /^\{\{(ic|stk):([a-z0-9-]+)\}\}$/.exec(String(v));
    return m ? '<svg class="ico" aria-hidden="true"><use href="#' + m[1] + '-' + m[2] + '"></use></svg>' : escapeHtml(String(v));
  }
  function icPlain(s) { return String(s).replace(/\{\{(ic|stk):[a-z0-9-]+\}\}/g, 'Sole'); }

  /* ── toast ────────────────────────────────────────────────────────── */
  var toastEl = document.getElementById('toast');
  var toastTimer = null;
  function toast(msg) {
    toastEl.innerHTML = safeHTML(msg);
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }

  /* ── reduce-motion flag ───────────────────────────────────────────── */
  var reduceMotion = false;

  /* ── 1 · onboarding flow ──────────────────────────────────────────── */
  document.getElementById('btn-get-started').addEventListener('click', function () {
    if (!S.signedUp) { var r = gateResume(); showScreen(r); return; }   /* FIX · resume furthest step, never blind-bounce to signup */
    document.getElementById('onb-intro').hidden = true;
    document.getElementById('onb-connect').hidden = false;
  });
  document.getElementById('btn-allow-health').addEventListener('click', function () {
    S.healthDone = true; saveNow();              // v7 · feeds the progress rail · FIX · persist before toast/nav
    toast('Health connected');
    showScreen('scr-choose');   // v6 · goal fork replaces the jump straight to Today
  });
  document.getElementById('btn-skip-health').addEventListener('click', function () {
    showScreen('scr-today');
  });

  /* ── 2 · Today: count-up + self-drawing goal SPIRAL (v10) ─────────── */
  var GOAL = 9000, STEPS = 7842;
  var stepEl  = document.getElementById('step-count');
  var progEl  = document.getElementById('ring-prog');
  var overEl  = document.getElementById('ring-over');
  var capEl   = document.getElementById('ring-caption');
  var animToken = 0;

  /* Spiral = 2 turns · pathLength 100 · loop-1 occupies [0,50), loop-2 [50,100).
     prog reveals [0, min(F,50)): dash '50 150', offset 50-L1 → dash window [0,L1).
     over reveals the excess [50, 50+L2): dash 'L2 (200-L2)', offset -50. */
  function setRing(frac) {
    var F = Math.max(0, Math.min(2, frac)) / 2 * 100;
    var L1 = Math.min(F, 50);
    progEl.style.strokeDasharray = '50 150';
    progEl.style.strokeDashoffset = String(50 - L1);
    var L2 = Math.max(0, F - 50);
    if (L2 <= 0.2) { overEl.style.visibility = 'hidden'; overEl.style.strokeDasharray = '0 200'; }
    else { overEl.style.visibility = 'visible'; overEl.style.strokeDasharray = L2 + ' ' + (200 - L2); }
    overEl.style.strokeDashoffset = '-50';
  }

  function animateToday() {
    var token = ++animToken;
    var target = STEPS / GOAL;
    if (reduceMotion) {
      setRing(target);
      stepEl.textContent = STEPS.toLocaleString('en-US');
      return;
    }
    setRing(0);
    stepEl.textContent = '0';
    void progEl.getBoundingClientRect();     // replay the draw from empty
    var t0 = performance.now(), dur = 1400;
    function tick(t) {
      if (token !== animToken) return;      // a newer entry took over
      var p = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);       // ease-out cubic
      setRing(target * e);
      stepEl.textContent = Math.round(STEPS * e).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  enterHooks['scr-today'] = animateToday;

  // weekly sparkline (mock, filled bars)
  var sparkData = [
    { d: 'M', s: 8120 }, { d: 'T', s: 9540 }, { d: 'W', s: 7010 },
    { d: 'T', s: 8860 }, { d: 'F', s: 10210 }, { d: 'S', s: 6450 }, { d: 'S', s: STEPS }
  ];
  var sparkMax = 11000;
  var sparkEl = document.getElementById('week-spark');
  sparkData.forEach(function (w, i) {
    var col = document.createElement('div');
    col.className = 'spark__col' + (i === 6 ? ' spark__col--today' : '');
    var bar = document.createElement('div');
    bar.className = 'spark__bar';
    bar.style.height = Math.round(74 * w.s / sparkMax) + 'px';
    var lbl = document.createElement('span');
    lbl.className = 'spark__lbl';
    lbl.textContent = w.d;
    col.appendChild(bar); col.appendChild(lbl);
    sparkEl.appendChild(col);
  });

  /* ── v5 data model: the user's groups ─────────────────────────────
     d = steps today, w = steps this week. You ("YO") sits in all three
     at a different rank in each. Created groups append to this array. */
  function you() { return { i: 'YO', n: 'You', d: 7842, w: 51972, v: 'slate', you: true }; }

  var GROUPS = [
    { id: 'sunrise', name: 'Sunrise Steppers', code: 'SQUAD10', cap: 10,
      owner: true, up: ['ev-park', 'ev-detour', 'ev-100k'], past: ['ev-fri', 'ev-mon'],
      trend: [62400, 71800, 68100, 75300, 79200, 58800, 76779],
      members: [
        { i: 'MK', n: 'Maya K.',  d: 9120, w: 60934, v: 'lime'  },
        { i: 'PT', n: 'Priya T.', d: 8902, w: 62118, v: ''      },
        { i: 'JO', n: 'Jonas O.', d: 8744, w: 56184, v: 'slate' },
        { i: 'TB', n: 'Tara B.',  d: 8310, w: 58320, v: 'lime'  },
        { i: 'BW', n: 'Ben W.',   d: 7961, w: 50441, v: ''      },
        you(),
        { i: 'LN', n: 'Lena N.',  d: 7420, w: 47600, v: 'lime'  },
        { i: 'CH', n: 'Chris H.', d: 6890, w: 44218, v: ''      },
        { i: 'DK', n: 'Dana K.',  d: 6102, w: 41055, v: 'slate' },
        { i: 'SM', n: 'Sam M.',   d: 5488, w: 38264, v: ''      }
      ] },
    { id: 'office', name: 'Office Steps Challenge', code: 'OFFICE8', cap: 10,
      trend: [41200, 44800, 43100, 47600, 49900, 30400, 49222],
      members: [
        { i: 'NP', n: 'Nina P.',  d: 8120, w: 53400, v: 'lime'  },
        you(),
        { i: 'OM', n: 'Owen M.',  d: 6850, w: 44930, v: ''      },
        { i: 'DK', n: 'Dana K.',  d: 6410, w: 41875, v: 'slate' },
        { i: 'CH', n: 'Chris H.', d: 5980, w: 39204, v: ''      },
        { i: 'LD', n: 'Leo D.',   d: 5240, w: 36612, v: 'lime'  },
        { i: 'MS', n: 'Marta S.', d: 4870, w: 33450, v: ''      },
        { i: 'TO', n: 'Theo B.',  d: 3910, w: 28740, v: 'slate' }
      ] },
    { id: 'duo', name: 'Just Us Two', code: 'DUO22', cap: 2,
      trend: [13900, 15100, 14600, 16200, 15800, 14100, 15147],
      members: [
        you(),
        { i: 'NP', n: 'Nina P.', d: 7305, w: 48210, v: 'lime' }
      ] }
  ];

  function groupById(id) {
    for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].id === id) return GROUPS[i];
    return null;
  }
  function roster(g, key) {
    return g.members.slice().sort(function (a, b) { return b[key] - a[key]; });
  }
  function teamStepsToday(g) {
    return g.members.reduce(function (sum, m) { return sum + m.d; }, 0);
  }
  function yourRank(g, key) {
    var r = roster(g, key);
    for (var i = 0; i < r.length; i++) if (r[i].you) return i + 1;
    return r.length;
  }

  /* tiny weekly-trend sparkline */
  function sparkSvg(trend, w, h) {
    var min = Math.min.apply(null, trend), max = Math.max.apply(null, trend);
    var span = (max - min) || 1;
    var pts = trend.map(function (v, i) {
      var x = (i * w / (trend.length - 1)).toFixed(1);
      var y = (h - 3 - (v - min) / span * (h - 6)).toFixed(1);
      return x + ',' + y;
    });
    return '<svg class="spark-mini" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h +
      '" fill="none" aria-hidden="true"><polyline points="' + pts.join(' ') +
      '" stroke="var(--primary-ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>';

  /* ── 3 · My Groups: card list → group detail ──────────────────────── */
  var groupsListEl = document.getElementById('groups-list');
  var mgSubEl = document.getElementById('mg-sub');

  function avatarStack(g) {
    var shown = Math.min(5, g.members.length);
    var html = '<span class="av-stack" aria-hidden="true">';
    roster(g, 'd').slice(0, shown).forEach(function (m) {
      html += '<span class="avatar' + (m.v ? ' avatar--' + m.v : '') + '">' + escapeHtml(m.i) + '</span>';
    });
    if (g.members.length > shown) html += '<span class="av-more">+' + (g.members.length - shown) + '</span>';
    html += '</span>';
    return html;
  }

  function renderGroups() {
    groupsListEl.innerHTML = '';
    GROUPS.forEach(function (g) {
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'gcard';
      card.setAttribute('data-gid', g.id);
      card.setAttribute('data-od-id', 'group-card-' + g.id);
      card.setAttribute('aria-label', 'Open ' + g.name);
      card.innerHTML =
        '<span class="gcard__row1"><span class="gcard__name">' + escapeHtml(g.name) + '</span>' +
        '<span class="rank-chip">#' + yourRank(g, 'd') + ' of ' + g.members.length + '</span></span>' +
        '<span class="gcard__row2"><span><span class="gcard__big num">' + teamStepsToday(g).toLocaleString('en-US') + '</span>' +
        '<span class="gcard__bigsub">team steps today</span></span>' + sparkSvg(g.trend, 84, 30) + '</span>' +
        '<span class="gcard__row3">' + avatarStack(g) +
        '<span class="gcard__occ">' + g.members.length + ' of ' + g.cap + ' members</span>' +
        '<span class="gcard__chev" aria-hidden="true">' + CHEV + '</span></span>';
      card.addEventListener('click', function () { openGroup(g.id); });
      groupsListEl.appendChild(card);
    });
    setGroupsView(gView);
  }

  var currentGroup = GROUPS[0];
  var curGroupTab = null;   /* FIX(qa) · tab requested via openGroup, carried into cross-page routeTo */

  function openGroup(id, tab) {
    var g = groupById(id);
    if (!g) return;
    currentGroup = g;
    var top = roster(g, 'd');
    document.getElementById('gd-name').textContent = g.name;
    document.getElementById('gd-sub').textContent =
      g.members.length + ' of ' + g.cap + ' members' +
      (g.privacy === 'private' ? ' \u00b7 Private' : (g.privacy === 'open' ? ' \u00b7 Open' : ''));

    // podium: top 3 by today's steps (#1 centred, blanks keep the grid)
    var podEl = document.getElementById('gd-podium');
    podEl.innerHTML = '';
    var order = [2, 1, 3]; // left→right: silver, gold, bronze
    order.forEach(function (place) {
      var m = top[place - 1];
      if (!m) { podEl.insertAdjacentHTML('beforeend', '<span aria-hidden="true"></span>'); return; }
      var pod = document.createElement('div');
      pod.className = 'pod pod--' + place;
      pod.innerHTML =
        '<span class="pod__badge">' + place + '</span>' +
        '<div class="pod__plinth"><div class="avatar' + (m.v ? ' avatar--' + m.v : '') + '" aria-hidden="true">' + escapeHtml(m.i) + '</div>' +
        '<span class="pod__name">' + escapeHtml(m.n) + '</span>' +
        '<span class="pod__steps num">' + m.d.toLocaleString('en-US') + '</span></div>';
      podEl.appendChild(pod);
    });

    // full ranking rows with progress bars vs the leader
    var listEl = document.getElementById('gd-members');
    listEl.innerHTML = '';
    var maxSteps = top[0] ? top[0].d : 1;
    top.forEach(function (m, idx) {
      var row = document.createElement('div');
      row.className = 'member' + (m.you ? ' member--you' : '');
      row.innerHTML =
        '<span class="member__rank num">' + (idx + 1) + '</span>' +
        '<span class="avatar' + (m.v ? ' avatar--' + m.v : '') + '" aria-hidden="true">' + escapeHtml(m.i) + '</span>' +
        '<span class="member__body"><span class="member__name">' + escapeHtml(m.n) + '</span>' +
        '<span class="member__steps num">' + m.d.toLocaleString('en-US') + ' steps</span>' +
        '<span class="meter"><span class="meter__fill" style="width:' + Math.round(m.d / maxSteps * 100) + '%"></span></span></span>';
      listEl.appendChild(row);
    });

    renderStats(g);
    renderEvents(g);
    setGdTab(tab || 'ranking');
    curGroupTab = tab || null;
    showScreen('scr-group');
  }

  /* invite share-sheet (per current group) */
  var scrim = document.getElementById('scrim');
  function openSheet(sheet) { scrim.classList.add('open'); sheet.classList.add('open'); }
  function closeSheets() {
    scrim.classList.remove('open');
    document.querySelectorAll('.sheet.open').forEach(function (s) { s.classList.remove('open'); });
  }
  scrim.addEventListener('click', closeSheets);          // tap-outside dismisses

  document.getElementById('btn-invite').addEventListener('click', function () {
    openInviteSheet(currentGroup);
  });

  document.getElementById('btn-copy-link').addEventListener('click', function () {
    var link = document.getElementById('invite-link').textContent.trim();
    function done() { toast('Link copied'); closeSheets(); }
    function fail() { toast('Copy failed — select the link to copy it'); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(done).catch(function () { legacyCopy(link) ? done() : fail(); });
    } else { legacyCopy(link) ? done() : fail(); }
  });
  function legacyCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }

  /* ── 4 · Leaderboards (v8-g2): sticky You card, infinite global board,
     filters sheet + live search; My Group lists the whole squad ── */
  var LB = {
    'daily-global': [
      { n: 'Aisha R.', s: 21340, i: 'AR', v: 'lime' }, { n: 'Tomás L.', s: 19877, i: 'TL' },
      { n: 'Kenji S.', s: 18264, i: 'KS', v: 'slate' }, { n: 'Nadia F.', s: 17530, i: 'NF' },
      { n: 'Owen M.',  s: 16882, i: 'OM', v: 'lime' }, { n: 'Ines B.', s: 15974, i: 'IB', v: 'slate' },
      { n: 'Priya T.', s: 8902, i: 'PT' }, { n: 'Maya K.', s: 9120, i: 'MK', v: 'lime' },
      { n: 'You', s: 7842, i: 'YO', v: 'slate', you: true }
    ],
    'weekly-global': [
      { n: 'Kenji S.',   s: 132480, i: 'KS', v: 'slate' }, { n: 'Aisha R.', s: 128310, i: 'AR', v: 'lime' },
      { n: 'Marisol V.', s: 121904, i: 'MV' }, { n: 'Tomás L.', s: 119668, i: 'TL', v: 'lime' },
      { n: 'Ines B.',    s: 110286, i: 'IB', v: 'slate' }, { n: 'Owen M.', s: 104552, i: 'OM' },
      { n: 'Priya T.',   s: 62118, i: 'PT' }, { n: 'Maya K.', s: 60934, i: 'MK', v: 'lime' },
      { n: 'You', s: 51972, i: 'YO', v: 'slate', you: true }
    ]
  };
  // keep sorted desc so the "You" rows sit at true ranks
  Object.keys(LB).forEach(function (k) {
    LB[k].sort(function (a, b) { return b.s - a.s; });
  });

  var lbRange = 'daily', lbScope = 'mygroup', lbGroup = 'sunrise';
  var lbRegion = 'global', lbQuery = '';
  var LB_CAP = 200, LB_BATCH = 24;
  var lbListEl  = document.getElementById('lb-list');
  var lbSubEl   = document.getElementById('lb-sub');
  var lbChipsEl = document.getElementById('lb-gchips');
  var lbSkelEl  = document.getElementById('lb-skel');
  var lbEndEl   = document.getElementById('lb-end');
  var lbEmptyEl = document.getElementById('lb-empty');
  var lbYouEl   = document.getElementById('lb-you-card');
  var lbScroller = document.getElementById('scr-leaderboard');
  var lbSeries = [], lbShown = 0, lbLoading = false, lbMax = 1, lbAvg = 0;

  /* seeded mock rows — stable while you scroll, plausibly descending */
  function lbSeed(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function mulberry32(a) { return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  var LB_NAMES = ['Kwame A.', 'Amara O.', 'Lucía M.', 'Sven E.', 'Yuki T.', 'Farah H.', 'Diego R.', 'Anya P.', 'Li W.', 'Grace N.', 'Bakari S.', 'Elena D.', 'Noah W.', 'Zainab K.', 'Mateo F.', 'Ingrid L.', 'Tariq J.', 'Wei C.', 'Sofia B.', 'Jamal H.', 'Nadia S.', 'Peter O.', 'Chiara R.', 'Dmitri V.', 'Leila M.', 'Anders K.', 'Yara N.', 'Felix G.', 'Amina T.', 'Hugo L.', 'Saanvi R.', 'Kwesi M.', 'Isla F.', 'Otto B.', 'Reza A.', 'Chloe D.', 'Mwangi K.', 'Freya J.', 'Tomas S.', 'Adaeze O.', 'Ravi P.', 'Selma I.', 'Jonas W.', 'Nia B.', 'Emeka C.', 'Alina V.', 'Sami H.', 'Greta M.', 'Kojo A.', 'Lin Z.', 'Marta K.', 'Idris O.', 'Petra N.', 'Kiplagat R.', 'Ingrid S.', 'Omar E.', 'Vera T.', 'Kai M.', 'Lucas F.', 'Ayesha J.', 'Bjorn H.', 'Naomi W.', 'Hassan A.', 'Camila R.'];  /* v8-g6 · 64 distinct pool — no seed names, no repeats in the first 40 rows */
  var LB_VS = ['lime', '', 'slate', ''];
  function initialsOf(n) { var t = n.replace(/\./g, ' ').trim().split(/\s+/); return (t[0][0] + (t[1] || t[0][1] || 'W')[0]).toUpperCase(); }
  var lbBaseCache = {};
  function lbBaseSeries(range) {
    if (lbBaseCache[range]) return lbBaseCache[range];
    var rows = LB[range + '-global'].filter(function (r) { return !r.you; }).slice(0, 6)
      .map(function (r) { return { n: r.n, i: r.i, v: r.v, s: r.s }; });
    var rnd = mulberry32(lbSeed('g2|' + range));
    var daily = range === 'daily';
    var cur = rows[rows.length - 1].s;
    for (var i = rows.length; i < LB_CAP; i++) {
      cur -= daily ? Math.round(18 + rnd() * 46 + i * 0.16) : Math.round(140 + rnd() * 330 + i * 1.15);
      var name = LB_NAMES[(i - 6) % LB_NAMES.length];   /* v8-g6 · seed-excluded pool, first 40 rows all distinct */
      rows.push({ n: name, i: initialsOf(name), v: LB_VS[i % LB_VS.length], s: cur });
    }
    rows.avg = Math.round(rows.reduce(function (s, r) { return s + r.s; }, 0) / rows.length);
    lbBaseCache[range] = rows;
    return rows;
  }
  var LB_REGION_F = { 'global': 1, 'nairobi': 0.58, 'kisumu': 0.41 };
  function lbGlobalRows(range, region) {
    var base = lbBaseSeries(range);
    var f = LB_REGION_F[region] || 1;
    if (f === 1) return base;
    var out = base.map(function (r) { return { n: r.n, i: r.i, v: r.v, s: Math.round(r.s * f) }; });
    out.avg = Math.round(base.avg * f);
    return out;
  }

  function renderGroupChips() {
    lbChipsEl.innerHTML = '';
    GROUPS.forEach(function (g) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = g.name;
      b.className = (g.id === lbGroup) ? 'active' : '';
      b.setAttribute('data-od-id', 'leaderboard-group-chip-' + g.id);
      b.addEventListener('click', function () {
        lbGroup = g.id;
        renderGroupChips();
        renderLeaderboard();
      });
      lbChipsEl.appendChild(b);
    });
  }

  function lbMakeRow(row, rank, interactive) {
    var el = document.createElement('div');
    el.className = 'lb-row' + (row.you ? ' lb-row--you' : '') + (interactive ? ' lb-row--tap' : '');
    el.setAttribute('data-od-id', 'leaderboard-row-' + lbRange + '-' + lbScope + '-' + rank);
    var above = row.s >= lbAvg;
    el.innerHTML =
      '<span class="member__rank num">' + rank + '</span>' +
      '<span class="avatar' + (row.v ? ' avatar--' + row.v : '') + '" aria-hidden="true">' + escapeHtml(row.i) + '</span>' +
      '<span class="member__body"><span class="member__name">' + escapeHtml(row.n) +
      (row.you ? ' <span class="chip chip--rec" aria-hidden="true">YOU</span>' : '') +
      '</span><span class="meter"><span class="meter__fill" style="width:' + Math.round(row.s / lbMax * 100) + '%"></span></span></span>' +
      '<span class="lb-delta' + (above ? '' : ' lb-delta--neg') + '"><b>' + (above ? '+' : '\u2212') + Math.abs(row.s - lbAvg).toLocaleString('en-US') + '</b><small>vs avg</small></span>';
    if (interactive) {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', 'View ' + row.n + '\'s profile');
      el.addEventListener('click', function () { openUserProfile(row, rank - 1); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openUserProfile(row, rank - 1); }
      });
    }
    return el;
  }

  function lbAppendRange(rows, to) {
    var frag = document.createDocumentFragment();
    var stop = Math.min(to, rows.length);
    for (var i = lbShown; i < stop; i++) frag.appendChild(lbMakeRow(rows[i], i + 1, lbScope === 'global' && !rows[i].you));
    lbListEl.appendChild(frag);
    lbShown = stop;
  }
  function lbShowEnd(on) { lbEndEl.classList.toggle('u-hide', !on); }
  function lbLoadMore() {
    if (lbLoading || lbScope !== 'global' || lbQuery || lbShown >= lbSeries.length) return;
    lbLoading = true;
    var sk = '';
    for (var i = 0; i < 3; i++) sk += '<div class="lb-skel" aria-hidden="true"><span class="sk sk--av"></span><span class="sk sk--line"></span><span class="sk sk--chip"></span></div>';
    lbSkelEl.innerHTML = sk;
    lbSkelEl.hidden = false;
    setTimeout(function () {
      lbSkelEl.hidden = true; lbSkelEl.innerHTML = '';
      lbAppendRange(lbSeries, lbShown + LB_BATCH);
      lbLoading = false;
      if (lbShown >= lbSeries.length) lbShowEnd(true);
      else lbCheckScroll();
    }, reduceMotion ? 1 : 600);
  }
  function lbCheckScroll() {
    if (lbScope !== 'global' || lbQuery || lbShown >= lbSeries.length) return;
    if (lbScroller.scrollTop + lbScroller.clientHeight >= lbScroller.scrollHeight - 300) lbLoadMore();
  }
  lbScroller.addEventListener('scroll', lbCheckScroll);

  function lbYouCard(rows) {
    var uSteps = (lbRange === 'daily') ? 7842 : 51972;
    var rank = 0;
    if (lbScope === 'mygroup') {
      rows.forEach(function (r, i) { if (r.you) rank = i + 1; });
      if (!rank) rank = rows.length;
    } else {
      rank = 1;
      rows.forEach(function (r) { if (r.s > uSteps) rank++; });
    }
    var delta = uSteps - lbAvg, up = delta >= 0;
    document.getElementById('lby-rank').textContent = '#' + rank;
    document.getElementById('lby-total').textContent = 'of ' + rows.length;
    document.getElementById('lby-steps').textContent = uSteps.toLocaleString('en-US') + ' steps ' + (lbRange === 'daily' ? 'today' : 'this week');
    var dl = document.getElementById('lby-delta');
    dl.className = 'lb-delta' + (up ? '' : ' lb-delta--neg');
    dl.innerHTML = '<b>' + (up ? '+' : '\u2212') + Math.abs(delta).toLocaleString('en-US') + '</b><small>vs avg</small>';
    lbYouEl.setAttribute('aria-label', 'Your position: rank ' + rank + ', ' + uSteps.toLocaleString('en-US') + ' steps, ' + (up ? 'above' : 'below') + ' board average by ' + Math.abs(delta).toLocaleString('en-US'));
  }

  function renderLeaderboard() {
    var rows, subName;
    if (lbScope === 'mygroup') {
      var g = groupById(lbGroup) || GROUPS[0];
      var key = (lbRange === 'daily') ? 'd' : 'w';
      rows = roster(g, key).map(function (m) { return { n: m.n, s: m[key], i: m.i, v: m.v, you: !!m.you }; });
      subName = g.name;
    } else {
      rows = lbGlobalRows(lbRange, lbRegion);
      subName = lbRegion === 'nairobi' ? 'Nairobi walkers' : lbRegion === 'kisumu' ? 'Kisumu walkers' : 'global walkers';
    }
    lbSeries = rows;
    lbAvg = (rows.avg !== undefined) ? rows.avg : Math.round(rows.reduce(function (s, r) { return s + r.s; }, 0) / (rows.length || 1));
    lbMax = rows.length ? rows[0].s : 1;
    lbShown = 0; lbLoading = false;
    lbSkelEl.hidden = true; lbSkelEl.innerHTML = '';
    lbListEl.innerHTML = '';
    lbShowEnd(false);
    lbYouCard(rows);
    lbChipsEl.classList.toggle('u-hide', lbScope !== 'mygroup');

    var q = lbQuery.trim().toLowerCase();
    // v10 Gate T3 · mini strings stay <=16ch (range + compact scope) so they
    // never ellipsis-clip the appbar at 393px. Group name, region and query
    // live in the filter sheet / rows, not the mini.
    lbSubEl.textContent = (lbRange === 'daily' ? 'Daily' : 'Weekly') + ' · ' +
      (lbScope === 'global' ? 'Global' : 'Mine');
    if (q) {
      var matched = 0;
      rows.forEach(function (r, i) {
        if (r.n.toLowerCase().indexOf(q) !== -1) { lbListEl.appendChild(lbMakeRow(r, i + 1, lbScope === 'global' && !r.you)); matched++; }
      });
      lbShown = rows.length;
      lbEmptyEl.classList.toggle('u-hide', matched > 0);
    } else {
      lbEmptyEl.classList.add('u-hide');
      if (lbScope === 'mygroup') {
        lbAppendRange(rows, rows.length);
      } else {
        lbAppendRange(rows, LB_BATCH);
        if (lbShown >= rows.length) lbShowEnd(true); else lbCheckScroll();
      }
    }
    lbListEl.animate && lbListEl.animate(
      [{ opacity: 0.35, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }],
      { duration: reduceMotion ? 1 : 240, easing: 'ease-out' });
  }
  document.querySelectorAll('.seg [data-range]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      lbRange = btn.dataset.range;
      document.querySelectorAll('.seg [data-range]').forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });
      renderLeaderboard();
    });
  });
  document.querySelectorAll('.seg [data-scope]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      lbScope = btn.dataset.scope;
      document.querySelectorAll('.seg [data-scope]').forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });
      renderLeaderboard();
    });
  });
  document.getElementById('btn-lb-chat').addEventListener('click', function () {
    openChannel('global');
  });
  renderGroupChips();
  renderLeaderboard();

  /* v8-g2 · filters sheet — applied on Done */
  var lbFilterSheet = document.getElementById('lb-filter-sheet');
  function fsPaint() {
    document.querySelectorAll('#lb-filter-sheet .fs-opt').forEach(function (o) {
      var inp = o.querySelector('input');
      o.classList.toggle('is-on', !!(inp && inp.checked));
    });
  }
  function fsSync() {
    lbFilterSheet.querySelectorAll('input[type="radio"]').forEach(function (r) {
      r.checked = (r.name === 'fs-period' && r.value === lbRange) || (r.name === 'fs-scope' && r.value === lbScope);
    });
    document.getElementById('fs-region').value = lbRegion;
    fsPaint();
  }
  document.getElementById('btn-lb-filters').addEventListener('click', function () {
    fsSync();
    openSheet(lbFilterSheet);
  });
  document.getElementById('btn-filter-close').addEventListener('click', closeSheets);
  lbFilterSheet.addEventListener('change', function (e) {
    if (e.target && e.target.matches('.fs-opt input')) fsPaint();
  });
  document.getElementById('btn-filter-done').addEventListener('click', function () {
    var p = lbFilterSheet.querySelector('input[name="fs-period"]:checked');
    var s = lbFilterSheet.querySelector('input[name="fs-scope"]:checked');
    if (p) lbRange = p.value;
    if (s) lbScope = s.value;
    lbRegion = document.getElementById('fs-region').value;
    document.querySelectorAll('.seg [data-range]').forEach(function (b) { b.classList.toggle('active', b.dataset.range === lbRange); });
    document.querySelectorAll('.seg [data-scope]').forEach(function (b) { b.classList.toggle('active', b.dataset.scope === lbScope); });
    closeSheets();
    renderLeaderboard();
    toast('Filters applied');
  });

  /* v8-g2 · live search — inline field, filters rows by name as you type */
  var lbSearchBar = document.getElementById('lb-search-bar');
  var lbSearchInput = document.getElementById('lb-search-input');
  var lbSearchBtn = document.getElementById('btn-lb-search');
  function lbOpenSearch() {
    lbSearchBar.classList.remove('u-hide');
    lbSearchBtn.setAttribute('aria-expanded', 'true');
    lbSearchInput.focus();
  }
  function lbCloseSearch(clear) {
    if (clear && lbQuery) { lbQuery = ''; lbSearchInput.value = ''; renderLeaderboard(); }
    lbSearchBar.classList.add('u-hide');
    lbSearchBtn.setAttribute('aria-expanded', 'false');
  }
  lbSearchBtn.addEventListener('click', function () {
    if (lbSearchBar.classList.contains('u-hide')) lbOpenSearch(); else lbCloseSearch(true);
  });
  document.getElementById('lb-search-close').addEventListener('click', function () { lbCloseSearch(true); });
  lbSearchInput.addEventListener('input', function () { lbQuery = lbSearchInput.value; renderLeaderboard(); });
  document.addEventListener('mousedown', function (e) {
    if (!lbSearchBar.classList.contains('u-hide') && !e.target.closest('#lb-search-bar') && !e.target.closest('#btn-lb-search')) lbCloseSearch(true);
  });

  /* ── 5 · Chat hub + per-channel threads ───────────────────────────── */
  var CHAT = {
    sunrise: { msgs: [
      { mid: 's1', s: 'in',  i: 'MK', v: 'lime',  who: 'Maya',  t: '07:12', text: 'Morning loop done — 9,120 and walking.' },
      { mid: 's2', s: 'in',  i: 'PT', v: '',      who: 'Priya', t: '07:31', text: "Global board moved us to 12th overnight. Evening walk is mandatory." },
      { mid: 's3', s: 'out', i: 'YO', v: 'slate', who: 'You',   t: '08:02', text: "I'm at 7.8k with an hour to go — catch me if you can." },
      { mid: 's4', s: 'in',  i: 'JO', v: 'slate', who: 'Jonas', t: '08:15', text: 'Stadium lap at 6pm. Bring water.' }
    ] },
    office: { msgs: [
      { mid: 'o1', s: 'in',  i: 'NP', v: 'lime',  who: 'Nina', t: '07:40', text: 'Stand-up moved to a walking meeting — lobby at 3.' },
      { mid: 'o2', s: 'out', i: 'YO', v: 'slate', who: 'You',  t: '07:48', text: 'Taking the stairs to floor 6. Elevator is my enemy today.' },
      { mid: 'o3', s: 'in',  i: 'OM', v: 'slate', who: 'Owen', t: '07:52', text: 'Elevator challenge lost — 20 floors logged.' }
    ] },
    duo: { msgs: [
      { mid: 'd1', s: 'in',  i: 'NP', v: 'lime',  who: 'Nina', t: 'Mon', text: 'Deal: whoever is under 6k at lunch buys the coffee.' },
      { mid: 'd2', s: 'out', i: 'YO', v: 'slate', who: 'You',  t: 'Mon', text: "You're buying. 4,100 already by 11am." }
    ] },
    global: { msgs: [
      { sys: true },
      { mid: 'g1', s: 'in',  i: 'AR', v: 'lime',  who: 'Aisha', t: '06:58', text: "Kenji's 21k is humanly impossible." },
      { mid: 'g2', s: 'in',  i: 'KS', v: 'slate', who: 'Kenji', t: '07:05', text: 'Coast loop plus stairs. Come join the Global 10k club.' },
      { mid: 'gp1', s: 'in', i: 'KS', v: 'slate', who: 'Kenji', t: '07:12', ph: 1 },
      { mid: 'g3', s: 'out', i: 'YO', v: 'slate', who: 'You',   t: '07:22', text: 'Chasing you all week — the 18k club next.' },
      { mid: 'g4', s: 'in',  i: 'NF', v: '',      who: 'Nadia', t: '07:40', text: 'Weekly board resets Sunday 00:00 UTC. Set your alarms.' },
      { mid: 'ge1', s: 'in', i: 'NP', v: 'lime',  who: 'Nina P.', t: '07:58', ev: 'ev-park' }
    ] }
  };

  var CHANNELS_META = [
    { id: 'sunrise', unread: 3 },
    { id: 'office',  unread: 1 },
    { id: 'duo',     unread: 0 },
    { id: 'global',  unread: 12 }
  ];

  var GLOBE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3.5 12h17M12 3.5c4 5 4 12 0 17-4-5-4-12 0-17Z"/></svg>';

  function channelName(id) {
    if (id === 'global') return 'Global Chat';
    var g = groupById(id);
    return g ? g.name : id;
  }
  function lastMsg(id) {
    var msgs = CHAT[id] && CHAT[id].msgs;
    if (!msgs) return null;
    for (var i = msgs.length - 1; i >= 0; i--) {
      var m = msgs[i];
      if (m.sys) continue;
      if (m.ph !== undefined && !m.text) m.text = 'Photo · demo';
      if (m.ev) {
        var ev = eventById(m.ev);
        if (!ev) continue;                       // event cancelled — card gone
        m.text = '{{ic:event}} ' + ev.title;   // hub preview for the rich card
      }
      return m;
    }
    return null;
  }

  var chanListEl = document.getElementById('chan-list');

  function renderHub() {
    chanListEl.innerHTML = '';
    /* v6 · direct messages sit above the group channels */
    if (DM_META.length) {
      chanListEl.insertAdjacentHTML('beforeend', '<p class="hub-h">Direct messages</p>');
      DM_META.forEach(function (d) {
        var msgs = DM[d.peer] || [];
        var last = msgs.length ? msgs[msgs.length - 1] : null;
        var row = document.createElement('button');
        row.type = 'button';
        row.className = 'chan';
        row.setAttribute('data-od-id', 'chat-dm-' + d.peer.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
        row.innerHTML =
          '<span class="avatar' + (d.v ? ' avatar--' + d.v : '') + '" aria-hidden="true">' + escapeHtml(d.i) + '</span>' +
          '<span class="chan__mid"><span class="chan__name">' + escapeHtml(d.peer) + '</span>' +
          '<span class="chan__prev">' + (last ? '<b>' + escapeHtml(last.who) + '</b> · ' + safeHTML(last.text || 'Photo · demo') : '<i>No messages yet</i>') + '</span></span>' +
          '<span class="chan__end"><span class="chan__time">' + (last ? escapeHtml(last.t) : '—') + '</span>' +
          (d.unread > 0 ? '<span class="badge">' + d.unread + '</span>' : '') + '</span>';
        row.addEventListener('click', function () { openDm(d.peer, { i: d.i, v: d.v }); });
        chanListEl.appendChild(row);
      });
    }
    chanListEl.insertAdjacentHTML('beforeend', '<p class="hub-h">Group channels</p>');
    CHANNELS_META.forEach(function (c) {
      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'chan';
      row.setAttribute('data-chan', c.id);
      row.setAttribute('data-od-id', 'chat-channel-' + c.id);
      var glyph, last = lastMsg(c.id);
      if (c.id === 'global') {
        glyph = '<span class="avatar avatar--globe" aria-hidden="true">' + GLOBE_SVG + '</span>';
      } else {
        var g = groupById(c.id);
        glyph = '<span class="avatar' + (g && g.members[0] && g.members[0].v ? ' avatar--' + g.members[0].v : '') + '" aria-hidden="true">' +
          escapeHtml(g ? g.members[0].i : 'YO') + '</span>';
      }
      var preview = last
        ? '<b>' + escapeHtml(last.who) + '</b> · ' + safeHTML(last.text || 'Photo · demo')
        : '<i>No messages yet</i>';
      row.innerHTML =
        glyph +
        '<span class="chan__mid"><span class="chan__name">' + escapeHtml(channelName(c.id)) + '</span>' +
        '<span class="chan__prev">' + preview + '</span></span>' +
        '<span class="chan__end"><span class="chan__time">' + (last ? escapeHtml(last.t) : '—') + '</span>' +
        (c.unread > 0 ? '<span class="badge">' + c.unread + '</span>' : '') + '</span>';
      row.addEventListener('click', function () { openChannel(c.id); });
      chanListEl.appendChild(row);
    });
    /* v8-g4 · Cheers section — its header is the second entry to scr-buddies */
    chanListEl.insertAdjacentHTML('beforeend',
      '<p class="hub-h hub-h--link">Cheers <button type="button" class="hub-h__go" data-goto="scr-buddies" data-od-id="chat-cheers-buddies-link">Buddies &rarr;</button></p>');
    var cheerRow = document.createElement('button');
    cheerRow.type = 'button';
    cheerRow.className = 'chan';
    cheerRow.setAttribute('data-od-id', 'chat-cheers-row');
    cheerRow.innerHTML =
      '<span class="avatar avatar--slate" aria-hidden="true">KA</span>' +
      '<span class="chan__mid"><span class="chan__name">Kwame A. hit 10k today ' + ic('cheer') + '</span>' +
      '<span class="chan__prev">Cheer him and your buddies from the Buddies board</span></span>' +
      '<span class="chan__end"><span class="chan__time">now</span></span>';
    cheerRow.addEventListener('click', function () { showScreen('scr-buddies'); });
    chanListEl.appendChild(cheerRow);
  }
  enterHooks['scr-chat'] = renderHub;

  var curChannel = 'global';
  var chatScroll = document.getElementById('chat-scroll');
  var composer   = document.getElementById('chat-composer');
  var chatInput  = document.getElementById('chat-input');
  var msgSeq = 100;

  function scrollChat() { chatScroll.scrollTop = chatScroll.scrollHeight; }
  enterHooks['scr-chat-thread'] = scrollChat;

  /* ── v8-g6 · v1-restore bubble engine — shared by channel threads and DMs ── */
  var NAME_TINTS = ['oklch(48% 0.15 155)', 'oklch(52% 0.16 60)', 'oklch(50% 0.19 20)', 'oklch(52% 0.14 175)', 'oklch(50% 0.2 300)', 'oklch(50% 0.18 262)'];
  function tintOf(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return name === 'You' ? 'var(--primary-ink)' : NAME_TINTS[h % NAME_TINTS.length];
  }
  function dayOf(m) { return /^\d{1,2}:\d{2}$/.test(m.t || '') ? 'today' : (m.t || 'today'); }
  function dayLabel(d) { return d === 'today' ? 'Today' : d === 'Mon' ? 'Monday' : d === 'Sun' ? 'Sunday' : d; }

  var MENU_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>';

  function inChipHtml(m) {
    return '<button type="button" class="msg__chip av-tap' + (m.v ? ' avatar--' + m.v : '') + '"' +
      ' data-userav data-name="' + escapeHtml(fullNameOf(m.who)) + '" data-av="' + escapeHtml(m.i) + '" data-v="' + escapeHtml(m.v || '') + '"' +
      ' aria-label="View ' + escapeHtml(fullNameOf(m.who)) + '\'s profile">' + escapeHtml(m.i) + '</button>';
  }
  function outChipHtml() {
    if (S.avChar) return '<span class="msg__chip avatar--char" aria-hidden="true">' + avCharSvg(S.avChar, 26) + '</span>';
    return '<span class="msg__chip' + (S.avV ? ' avatar--' + S.avV : '') + '" aria-hidden="true">' + escapeHtml(S.avI) + '</span>';
  }

  /* grouped rendering: chip + colored name above the FIRST bubble of a sender run,
     time rides the LAST bubble, day separators between days. */
  function buildThread(host, msgs, ctx) {
    host.innerHTML = '';
    var lastDay = null, grp = null;
    function startGroup(side, sender) {
      var row = document.createElement('div');
      row.className = 'msg msg--' + side;
      row.innerHTML = '<span class="msg__chipSlot">' + (side === 'out' ? outChipHtml() : inChipHtml({ who: sender, i: sender.slice(0, 2).toUpperCase(), v: '' })) + '</span>' +
        '<div class="msg__col"><div class="msg__who"><span class="msg__name" style="color:' + tintOf(sender) + '">' + escapeHtml(sender) + '</span></div></div>';
      host.appendChild(row);
      grp = { sender: sender, side: side, col: row.querySelector('.msg__col'), lastBubble: null };
    }
    msgs.forEach(function (m) {
      if (m.sys) {
        grp = null;
        var sys = document.createElement('div');
        sys.className = 'syscard';
        sys.setAttribute('data-od-id', 'chat-teamup-card');
        sys.innerHTML =
          '<b>Team up</b><p>These runners are all within 2k steps of you. Create a group and keep the race going.</p>' +
          '<button class="btn btn--primary" type="button" data-goto="scr-create">Team up — create a group with these runners</button>';
        host.appendChild(sys);
        return;
      }
      var day = dayOf(m);
      if (day !== lastDay) {
        grp = null;
        var sep = document.createElement('div');
        sep.className = 'chat-day';
        sep.setAttribute('data-od-id', 'chat-day-' + day);
        sep.textContent = dayLabel(day);
        host.appendChild(sep);
        lastDay = day;
      }
      var side = (m.s === 'out') ? 'out' : 'in';
      var sender = m.who || (side === 'out' ? 'You' : 'Walker');
      if (m.ev && !eventById(m.ev)) return;      // cancelled event — card gone, group untouched
      if (!grp || grp.sender !== sender || grp.side !== side) {
        if (side === 'in' && !grp) { /* noop */ }
        startGroup(side, sender);
        if (side === 'in') host.lastElementChild.querySelector('.msg__chipSlot').innerHTML = inChipHtml(m);
      }
      var line = document.createElement('div');
      line.className = 'msg__line';
      line.setAttribute('data-mid', m.mid);
      line.setAttribute('data-sender', sender);
      line.setAttribute('data-own', side === 'out' ? '1' : '0');
      line.setAttribute('data-od-id', (m.ev ? (ctx.dm ? 'dm-eventcard-' : 'chat-eventcard-') : (ctx.dm ? 'dm-message-' : 'chat-message-')) + m.mid);
      var menuBtn = '<button class="msg__menu" aria-label="Message options">' + MENU_SVG + '</button>';
      if (m.ev) {
        var ev = eventById(m.ev);
        line.innerHTML = '<div class="evcard evcard--chat">' + evChatHtml(ev) + '</div>' + menuBtn;
        grp.col.appendChild(line);
        return;
      }
      line.innerHTML = '<div class="msg__bubble"></div>' + menuBtn;
      var bubble = line.querySelector('.msg__bubble');
      if (m.ph !== undefined) {
        bubble.classList.add('msg__bubble--img');
        bubble.innerHTML = '<figure class="phcard" style="margin:0;">' + demoPhotoSvg(m.ph) +
          '<figcaption class="phcard__cap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:11px;height:11px;"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="m4.5 17 4.5-4.5 3.5 3 3-2 4 3.5"/></svg>Photo · demo</figcaption></figure>';
      } else if (m.gift) {
        bubble.innerHTML = '<span class="gcard"><span class="gcard__stk" aria-hidden="true">' + ic('gift') + ' ' + icSvgField(m.gift.e) + '</span><span><b class="gcard__t">' + escapeHtml(m.gift.n) + '</b><span class="gcard__s">from You</span></span></span>';
      } else {
        bubble.textContent = m.text;           // never trust innerHTML for message text
      }
      var prevB = grp.lastBubble;
      if (prevB && prevB !== bubble) { var old = prevB.querySelector('.msg__time'); if (old) old.remove(); }
      var ts = document.createElement('span');
      ts.className = 'msg__time';
      ts.textContent = m.t;
      bubble.appendChild(ts);
      grp.lastBubble = bubble;
      grp.col.appendChild(line);
    });
    grp = null;
  }

  function renderThread() {
    buildThread(chatScroll, CHAT[curChannel].msgs, { dm: false });
    scrollChat();
  }

  function openChannel(id) {
    if (!CHAT[id]) return;
    curChannel = id;
    CHAT[id].unreadCleared = true;
    CHANNELS_META.forEach(function (c) { if (c.id === id) c.unread = 0; });
    var g = (id === 'global') ? null : groupById(id);
    document.getElementById('th-title').textContent = channelName(id);
    document.getElementById('th-sub').textContent =
      g ? (g.members.length + ' members') : 'Public — Global Chat';
    var av = document.getElementById('th-avatar');
    if (g) {
      av.className = 'avatar' + (g.members[0].v ? ' avatar--' + g.members[0].v : '');
      av.innerHTML = escapeHtml(g.members[0].i);
    } else {
      av.className = 'avatar avatar--globe';
      av.innerHTML = GLOBE_SVG;
    }
    document.getElementById('btn-th-menu').classList.toggle('u-hide', id !== 'global');
    chatInput.placeholder = g ? ('Message ' + g.name + '…') : 'Message the global room…';
    renderThread();
    showScreen('scr-chat-thread');
  }

  /* v8-g6 · house-rules gate + composer posting */
  var pendingAct = null;   // { kind: 'text' | 'photo', val }
  function postChannelText() {
    var text = chatInput.value.trim();
    if (!text) return;
    if (curChannel === 'global' && !S.globalRules) {
      pendingAct = { kind: 'text', val: text };
      openSheet(document.getElementById('rules-sheet'));
      return;
    }
    CHAT[curChannel].msgs.push({ mid: 'm' + (++msgSeq), s: 'out', i: S.avI, v: S.avV || 'slate', who: 'You', t: hhmm(), text: text });
    chatInput.value = '';
    renderThread();
  }
  composer.addEventListener('submit', function (e) { e.preventDefault(); postChannelText(); });

  var rulesSheet = document.getElementById('rules-sheet');
  document.getElementById('btn-rules-agree').addEventListener('click', function () {
    S.globalRules = true;
    closeSheets();
    toast('Welcome to Global Chat — say hi');
    if (pendingAct && pendingAct.kind === 'text') { chatInput.value = pendingAct.val; pendingAct = null; postChannelText(); }
    else if (pendingAct && pendingAct.kind === 'photo') { var pi = pendingAct.val; pendingAct = null; attachDemoPhoto(pi, 'chat'); }
  });
  document.getElementById('btn-rules-later').addEventListener('click', function () {
    pendingAct = null;
    closeSheets();
    toast('Browse freely — agree to the rules to post');
  });
  document.getElementById('btn-th-menu').addEventListener('click', function () {
    document.getElementById('th-sheet-title').textContent = channelName(curChannel);
    openSheet(document.getElementById('th-sheet'));
  });
  document.getElementById('btn-th-cancel').addEventListener('click', closeSheets);
  document.getElementById('btn-th-rules').addEventListener('click', function () {
    closeSheets();
    pendingAct = null;
    openSheet(rulesSheet);
  });

  var reportSheet = document.getElementById('report-sheet');
  var sheetTarget = null;   // { mid, sender, own, dm }

  function openMsgSheet(dm) {
    return function (e) {
      var btn = e.target.closest('.msg__menu');
      if (!btn) return;
      var line = btn.closest('.msg__line');
      if (!line) return;
      sheetTarget = { mid: line.getAttribute('data-mid'), sender: line.getAttribute('data-sender'), own: line.getAttribute('data-own') === '1', dm: !!dm };
      document.getElementById('report-sheet-title').textContent =
        sheetTarget.own ? 'Your message' : 'Message from ' + sheetTarget.sender;
      document.getElementById('btn-block').classList.toggle('u-hide', sheetTarget.own);
      openSheet(reportSheet);
    };
  }
  // Delegated: works for seeded messages AND anything appended later.
  chatScroll.addEventListener('click', openMsgSheet(false));

  document.getElementById('btn-report-cancel').addEventListener('click', closeSheets);

  document.getElementById('btn-report').addEventListener('click', function () {
    if (sheetTarget) {
      var msgs = sheetTarget.dm ? (DM[dmPeer ? dmPeer.name : ''] || []) : CHAT[curChannel].msgs;
      for (var i = 0; i < msgs.length; i++) {
        if (msgs[i].mid === sheetTarget.mid) { msgs.splice(i, 1); break; }
      }
      toast('Reported');
      if (sheetTarget.dm) { renderDm(); renderHub(); } else renderThread();
    }
    closeSheets();
  });

  document.getElementById('btn-block').addEventListener('click', function () {
    if (sheetTarget) {
      if (sheetTarget.dm) {
        var dmMsgs = DM[dmPeer ? dmPeer.name : ''] || [];
        for (var j = dmMsgs.length - 1; j >= 0; j--) if (dmMsgs[j].s === 'in') dmMsgs.splice(j, 1);
        for (var k = 0; k < DM_META.length; k++) if (dmPeer && DM_META[k].peer === dmPeer.name) DM_META[k].blocked = true;
        toast('Blocked ' + sheetTarget.sender);
        addBlock(dmPeer ? dmPeer.name : sheetTarget.sender);
        renderDm(); renderHub();
      } else {
        var msgs2 = CHAT[curChannel].msgs;
        for (var i2 = msgs2.length - 1; i2 >= 0; i2--) {
          if (msgs2[i2].who === sheetTarget.sender && msgs2[i2].s === 'in') msgs2.splice(i2, 1);
        }
        toast('Blocked ' + sheetTarget.sender);
        addBlock(sheetTarget.sender);
        renderThread();
      }
    }
    closeSheets();
  });

  /* ── 6 · Create / Join — both land back in My Groups ──────────────── */
  var chosenGoal = 9000;   // v7 · smart default: most squads pick 9,000
  document.querySelectorAll('.goal-chips [data-goal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      chosenGoal = parseInt(btn.dataset.goal, 10);
      document.querySelectorAll('.goal-chips [data-goal]').forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });
    });
  });

  document.getElementById('btn-open-create').addEventListener('click', function () {
    showScreen('scr-create');
  });
  document.getElementById('btn-open-join').addEventListener('click', function () {
    showScreen('scr-create');
    var codeEl = document.getElementById('join-code');
    codeEl.focus({ preventScroll: true });
    SCREENS['scr-create'].scrollTop = SCREENS['scr-create'].scrollHeight;
  });

  document.getElementById('btn-create-group').addEventListener('click', function () {
    var name = document.getElementById('create-name').value.trim();
    if (!name) {
      document.getElementById('create-name').focus();
      toast('Give your squad a name');
      return;
    }
    var code = (name.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4) || 'SQUAD') + '01';
    var g = {
      id: 'g' + Date.now(),
      name: name,
      code: code,
      privacy: createPrivacy,
      cap: 10,
      trend: [STEPS, STEPS, STEPS, STEPS, STEPS, STEPS, STEPS],
      members: [you()]
    };
    GROUPS.push(g);
    CHAT[g.id] = { msgs: [] };
    CHANNELS_META.splice(CHANNELS_META.length - 1, 0, { id: g.id, unread: 0 }); // before the global room
    renderGroups();
    renderGroupChips();
    renderLeaderboard();
    renderHub();
    toast('Group created');
    openGroup(g.id);        // v6 · Create lands on the group detail…
    openInviteSheet(g);     //       …with the invite sheet (link copy + QR) already up
  });

  document.getElementById('btn-join').addEventListener('click', function () {
    var err = document.getElementById('join-err');
    var code = document.getElementById('join-code').value.trim().toUpperCase();
    var g = null;
    for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].code === code) { g = GROUPS[i]; break; }
    if (g) {
      err.textContent = '';
      toast('Joined ' + g.name);
      soloMode = false;      // v6 · back-retention: squad ranks return on Today
      refreshTodayGoal();
      document.getElementById('join-code').value = '';
      showScreen('scr-groups');
    } else {
      err.textContent = 'No squad matches "' + (code || '—') + '". Try SQUAD10 in this prototype.';
      document.getElementById('join-code').focus();
    }
  });
  document.getElementById('join-code').addEventListener('input', function () {
    document.getElementById('join-err').textContent = '';
  });

  /* ── 7 · Profile: working toggles ─────────────────────────────────── */
  function bindSwitch(id, onChange) {
    var sw = document.getElementById(id);
    sw.addEventListener('click', function () {
      var on = sw.getAttribute('aria-checked') !== 'true';
      sw.setAttribute('aria-checked', String(on));
      onChange(on);
    });
  }
  bindSwitch('sw-nudge', function (on) { toast(on ? 'Daily nudge on' : 'Daily nudge off'); });
  bindSwitch('sw-motion', function (on) {
    reduceMotion = on;
    phone.classList.toggle('reduce', on);
    toast(on ? 'Animations reduced' : 'Animations on');
  });
  bindSwitch('sw-visible', function (on) { toast(on ? 'Goal visible to squad' : 'Goal hidden from squad'); });

  /* ═══ v6 ═══════════════════════════════════════════════════════════
     Goal fork · solo setup · discover · privacy · group stats ·
     user sheets · DM threads — same registry, same patterns. */

  /* ── 8 · goal fork + solo mode ───────────────────────────────────── */
  var soloMode = false, soloGoal = 9000, gView = 'mine';

  function refreshTodayGoal() {
    document.getElementById('goal-text').textContent = 'of ' + GOAL.toLocaleString('en-US');
    document.getElementById('ring-svg').setAttribute('aria-label',
      'Spiral: ' + STEPS.toLocaleString('en-US') + ' of ' + GOAL.toLocaleString('en-US') + ' steps');
    var pct = Math.round(STEPS / GOAL * 100);
    /* v10 · the ring delta chip carries the story: to-goal / goal-hit / overage */
    capEl.textContent = STEPS > GOAL
      ? 'Goal hit \u2713 \u00b7 +' + fmt(STEPS - GOAL) + ' over'
      : (STEPS === GOAL ? 'Goal hit \u2713' : fmt(GOAL - STEPS) + ' to goal');
    capEl.classList.toggle('hit', STEPS >= GOAL);
    // v8-g1 · achievement teaser + ladder Night Owl row share the same "x of y · %" phrasing
    var tFill = document.getElementById('teaser-fill');
    if (tFill) tFill.style.width = Math.min(100, pct) + '%';
    var nFill = document.getElementById('ladder-night-fill');
    if (nFill) nFill.style.width = Math.min(100, pct) + '%';
    var nPct = document.getElementById('ladder-night-pct');
    if (nPct) nPct.textContent = fmt(STEPS) + ' of ' + fmt(GOAL) + ' \u00b7 ' + Math.min(100, pct) + '%';
    var teaserSub = document.querySelector('[data-od-id="today-achievement-teaser"] .gcta__col > span.s');
    if (teaserSub) teaserSub.textContent = fmt(STEPS) + ' of ' + fmt(GOAL) + ' \u00b7 ' + pct + '% tonight';
    if (SCREENS['scr-today']) {
      document.getElementById('appbar-mini').textContent = soloMode ? 'Tue \u00b7 Solo mode' : 'Tue \u00b7 Spiral to goal';
    }
    document.getElementById('solo-chip').classList.toggle('u-hide', !soloMode);
    document.getElementById('pulse-card').classList.toggle('u-hide', soloMode);
    var avg = Math.round(sparkData.reduce(function (s, d) { return s + d.s; }, 0) / 7);
    document.getElementById('stat-rank-val').textContent = soloMode ? avg.toLocaleString('en-US') : '6th';
    document.getElementById('stat-rank-lbl').textContent = soloMode ? 'avg steps/day' : 'in squad';
    updateShield(); renderPulse(); renderSaveStreak();  }

  document.getElementById('btn-fork-squad').addEventListener('click', function () { S.chosen = true; saveNow(); openGroupsView('discover'); });
  document.getElementById('btn-fork-solo').addEventListener('click', function () { S.chosen = true; saveNow(); showScreen('scr-goal'); });
  document.getElementById('btn-fork-back').addEventListener('click', function () {
    document.getElementById('onb-intro').hidden = true;
    document.getElementById('onb-connect').hidden = false;
    showScreen('scr-onboarding');
  });

  var goalSlider  = document.getElementById('goal-slider');
  var goalReadout = document.getElementById('goal-readout');
  function syncSoloGoal(v) {
    soloGoal = v;
    goalReadout.textContent = v.toLocaleString('en-US');
    goalSlider.value = v;
    document.querySelectorAll('#solo-goal-chips [data-sgoal]').forEach(function (b) {
      b.classList.toggle('active', parseInt(b.dataset.sgoal, 10) === v);
    });
  }
  document.querySelectorAll('#solo-goal-chips [data-sgoal]').forEach(function (b) {
    b.addEventListener('click', function () { syncSoloGoal(parseInt(b.dataset.sgoal, 10)); });
  });
  goalSlider.addEventListener('input', function () { syncSoloGoal(parseInt(goalSlider.value, 10)); });
  bindSwitch('sw-weekly', function (on) { toast(on ? 'Weekly reminder on' : 'Weekly reminder off'); });

  document.getElementById('btn-save-goal').addEventListener('click', function () {
    soloMode = true;
    GOAL = soloGoal;
    S.onboarded = true;
    saveNow();                                   /* FIX · persist goal/solo/onboarded before navigation */
    refreshTodayGoal();
    showScreen('scr-today');   // enter hook replays the count-up + ring against the new goal
    toast('Goal saved — you\'re in Solo mode');
  });

  /* ── 9 · discover ────────────────────────────────────────────────── */
  var PUBLIC_GROUPS = [
    { id: 'trailblazers', name: 'TrailBlazers', city: 'Nairobi', avg: 142, size: 7, cap: 10, privacy: 'open', requested: false,
      blurb: 'Weekend trail crew — forest loops, hills, muddy shoes.' },
    { id: 'morning-miles', name: 'Morning Miles', city: 'Nairobi', avg: 98, size: 9, cap: 10, privacy: 'private', requested: false,
      blurb: '6am regulars. The pace is brisk, the group chat is not.' },
    { id: 'deckers', name: 'Deckers', city: 'Kisumu', avg: 121, size: 3, cap: 10, privacy: 'open', requested: false,
      blurb: 'Balcony laps, lunch walks, dog rounds. Small numbers, loud cheers.' }
  ];
  var LOCK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
  var discoverListEl = document.getElementById('discover-list');
  var discoverCity = null;   /* v8-g2 · set from Nearby joins, cleared from the chip */
  var CITY_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-10a6.5 6.5 0 0 1 13 0c0 4.6-6.5 10-6.5 10Z"/><circle cx="12" cy="11" r="2.4"/></svg>';
  function cityTitle(c) { return c ? c.charAt(0).toUpperCase() + c.slice(1) : ''; }
  function discoverPool() {
    return discoverCity
      ? PUBLIC_GROUPS.filter(function (p) { return p.city.toLowerCase() === discoverCity; })
      : PUBLIC_GROUPS;
  }
  function setDiscChip() {
    var wrap = document.getElementById('disc-city');
    wrap.classList.toggle('u-hide', !discoverCity);
    if (discoverCity) {
      document.getElementById('disc-city-label').innerHTML = CITY_PIN + escapeHtml(cityTitle(discoverCity));
      document.getElementById('disc-city-clear').setAttribute('aria-label', 'Clear ' + cityTitle(discoverCity) + ' filter');
    }
    paintLocChips();
  }

  function renderDiscover() {
    if (typeof sortPublic === 'function') sortPublic();
    discoverListEl.innerHTML = '';
    var pool = discoverPool();
    if (!pool.length) {
      discoverListEl.innerHTML = '<div class="empty"><b>No squads in ' + escapeHtml(cityTitle(discoverCity)) + ' yet</b><p>Clear the filter to browse all public squads.</p></div>';
      return;
    }
    pool.forEach(function (p) {
      var el = document.createElement('div');
      el.className = 'pubcard';
      el.setAttribute('data-od-id', 'discover-card-' + p.id);
      var badge = p.privacy === 'open'
        ? '<span class="pb pb--open">Open</span>'
        : '<span class="pb pb--private">' + LOCK_SVG + 'Private</span>';
      el.innerHTML =
        '<div class="pubcard__row1"><span class="pubcard__name">' + escapeHtml(p.name) + '</span>' +
        '<span class="pb-group"><span class="pb pb--loc" data-od-id="discover-loc-badge-' + p.id + '">' + CITY_PIN + escapeHtml(p.city) + '</span>' + badge + '</span></div>' +
        '<div class="pubcard__meta"><span class="pubcard__big num">' + p.avg + '<small>avg steps/day</small></span>' +
        '<span class="pubcard__occ num">' + p.size + ' of ' + p.cap + ' members · ' + escapeHtml(p.city) + '</span></div>' +
        '<p class="pubcard__note">' + escapeHtml(p.blurb) +
        (p.privacy === 'private' ? ' · <b>invite only</b>' : '') + '</p>' +
        '<button type="button" class="btn btn--block ' + (p.requested ? 'btn--requested' : 'btn--primary') + '" data-req="' + p.id + '"' +
        (p.requested ? ' disabled' : '') + '>' +
        (p.requested ? 'Requested ' + ic('check') : (p.privacy === 'private' ? 'Request access' : 'Request join')) + '</button>';
      discoverListEl.appendChild(el);
    });
  }
  var pendingReq = null;
  discoverListEl.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-req]');
    if (!btn || btn.disabled) return;
    var p = null;
    for (var i = 0; i < PUBLIC_GROUPS.length; i++) {
      if (PUBLIC_GROUPS[i].id === btn.dataset.req) { p = PUBLIC_GROUPS[i]; break; }
    }
    if (!p) return;
    // v7 · reciprocity: a pre-written, editable intro before the ask
    pendingReq = p.id;
    document.getElementById('jr-title').textContent = 'Request to join ' + p.name;
    document.getElementById('jr-msg').value = JR_DEFAULT.replace('{squad}', p.name);
    openSheet(document.getElementById('join-req-sheet'));
  });
  document.getElementById('btn-jr-cancel').addEventListener('click', closeSheets);
  document.getElementById('btn-send-request').addEventListener('click', function () {
    for (var i = 0; i < PUBLIC_GROUPS.length; i++) {
      if (PUBLIC_GROUPS[i].id === pendingReq) { PUBLIC_GROUPS[i].requested = true; break; }
    }
    pendingReq = null;
    renderDiscover();
    setGroupsView('discover');
    closeSheets();
    toast('Join request sent with your intro');
  });

  function setGroupsView(view) {
    gView = view;
    document.querySelectorAll('[data-gview]').forEach(function (b) {
      b.classList.toggle('active', b.dataset.gview === view);
    });
    document.getElementById('grp-mine').hidden = view !== 'mine';
    document.getElementById('grp-discover').hidden = view !== 'discover';
    if (view === 'discover') {
      setDiscChip();
      var open = discoverPool().filter(function (p) { return !p.requested; }).length;
      mgSubEl.textContent = open ? open + ' public groups · week of Nov 2' : 'All requests sent · week of Nov 2';
    } else {
      mgSubEl.textContent = GROUPS.length + ' groups · week of Nov 2';
    }
  }
  document.querySelectorAll('[data-gview]').forEach(function (b) {
    b.addEventListener('click', function () { setGroupsView(b.dataset.gview); });
  });
  function openGroupsView(view, city) {
    if (city !== undefined) discoverCity = city ? String(city).toLowerCase() : null;
    setGroupsView(view);
    showScreen('scr-groups');
    if (view === 'discover' && city) renderDiscover();
  }
  document.getElementById('btn-profile-discover').addEventListener('click', function () { openGroupsView('discover'); });
  document.getElementById('disc-city-clear').addEventListener('click', function () {
    discoverCity = null;
    renderDiscover();
    setGroupsView('discover');
  });

  /* ── 10 · create: privacy · invite sheet with QR ─────────────────── */
  var createPrivacy = 'open';
  document.querySelectorAll('[data-priv]').forEach(function (b) {
    b.addEventListener('click', function () {
      createPrivacy = b.dataset.priv;
      document.querySelectorAll('[data-priv]').forEach(function (x) { x.classList.toggle('active', x === b); });
    });
  });

  function hashStr(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function drawQr(text) {
    var svg = document.getElementById('qr-svg');
    if (!svg) return;
    var h = hashStr(String(text)), cells = 21, out = '';
    function inFinder(x, y) { return (x < 8 && y < 8) || (x >= cells - 8 && y < 8) || (x < 8 && y >= cells - 8); }
    for (var y = 0; y < cells; y++) {
      for (var x = 0; x < cells; x++) {
        var on;
        if (inFinder(x, y)) {
          var fx = x < 8 ? x : x - (cells - 8);
          var fy = y < 8 ? y : y - (cells - 8);
          on = (fx <= 6 && fy <= 6) &&
            ((fx === 0 || fx === 6 || fy === 0 || fy === 6) || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4));
        } else {
          h = Math.imul(h ^ (x * 31 + y * 7), 2654435761) >>> 0;
          on = (h % 100) < 46;
        }
        if (on) out += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
      }
    }
    svg.innerHTML = out;
  }

  function openInviteSheet(g) {
    document.getElementById('invite-title').textContent = 'Invite to ' + g.name;
    document.getElementById('invite-desc').textContent = g.privacy === 'private'
      ? 'Private squad — only people with this link can join ' + g.name + '.'
      : 'Share this link — they land straight in ' + g.name + '.';
    var link = 'https://stridesquad.app/join/' + g.code;
    document.getElementById('invite-link').textContent = link;
    document.getElementById('invite-code').textContent = g.code;
    drawQr(link);
    openSheet(document.getElementById('invite-sheet'));
  }

  /* ── 11 · group detail tabs + weekly stats ───────────────────────── */
  function setGdTab(t) {
    document.querySelectorAll('[data-gtab]').forEach(function (b) { b.classList.toggle('active', b.dataset.gtab === t); });
    document.getElementById('gd-ranking').hidden = t !== 'ranking';
    document.getElementById('gd-stats').hidden = t !== 'stats';
    document.getElementById('gd-events').hidden = t !== 'events';
  }
  document.querySelectorAll('[data-gtab]').forEach(function (b) {
    b.addEventListener('click', function () { setGdTab(b.dataset.gtab); });
  });

  function renderStats(g) {
    var bars = document.getElementById('gd-bars');
    bars.innerHTML = '';
    var rw = roster(g, 'w');
    var maxW = rw.length ? rw[0].w : 1;
    rw.forEach(function (m) {
      var col = document.createElement('div');
      col.className = 'wbar' + (m.you ? ' wbar--you' : '');
      col.title = m.n + ' · ' + m.w.toLocaleString('en-US') + ' steps this week';
      var lbl = m.w >= 1000 ? (m.w / 1000).toFixed(1) + 'k' : String(m.w);
      col.innerHTML =
        '<span class="wbar__val num">' + lbl + '</span>' +
        '<span class="wbar__col" style="height:' + Math.max(8, Math.round(m.w / maxW * 110)) + 'px"></span>' +
        '<span class="wbar__lbl">' + escapeHtml(m.i) + '</span>';
      bars.appendChild(col);
    });
    var total = g.members.reduce(function (s, m) { return s + m.w; }, 0);
    var best = Math.max.apply(null, g.trend);
    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    document.getElementById('gd-stat-row').innerHTML =
      '<div class="stat-cell"><b class="num">' + total.toLocaleString('en-US') + '</b><span>group steps · this week</span></div>' +
      '<div class="stat-cell"><b class="num">' + best.toLocaleString('en-US') + '</b><span>best day · ' + days[g.trend.indexOf(best)] + '</span></div>';
  }

  /* ── 12 · global user sheet + DM threads ─────────────────────────── */
  var USER_INFO = {
    'Aisha R.':   { streak: 34, badges: ['Global top 5', '100k club'] },
    'Tomás L.':  { streak: 21, badges: ['Evening walker'] },
    'Kenji S.':   { streak: 58, badges: ['Global top 5', 'Hill taker', '100k club'] },
    'Nadia F.':   { streak: 12, badges: ['Dawn patrol'] },
    'Owen M.':    { streak: 9,  badges: ['Stair master'] },
    'Ines B.':    { streak: 27, badges: ['Podium week'] },
    'Priya T.':   { streak: 19, badges: ['Goal crusher'] },
    'Maya K.':    { streak: 41, badges: ['Dawn patrol', '12-week streak'] },
    'Marisol V.': { streak: 30, badges: ['Hill taker'] }
  };
  /* v8-g4 · the walker quick sheet is retired — every user-row / avatar tap
     now lands on scr-user (openUserProfile). weeklyOf stays for rank lookup. */
  function weeklyOf(name) {
    var list = LB['weekly-global'];
    for (var i = 0; i < list.length; i++) if (list[i].n === name) return list[i];
    return null;
  }

  var DM = {
    'Nina P.': [
      { mid: 'n1', s: 'out', i: 'YO', v: 'slate', who: 'You',  t: 'Mon',    text: 'Did the river loop this morning?' },
      { mid: 'n2', s: 'in',  i: 'NP', v: 'lime',  who: 'Nina', t: '09:05', text: 'great run today' },
      { mid: 'np1', s: 'in', i: 'NP', v: 'lime',  who: 'Nina', t: '09:31', ph: 4 }
    ]
  };
  var DM_META = [{ peer: 'Nina P.', i: 'NP', v: 'lime', unread: 1, blocked: false }];
  var dmPeer = null;
  var dmScroll = document.getElementById('dm-scroll');

  function dmBlocked() {
    if (!dmPeer) return false;
    for (var i = 0; i < DM_META.length; i++) if (DM_META[i].peer === dmPeer.name) return !!DM_META[i].blocked;
    return false;
  }

  function renderDm() {
    if (!dmPeer) return;
    buildThread(dmScroll, DM[dmPeer.name] || [], { dm: true });
    if (dmBlocked()) {
      var sys = document.createElement('div');
      sys.className = 'syscard';
      sys.innerHTML = '<b>Blocked</b><p>' + escapeHtml(dmPeer.name) + ' can\'t message you and you won\'t see their replies.</p>';
      dmScroll.appendChild(sys);
    }
    document.getElementById('dm-composer').classList.toggle('u-hide', dmBlocked());
    dmScroll.scrollTop = dmScroll.scrollHeight;
  }
  dmScroll.addEventListener('click', openMsgSheet(true));

  function openDm(name, profile) {
    profile = profile || {};
    var meta = null;
    for (var i = 0; i < DM_META.length; i++) if (DM_META[i].peer === name) meta = DM_META[i];
    if (!meta) {
      meta = { peer: name, i: profile.i || name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase(), v: profile.v || '', unread: 0, blocked: false };
      DM_META.unshift(meta);
    }
    if (!DM[name]) DM[name] = [];
    meta.unread = 0;
    dmPeer = { name: name, i: meta.i, v: meta.v };
    document.getElementById('dm-title').textContent = name;
    document.getElementById('dm-sub').textContent = profile.rank
      ? 'Global weekly #' + profile.rank + ' · ' + Math.round((profile.wk || 0) / 7).toLocaleString('en-US') + ' avg/day'
      : 'Direct message';
    var av = document.getElementById('dm-avatar');
    av.className = 'avatar' + (meta.v ? ' avatar--' + meta.v : '');
    av.textContent = meta.i;
    document.getElementById('dm-input').placeholder = 'Message ' + name.split(' ')[0] + '…';
    renderDm();
    renderHub();
    showScreen('scr-dm-thread');
  }

  document.getElementById('dm-composer').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!dmPeer || dmBlocked()) return;
    var input = document.getElementById('dm-input');
    var text = input.value.trim();
    if (!text) return;
    var now = new Date();
    var hh = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
    DM[dmPeer.name].push({ mid: 'm' + (++msgSeq), s: 'out', i: 'YO', v: 'slate', who: 'You', t: hh, text: text });
    input.value = '';
    renderDm();
    renderHub();
  });

  document.getElementById('btn-dm-menu').addEventListener('click', function () {
    if (!dmPeer) return;
    document.getElementById('dm-sheet-title').textContent = 'Conversation with ' + dmPeer.name;
    document.getElementById('btn-dm-block').classList.toggle('u-hide', dmBlocked());
    openSheet(document.getElementById('dm-sheet'));
  });
  document.getElementById('btn-dm-cancel').addEventListener('click', closeSheets);
  document.getElementById('btn-dm-report').addEventListener('click', function () {
    closeSheets();
    if (dmPeer) toast('Reported ' + dmPeer.name + ' to moderators');
  });
  document.getElementById('btn-dm-block').addEventListener('click', function () {
    if (dmPeer) {
      for (var i = 0; i < DM_META.length; i++) if (DM_META[i].peer === dmPeer.name) DM_META[i].blocked = true;
      toast('Blocked ' + dmPeer.name);
      addBlock(dmPeer.name, dmPeer.i);
      renderDm();
      renderHub();
    }
    closeSheets();
  });


  /* ═══ v7 · auth suite, settings, psychology refinements ═════════
     Demo state + every new screen wired through the same registry,
     the same [data-goto] delegation and the same sheet/toast helpers. */

  var S = { signedUp: false, demo: false, email: '', healthDone: false, chosen: false, onboarded: false,
            photoDone: false, exporting: false, avV: '', avI: 'YO',
            globalRules: false, avChar: null };   /* v8-g6 · house-rules agreement + saved generated avatar · v8-g8 demo browse flag */
  var fmt = function (n) { return n.toLocaleString('en-US'); };
  var JR_DEFAULT = 'Hi! I\u2019m a daily walker \u2014 around 9,000 steps, most of it before 8am. I\u2019d love to join {squad} and keep the streak going.';
  var GO_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>';

  function gotoConnect() {
    document.getElementById('onb-intro').hidden = true;
    document.getElementById('onb-connect').hidden = false;
    showScreen('scr-onboarding');
  }

  /* ── splash · v3 · waits for the user (no auto-advance) ──────────── */
  var splashTimer = null;
  /* FIX (login-bounce) · gate forgiveness: derive the resume page from the
     restored flags instead of bouncing anyone whose signedUp isn't true.
     Only a truly fresh state (nothing set at all) boots to signup. */
  function gateResume() {
    if (S.demo && !S.signedUp) return 'scr-today';   /* FIX (demo) · browse-without-account lands on Today, never bounces to signup */
    if (S.onboarded) return 'scr-today';
    if (S.chosen || S.healthDone || S.signedUp) return 'scr-choose';
    if (S.email)     return 'scr-verify';
    return 'scr-signup';
  }
  function bootSplash() {
    /* v3 · the 1.2s auto-advance timer is removed — the splash stays until the
       user acts (CTA / login link route through the shared [data-goto] gate). */
    showScreen('scr-splash');
    clearTimeout(splashTimer);   /* safe cleanup — nothing is scheduled anymore */
  }
  /* ── demo browse · the restored browse-without-account path ─────────
     Sets the read-only demo flags, persists with a forced save (explicit
     user intent, then immediate navigation — same contract as reset),
     and lands on index.html/Today. signedUp stays false so the Today
     reciprocity card keeps offering the real account CTA. */
  function enterDemo() {
    S.demo = true; S.onboarded = true; saveNow(true);
    location.href = 'index.html';
  }

  /* ── progress rails (never zero — sign-up is counted) ────────────── */
  function setRail(base, step) {
    var lbl = document.getElementById(base + '-label');
    var fill = document.getElementById(base + '-fill');
    if (!lbl || !fill) return;
    var parts = ['Step ' + step + ' of 5'];
    if (S.signedUp) parts.push('Sign-up {{ic:check}}');
    if (S.healthDone) parts.push('Health {{ic:check}}');
    lbl.innerHTML = safeHTML(parts.join(' \u00b7 '));
    fill.style.width = (step / 5 * 100) + '%';
    var steps = lbl.parentNode.querySelector('.rail__steps');
    if (steps) {
      steps.children[0].className = S.signedUp ? 'done' : '';
      steps.children[1].className = S.healthDone ? 'done' : '';
      steps.children[2].className = 'done';
      steps.children[3].className = (base === 'rail-goal') ? 'done' : '';
    }
  }
  enterHooks['scr-choose'] = function () { setRail('rail-choose', 3); };
  enterHooks['scr-goal']   = function () { setRail('rail-goal', 4); };

  /* ── loss framing · streak chip (Today) — v10: banner → calm chip ──── */
  function updateShield() {
    var met = STEPS >= GOAL;
    document.getElementById('streak-chip').innerHTML =
      safeHTML(met ? 'Streak secured {{ic:check}}' : '{{ic:flame}} 12-day streak');
  }
  function renderPulse() {
    if (soloMode) return;
    var g = GROUPS[0], goal = 9000, short = 0, need = 0;
    g.members.forEach(function (m) { if (m.d < goal) { short++; need += goal - m.d; } });
    var ti = document.getElementById('pulse-title');
    var tx = document.getElementById('pulse-text');
    ti.textContent = 'Squad challenge';
    tx.innerHTML = safeHTML(short === 0
      ? 'All ' + g.members.length + ' members cleared 9,000 today {{ic:check}}'
      : short + ' of ' + g.members.length + ' short — squad needs ' + fmt(need) + ' steps');
  }
  /* ── reciprocity · numbers first, account ask as a bottom card ───── */
  function renderSaveStreak() {
    document.getElementById('save-streak-card').hidden = S.signedUp;
  }
  var _todayHook = enterHooks['scr-today'];
  enterHooks['scr-today'] = function () { if (_todayHook) _todayHook(); renderSaveStreak(); };
  document.getElementById('btn-save-streak').addEventListener('click', function () { showScreen('scr-signup'); });

  /* ── password show/hide + strength meter (shared) ────────────────── */
  document.querySelectorAll('.pw-eye').forEach(function (eye) {
    var inp = document.getElementById(eye.id.replace('eye-', ''));
    if (!inp) return;
    eye.addEventListener('click', function () {
      var reveal = inp.type === 'password';
      inp.type = reveal ? 'text' : 'password';
      eye.setAttribute('aria-pressed', String(reveal));
      eye.querySelector('.pw-off').classList.toggle('u-hide', reveal);
      eye.querySelector('.pw-on').classList.toggle('u-hide', !reveal);
    });
  });
  function pwScore(v) {
    var s = 0;
    if (v.length >= 8) s++;
    if (v.length >= 12) s++;
    if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++;
    if (/\d/.test(v)) s++;
    if (/[^A-Za-z0-9]/.test(v)) s++;
    return Math.min(4, Math.max(1, s));
  }
  function bindStrength(inputId) {
    var inp = document.getElementById(inputId);
    var fieldEl = inp.closest('.field');
    var bars = fieldEl.querySelectorAll('.strength i');
    var lab = fieldEl.querySelector('.strength-label');
    if (!bars.length || !lab) return;
    var words = ['Weak password', 'Fair password', 'Strong password', 'Very strong password'];
    var cols  = ['var(--danger)', 'var(--warn)', 'var(--primary-ink)', 'var(--primary-ink)'];
    var kls   = ['on-weak', 'on-fair', 'on-strong', 'on-strong'];
    inp.addEventListener('input', function () {
      var n = inp.value ? pwScore(inp.value) : 0;
      for (var i = 0; i < 4; i++) bars[i].className = i < n ? kls[n - 1] : '';
      lab.textContent = n ? words[n - 1] : '';
      lab.style.color = n ? cols[n - 1] : 'var(--muted)';
    });
  }
  bindStrength('rs-pass'); bindStrength('cp-new');

  /* ── sign up ─────────────────────────────────────────────────────── */
  var emailOk = function (v) { return /.+@.+\..+/.test(v); };
  function goVerify(email) {
    S.email = email; saveNow();                                 /* FIX · gate resume needs email even if verify reloads */
    document.getElementById('verify-mail').textContent = email;
    codeBoxes.forEach(function (b) { b.value = ''; });
    document.getElementById('btn-verify-submit').disabled = true;
    document.getElementById('vf-err').textContent = '';
    showScreen('scr-verify');
    codeBoxes[0].focus({ preventScroll: true });
  }
  document.getElementById('btn-signup-submit').addEventListener('click', function () {
    var name = document.getElementById('su-name').value.trim();
    var email = document.getElementById('su-email').value.trim();
    var pass = document.getElementById('su-pass').value;
    var err = document.getElementById('su-err');
    if (!name)  { err.textContent = 'Add your name so the squad knows who you are'; document.getElementById('su-name').focus(); return; }
    if (!emailOk(email)) { err.textContent = 'That email looks off — check it?'; document.getElementById('su-email').focus(); return; }
    if (pass.length < 8) { err.textContent = 'Passwords need 8+ characters'; document.getElementById('su-pass').focus(); return; }
    err.textContent = '';
    goVerify(email);
    toast('Code sent to ' + email);
  });
  [['btn-signup-apple', 'you@icloud.com'], ['btn-signup-google', 'you@gmail.com']].forEach(function (pair) {
    document.getElementById(pair[0]).addEventListener('click', function () {
      goVerify(pair[1]);
      toast(pair[0].indexOf('apple') > -1 ? 'Apple account linked — verify to finish' : 'Google account linked — verify to finish');
    });
  });
  document.getElementById('btn-signup-skip').addEventListener('click', function () {
    enterDemo();      /* FIX (demo) · browse-without-account: was the broken SPA gotoConnect() hop (guest path lost in the multi-page split) */
  });
  document.getElementById('btn-signup-skip-x').addEventListener('click', function () {
    enterDemo();      /* FIX (demo) · same demo entry as the text link */
  });

  /* ── email verification · 6 boxes ────────────────────────────────── */
  var codeBoxes = Array.prototype.slice.call(document.querySelectorAll('.codebox'));
  function codeValue() { return codeBoxes.map(function (b) { return b.value; }).join(''); }
  function verifyComplete() {
    S.signedUp = true; S.demo = false; saveNow();                 /* FIX · persist BEFORE nav/toast · demo ends when a real account is created */
    toast('Email verified — welcome to StrideSquad');
    renderSaveStreak();
    gotoConnect();
  }
  function checkCode() {
    var full = codeValue().length === 6;
    document.getElementById('btn-verify-submit').disabled = !full;
    if (full) verifyComplete();
  }
  codeBoxes.forEach(function (b, i) {
    b.addEventListener('input', function () {
      b.value = b.value.replace(/\D/g, '').slice(-1);
      document.getElementById('vf-err').textContent = '';
      if (b.value && i < 5) codeBoxes[i + 1].focus({ preventScroll: true });
      checkCode();
    });
    b.addEventListener('keydown', function (e) {
      if (e.key === 'Backspace' && !b.value && i > 0) {
        e.preventDefault();
        codeBoxes[i - 1].value = '';
        codeBoxes[i - 1].focus({ preventScroll: true });
        checkCode();
      }
    });
    b.addEventListener('paste', function (e) {
      e.preventDefault();
      var d = ((e.clipboardData || window.clipboardData).getData('text') || '').replace(/\D/g, '').slice(0, 6);
      for (var k = 0; k < 6; k++) codeBoxes[k].value = d.charAt(k);
      codeBoxes[Math.min(d.length || 1, 5)].focus({ preventScroll: true });
      checkCode();
    });
  });
  document.getElementById('btn-verify-submit').addEventListener('click', function () {
    if (codeValue().length < 6) { document.getElementById('vf-err').textContent = 'Enter all 6 digits'; return; }
    verifyComplete();
  });
  document.getElementById('btn-resend-code').addEventListener('click', function () {
    toast('New code sent to ' + (S.email || 'your email'));
  });

  /* ── log in / forgot / reset / change ────────────────────────────── */
  document.getElementById('btn-login-submit').addEventListener('click', function () {
    var email = document.getElementById('li-email').value.trim();
    var err = document.getElementById('li-err');
    if (!emailOk(email)) { err.textContent = 'Enter the email you signed up with'; document.getElementById('li-email').focus(); return; }
    S.signedUp = true; S.demo = false; S.email = email; saveNow();  /* FIX · persist login before any navigation · demo mode ends on real login */
    err.textContent = '';
    toast('Welcome back');
    renderSaveStreak();
    if (!S.healthDone) gotoConnect();
    else showScreen(S.onboarded ? 'scr-today' : 'scr-choose');
  });
  document.getElementById('btn-login-close').addEventListener('click', function () { showScreen('scr-signup'); });
  document.getElementById('btn-login-demo').addEventListener('click', function () { enterDemo(); });   /* FIX (demo) · browse entry for login page */

  document.getElementById('btn-forgot-send').addEventListener('click', function () {
    var email = document.getElementById('fg-email').value.trim();
    var err = document.getElementById('fg-err');
    if (!emailOk(email)) { err.textContent = 'We need a real email to send the link'; document.getElementById('fg-email').focus(); return; }
    S.email = email; err.textContent = '';
    document.getElementById('forgot-mail').textContent = email;
    document.getElementById('forgot-form').hidden = true;
    document.getElementById('forgot-sent').hidden = false;
  });
  document.getElementById('btn-forgot-resend').addEventListener('click', function () {
    toast('Reset link re-sent to ' + S.email);
  });
  document.getElementById('btn-forgot-open').addEventListener('click', function () {
    document.getElementById('forgot-form').hidden = false;
    document.getElementById('forgot-sent').hidden = true;
    showScreen('scr-reset');
  });
  document.getElementById('btn-reset-save').addEventListener('click', function () {
    var p1 = document.getElementById('rs-pass').value, p2 = document.getElementById('rs-pass2').value;
    var err = document.getElementById('rs-err');
    if (p1.length < 8) { err.textContent = '8+ characters — the meter is honest'; return; }
    if (p1 !== p2) { err.textContent = 'The two passwords don\u2019t match'; return; }
    err.textContent = '';
    toast('Password updated — log in');
    showScreen('scr-login');
  });
  document.getElementById('btn-change-pass').addEventListener('click', function () {
    var cur = document.getElementById('cp-cur').value, nw = document.getElementById('cp-new').value;
    var err = document.getElementById('cp-err');
    if (!cur) { err.textContent = 'Confirm your current password first'; return; }
    if (nw.length < 8) { err.textContent = 'The new password needs 8+ characters'; return; }
    err.textContent = '';
    toast('Password updated');
    showScreen('scr-settings-account');
  });

  /* ── settings · account submenu ──────────────────────────────────── */
  function refreshAcctRow() {
    var t = document.getElementById('acct-auth-title');
    var s = document.getElementById('acct-auth-sub');
    var c = document.getElementById('btn-acct-auth');
    if (S.signedUp) {
      t.textContent = 'Signed in';
      s.textContent = S.email || 'you@stridesquad.app';
      c.textContent = 'Switch account';
    } else {
      t.textContent = 'No account yet';
      s.textContent = 'Sign up to save your 12-day streak';
      c.textContent = 'Sign up';
    }
    document.getElementById('signout-sub').textContent =
      S.signedUp ? 'You\u2019re signed in as ' + (S.email || 'you@stridesquad.app') : 'Guest session — nothing is saved yet';
    var chip = document.getElementById('export-chip');
    chip.textContent = S.exporting ? 'Requested' : 'Ready';
    chip.classList.toggle('status-chip--done', S.exporting);
  }
  enterHooks['scr-settings-account'] = refreshAcctRow;
  document.getElementById('btn-acct-auth').addEventListener('click', function () {
    showScreen(S.signedUp ? 'scr-login' : 'scr-signup');
  });
  document.getElementById('btn-export').addEventListener('click', function () {
    S.exporting = true;
    refreshAcctRow();
    toast('Export requested — .zip emailed within 24h');
  });
  /* ── logout · one shared path for profile's Log out + Settings>Account>Sign out ──
     Clears localStorage 'ss.v8.state' completely and routes signup.html.
     Works for signed-up and demo users alike; demo users see an extra
     "progress will not be saved" line in the profile confirm sheet. */
  var _loggingOut = false;
  function doLogout() {
    _loggingOut = true;                       /* stop lifecycle saves from resurrecting the cleared state */
    try { localStorage.removeItem(SS_KEY); } catch (e) {}
    location.href = 'signup.html';
  }
  var logoutSheet = document.getElementById('logout-sheet');
  document.getElementById('btn-profile-logout').addEventListener('click', function () {
    document.getElementById('logout-sheet-demo').hidden = !S.demo;   /* demo note only for demo sessions */
    openSheet(logoutSheet);
  });
  document.getElementById('btn-logout-cancel').addEventListener('click', closeSheets);
  document.getElementById('btn-logout-confirm').addEventListener('click', doLogout);
  document.getElementById('btn-signout').addEventListener('click', function () {
    doLogout();                               /* single shared logout handler */
  });

  /* ── delete account · confirm sheet + final state ────────────────── */
  var deleteSheet = document.getElementById('delete-sheet');
  var delInput = document.getElementById('del-input');
  var delBtn = document.getElementById('btn-delete-acct');
  document.getElementById('btn-open-delete').addEventListener('click', function () {
    delInput.value = '';
    delBtn.disabled = true;
    openSheet(deleteSheet);
  });
  delInput.addEventListener('input', function () {
    delBtn.disabled = delInput.value !== 'DELETE';
  });
  document.getElementById('btn-delete-cancel').addEventListener('click', closeSheets);
  document.getElementById('btn-delete-acct').addEventListener('click', function () {
    if (delInput.value !== 'DELETE') return;
    S.signedUp = false; S.email = ''; S.demo = false; saveNow(true);  /* FIX · persist sign-out immediately (forced reset) · demo flag cleared too */
    closeSheets();
    renderSaveStreak();
    toast('Account deleted');
    showScreen('scr-account-deleted');
  });
  document.getElementById('btn-start-fresh').addEventListener('click', function () { resetDemo(); });

  /* ── edit profile · initials + colored photo picker ──────────────── */
  var epPrev = document.getElementById('ep-preview');
  function epSync() {
    epPrev.className = 'avatar avatar--lg' + (S.avV && !S.avChar ? ' avatar--' + S.avV : '') + (S.avChar ? ' avatar--char' : '');
    if (S.avChar) epPrev.innerHTML = avCharSvg(S.avChar, 56);
    else epPrev.textContent = S.avI;
    /* FIX(qa) · KI-2 — round-trip the stored display name so reopening the
       form after a rename shows it (static markup always said "You"). */
    document.getElementById('ep-name').value = S.displayName || 'You';
    document.getElementById('ep-initials').value = S.avI;
    document.querySelectorAll('[data-av]').forEach(function (sw) {
      sw.classList.toggle('active', !S.avChar && sw.dataset.av === S.avV);
      sw.textContent = S.avI;
    });
  }
  enterHooks['scr-edit-profile'] = epSync;
  document.querySelectorAll('[data-av]').forEach(function (sw) {
    sw.addEventListener('click', function () { S.avChar = null; S.avV = sw.dataset.av; paintYouAvatars(); epSync(); });
  });
  document.getElementById('ep-initials').addEventListener('input', function () {
    S.avI = (this.value.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()) || 'YO';
    S.avChar = null;
    paintYouAvatars();
    epSync();
  });
  document.getElementById('btn-save-profile').addEventListener('click', function () {
    var name = document.getElementById('ep-name').value.trim() || 'You';
    S.photoDone = true;
    var av = document.getElementById('pf-avatar');
    av.className = 'avatar avatar--lg' + (S.avV && !S.avChar ? ' avatar--' + S.avV : '');
    av.textContent = S.avI;
    paintYouAvatars();
    document.getElementById('pf-name').textContent = name;
    S.displayName = name;
    S.username = (document.getElementById('ep-username').value.trim() || 'you').replace(/[^A-Za-z0-9._-]/g, '').slice(0, 20) || 'you';
    S.bio = document.getElementById('ep-bio').value.slice(0, 80);
    S.state = document.getElementById('ep-state').value;
    S.city = document.getElementById('ep-city').value;
    renderProfileG4();
    updateNudge();
    toast('Profile saved — 5 of 5 \u00b7 100% {{ic:check}}');
    showScreen('scr-profile');
  });
  function updateNudge() {
    var n = document.getElementById('profile-nudge');
    n.classList.toggle('u-hide', S.photoDone);
    if (!S.photoDone) document.getElementById('nudge-b').textContent = 'Profile \u00b7 4 of 5 \u00b7 80%';
  }
  enterHooks['scr-profile'] = updateNudge;

  /* ── linked accounts · connect/disconnect states ─────────────────── */
  var LA = {
    apple:  { on: true,  sub: ['Linked — sign in with Apple enabled', 'Not linked — link to sign in faster'] },
    google: { on: false, sub: ['Linked — sign in with Google enabled', 'Not linked — link to sign in faster'] },
    health: { on: true,  sub: ['Connected — steps read every 5 min', 'Paused — step sync is off, streak frozen'] }
  };
  Object.keys(LA).forEach(function (key) {
    var btn = document.getElementById('la-' + key);
    btn.addEventListener('click', function () {
      var st = LA[key];
      st.on = !st.on;
      var chip = document.getElementById('la-' + key + '-chip');
      chip.textContent = st.on ? (key === 'health' ? 'Linked' : 'Linked') : 'Not linked';
      chip.classList.toggle('status-chip--done', st.on);
      btn.textContent = st.on ? 'Disconnect' : 'Connect';
      btn.classList.toggle('la-btn--off', !st.on);
      document.getElementById('la-' + key + '-sub').textContent = st.sub[st.on ? 0 : 1];
      if (key === 'health') {
        S.healthDone = st.on; saveNow();
        toast(st.on ? 'Health sync resumed' : 'Health sync paused — streak frozen');
      } else {
        toast((st.on ? 'Linked ' : 'Unlinked ') + (key === 'apple' ? 'Apple' : 'Google'));
      }
    });
  });

  /* ── notifications submenu ───────────────────────────────────────── */
  /* FIX(qa) · KI-3 — notification switches now persist to S.notifs (saveSS
     snapshots the whole S object) and are restored on each screen's enter. */
  function notifPersist(id, on) { (S.notifs || (S.notifs = {}))[id] = !!on; saveNow(); }
  function notifRestore(ids) {
    var ns = S.notifs || {};
    ids.forEach(function (id) {
      if (!(id in ns)) return;
      var sw = document.getElementById(id);
      if (sw.getAttribute('data-stub')) return;   /* absent on this page */
      sw.setAttribute('aria-checked', String(ns[id]));
      if (id === 'sw-streak') document.getElementById('nr-time-row').style.display = ns[id] ? '' : 'none';
    });
  }
  var NOTIF_IDS = ['sw-streak', 'sw-gact', 'sw-chal', 'sw-quiet'];
  enterHooks['scr-settings-notifications'] = function () { notifRestore(NOTIF_IDS); };
  bindSwitch('sw-streak', function (on) {
    notifPersist('sw-streak', on);
    document.getElementById('nr-time-row').style.display = on ? '' : 'none';
    toast(on ? 'Streak reminders on' : 'Streak reminders off');
  });
  bindSwitch('sw-gact', function (on) { notifPersist('sw-gact', on); toast(on ? 'Group activity on' : 'Group activity off'); });
  bindSwitch('sw-chal', function (on) { notifPersist('sw-chal', on); toast(on ? 'Challenge alerts on' : 'Challenge alerts off'); });
  bindSwitch('sw-quiet', function (on) { notifPersist('sw-quiet', on); toast(on ? 'Quiet hours on — 10pm to 7am' : 'Quiet hours off'); });
  bindSwitch('sw-goalsoon', function (on) { notifPersist('sw-goalsoon', on); toast(on ? 'Goal visible to squad' : 'Goal hidden from squad'); });
  var TIMES = ['6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '9:00 PM'], tIdx = 1;
  document.getElementById('nr-time').addEventListener('click', function () {
    tIdx = (tIdx + 1) % TIMES.length;
    this.innerHTML = GO_SVG + ' ' + TIMES[tIdx];
    toast('Streak reminder set for ' + TIMES[tIdx]);
  });

  /* ── blocklist (+ count chip) ────────────────────────────────────── */
  var BLOCK_SEED = [{ name: 'SpamWalks99', i: 'SW', v: 'slate', reason: 'Spam links in the Global room', since: 'Nov 1' }];
  var BLOCKLIST = BLOCK_SEED.slice();
  var blocklistEl = document.getElementById('blocklist');
  var blocklistEmpty = document.getElementById('blocklist-empty');
  function updateBlockChip() {
    var chip = document.getElementById('block-count-chip');
    if (chip) chip.textContent = String(BLOCKLIST.length);
  }
  function addBlock(name, i) {
    for (var k = 0; k < BLOCKLIST.length; k++) if (BLOCKLIST[k].name === name) { updateBlockChip(); return; }
    var ini = i || name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase() || '??';
    BLOCKLIST.push({ name: name, i: ini, v: '', reason: 'Blocked by you', since: 'Today' });
    renderBlocklist();
  }
  function renderBlocklist() {
    blocklistEl.innerHTML = '';
    BLOCKLIST.forEach(function (b, bi) {
      var row = document.createElement('div');
      row.className = 'set-row';
      row.setAttribute('data-od-id', 'blocklist-row-' + bi);
      var who = document.createElement('div');
      who.className = 'set-row__t';
      who.style.display = 'flex'; who.style.alignItems = 'center'; who.style.gap = '12px';
      who.innerHTML = '<span class="avatar' + (b.v ? ' avatar--' + b.v : '') + '" aria-hidden="true">' + escapeHtml(b.i) + '</span>' +
        '<span style="min-width:0;"><b>' + escapeHtml(b.name) + '</b><span>Blocked ' + escapeHtml(b.since) + ' · ' + escapeHtml(b.reason) + '</span></span>';
      row.appendChild(who);
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'la-btn';
      btn.textContent = 'Unblock';
      btn.setAttribute('data-od-id', 'blocklist-unblock-' + bi);
      btn.addEventListener('click', function () {
        BLOCKLIST.splice(bi, 1);
        renderBlocklist();
        toast(b.name + ' unblocked');
      });
      row.appendChild(btn);
      blocklistEl.appendChild(row);
    });
    blocklistEmpty.classList.toggle('u-hide', BLOCKLIST.length > 0);
    updateBlockChip();
  }
  enterHooks['scr-blocklist'] = renderBlocklist;
  enterHooks['scr-settings-privacy'] = function () { updateBlockChip(); notifRestore(['sw-goalsoon']); };

  /* ── help · FAQ accordion + support ──────────────────────────────── */
  document.querySelectorAll('.faq__q').forEach(function (q) {
    q.addEventListener('click', function () {
      var ans = document.getElementById(q.getAttribute('aria-controls'));
      var open = q.getAttribute('aria-expanded') !== 'true';
      q.setAttribute('aria-expanded', String(open));
      ans.hidden = !open;
    });
  });
  document.getElementById('btn-support-mail').addEventListener('click', function () {
    toast('Opening your mail app — support@stridesquad.app');
  });

  /* ── about · reset demo ──────────────────────────────────────────── */
  function resetDemo() {
    S.signedUp = false; S.email = ''; S.healthDone = false; S.chosen = false; S.onboarded = false; S.demo = false;
    S.photoDone = false; S.exporting = false; S.avV = ''; S.avI = 'YO'; S.avChar = null; S.globalRules = false;
    soloMode = false; GOAL = 9000; soloGoal = 9000;
    saveNow(true);                                 /* FIX · fresh-state write lands immediately (forced reset) */
    BLOCKLIST = BLOCK_SEED.slice();
    LA.apple.on = true; LA.google.on = false; LA.health.on = true;
    var paintLa = function (key) {
      var st = LA[key];
      var chip = document.getElementById('la-' + key + '-chip');
      chip.textContent = st.on ? 'Linked' : 'Not linked';
      chip.classList.toggle('status-chip--done', st.on);
      var btn = document.getElementById('la-' + key);
      btn.textContent = st.on ? 'Disconnect' : 'Connect';
      btn.classList.toggle('la-btn--off', !st.on);
      document.getElementById('la-' + key + '-sub').textContent = st.sub[st.on ? 0 : 1];
    };
    Object.keys(LA).forEach(paintLa);
    document.getElementById('verify-mail').textContent = 'your inbox';
    renderBlocklist(); updateNudge(); renderSaveStreak();
    paintYouAvatars();
    refreshTodayGoal();
    toast('Prototype reset — back to first launch');
    bootSplash();
  }
  document.getElementById('btn-reset-demo').addEventListener('click', resetDemo);

  /* ── discover · sort chips (default Most active) ─────────────────── */
  var SEED_ORDER = PUBLIC_GROUPS.map(function (p) { return p.id; });
  var discoverSort = 'active';
  function sortPublic() {
    PUBLIC_GROUPS.sort(function (a, b) {
      if (discoverSort === 'active') return b.avg - a.avg;
      if (discoverSort === 'largest') return b.size - a.size;
      return SEED_ORDER.indexOf(a.id) - SEED_ORDER.indexOf(b.id);
    });
  }
  document.querySelectorAll('[data-sort]').forEach(function (b) {
    b.addEventListener('click', function () {
      discoverSort = b.dataset.sort;
      document.querySelectorAll('[data-sort]').forEach(function (x) { x.classList.toggle('active', x === b); });
      renderDiscover();
    });
  });

  /* ── wire the existing Create flow to the 9k smart default ───────── */
  syncSoloGoal(9000);

  /* ═══ v8-g1 · mission-control wiring ═════════════════════════════
     Ring → 'This week' strip · rank strip → squad detail · feed bait ·
     notifications inbox · Sole wallet tabs · nearby board. Same screen
     registry, same delegated navigation — nothing new to learn. */

  // Hero spiral · v10: ring body tap → stats?range=today; #ring-stats ghost icon
  // routes the same; week-strip is static and its tap routes stats?range=7d.
  var ringCard = document.getElementById('ring-card');
  var weekStrip = document.getElementById('today-week-strip');
  var ringStats = document.getElementById('ring-stats');
  var streakChip = document.getElementById('streak-chip');
  function toStats(range) { saveNow(); location.href = 'stats.html?range=' + encodeURIComponent(range); }
  ringCard.addEventListener('click', function () { toStats('today'); });
  ringCard.addEventListener('keydown', function (e) {
    if (e.target !== ringCard) return;
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toStats('today'); }
  });
  ringStats.addEventListener('click', function (e) { e.stopPropagation(); toStats('today'); });
  // chip lives inside the tappable card — own the click, keep the delegated route alive
  streakChip.addEventListener('click', function (e) {
    e.stopPropagation();
    showScreen('scr-achievements');
  });
  weekStrip.addEventListener('click', function () { toStats('7d'); });

  // Squad rank strip mini-cards → that squad's detail screen
  document.querySelectorAll('[data-rank-gid]').forEach(function (b) {
    b.addEventListener('click', function () { openGroup(b.dataset.rankGid); });
  });

  // Squad feed bait: 'Aisha passed you' opens the group thread (global room)
  document.getElementById('feed-aisha').addEventListener('click', function () { openChannel('global'); });

  /* ── notifications inbox ────────────────────────────────────────── */
  var NI = {
    trophy: '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17.5V21M7 4h10v4.5a5 5 0 0 1-10 0V4Z"/><path d="M7 5.5H4.2v1.6a3.2 3.2 0 0 0 3 3.2M17 5.5h2.8v1.6a3.2 3.2 0 0 1-3 3.2"/></svg>',
    up:     '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m0 0-5 5m5-5 5 5"/></svg>',
    heart:  '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.6-9.2-9A5.4 5.4 0 0 1 12 6.5 5.4 5.4 0 0 1 21.2 11c-2.2 4.4-9.2 9-9.2 9Z"/></svg>',
    person: '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>',
    coin:   '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12h7M12 8.5v7"/></svg>',
    users:  '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="16.8" cy="9.2" r="2.6"/><path d="M15.5 14.4a5 5 0 0 1 5 4.6"/></svg>',
    info:   '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle cx="12" cy="7.6" r=".9" fill="currentColor" stroke="none"/></svg>',
    moon:   '<svg class="ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"/></svg>'
  };
  var NOTIF = [
    { h: 'Squad activity', rows: [
      { ic: 'trophy', t: 'Maya K. hit 9,000 \u2014 new #1 in Sunrise Steppers', s: 'Today \u00b7 Sunrise Steppers board', m: '07:12', u: true, go: function () { openChannel('sunrise'); } },
      { ic: 'up', t: 'Aisha passed you on the global board', s: '20 min ago \u00b7 Global Chat', m: '08:24', u: true, go: function () { openChannel('global'); } }
    ] },
    { h: 'Cheers & friends', rows: [
      { ic: 'heart', t: 'Nina P. cheered your morning loop', s: 'Open the thread with Nina', m: '08:40', u: true, go: function () { openDm('Nina P.'); } },
      { ic: 'person', t: 'Kenji S. viewed your weekly summary', s: 'Open his walker card', m: '07:58', u: false, go: function () { openUserProfile({ n: 'Kenji S.', i: 'KS', v: 'slate' }, 0); } }
    ] },
    { h: 'Gifts', rows: [
      { ic: 'coin', cls: 'notif-ic--gift', t: 'Maya K. sent you +12 {{ic:coin}}', s: 'Tap to open your Sole wallet', m: '07:31', u: true, go: function () { showScreen('scr-wallet'); } }
    ] },
    { h: 'Join requests', rows: [
      { ic: 'users', t: 'TrailBlazers asked about your intro', s: 'Answer with a short hello from Discover', m: 'Yesterday', u: false, go: function () { openGroupsView('discover'); } }
    ] },
    { h: 'System', rows: [
      { ic: 'info', cls: 'notif-ic--sys', t: 'Privacy policy updated \u2014 plain words, 2 min read', s: 'Tap to read', m: 'Nov 3', u: false, go: function () { showScreen('scr-privacy-policy'); } },
      { ic: 'moon', cls: 'notif-ic--sys', t: 'Quiet hours on 10:00 PM \u2013 7:00 AM', s: 'Nothing pings during quiet hours', m: 'Tonight', u: false, go: function () { showScreen('scr-settings-notifications'); } }
    ] }
  ];
  function notifUnread() {
    var n = 0;
    NOTIF.forEach(function (sec) { sec.rows.forEach(function (r) { if (r.u) n++; }); });
    return n;
  }
  function syncBellDots() {
    var none = notifUnread() === 0;
    document.querySelectorAll('[data-bell-dot]').forEach(function (d) { d.classList.toggle('u-hide', none); });
  }
  var notifListEl = document.getElementById('notif-list');
  function renderNotif() {
    notifListEl.innerHTML = '';
    NOTIF.forEach(function (sec, si) {
      notifListEl.insertAdjacentHTML('beforeend', '<p class="hub-h">' + escapeHtml(sec.h) + '</p>');
      sec.rows.forEach(function (r, ri) {
        var row = document.createElement('button');
        row.type = 'button';
        row.className = 'notif-row';
        row.setAttribute('data-od-id', 'notif-row-' + si + '-' + ri);
        row.innerHTML =
          NI[r.ic] +
          '<span class="notif-row__t"><b>' + safeHTML(r.t) + '</b><span>' + safeHTML(r.s) + '</span></span>' +
          '<span class="notif-row__end"><span class="notif-row__time">' + escapeHtml(r.m) + '</span>' +
          (r.u ? '<span class="unread-dot" aria-label="Unread"></span>' : '') + '</span>';
        row.addEventListener('click', function () {
          r.u = false;
          syncBellDots();
          renderNotif();
          r.go();
        });
        notifListEl.appendChild(row);
      });
    });
    document.getElementById('btn-notif-read').classList.toggle('u-hide', notifUnread() === 0);
  }
  document.getElementById('btn-notif-read').addEventListener('click', function () {
    NOTIF.forEach(function (sec) { sec.rows.forEach(function (r) { r.u = false; }); });
    syncBellDots();
    renderNotif();
    toast('All caught up {{ic:check}}');
  });
  enterHooks['scr-notif'] = renderNotif;

  /* ── Sole wallet · v8-g5 — live Soles economy (one state object) ──
     SOLE drives every Sole surface: header pills, wallet, Today bait,
     store, gift sends, buddy toasts, Plus badges and Settings row. */
  function setWalletTab(k) {
    document.querySelectorAll('[data-wtab]').forEach(function (b) { b.classList.toggle('active', b.dataset.wtab === k); });
    ['stickers', 'avatar', 'gifts', 'premium'].forEach(function (t) {
      document.getElementById('wallet-panel-' + t).hidden = t !== k;
    });
  }
  document.querySelectorAll('[data-wtab]').forEach(function (b) {
    b.addEventListener('click', function () { setWalletTab(b.dataset.wtab); });
  });

  var SOLE = {
    bal: 128, today: 12, cap: 15,
    ownedStk: [true, true, true, true, false, false, false, false],
    ownedAv: [false, false, false, false, false, false],
    equipped: -1,
    subscribed: false, plan: 'monthly'
  };
  var PLAN_LABEL = { monthly: 'Monthly', annual: 'Annual' };
  var PLAN_PRICE = { monthly: '$6.99', annual: '$39.99' };
  var PLAN_UNIT = { monthly: '/mo', annual: '/yr' };
  var PACKS = [
    { e: '{{stk:coins}}', n: 'Starter Stack',  coins: 500,  price: '$0.99', best: false },
    { e: '{{stk:coins}}', n: 'Squad Stash',    coins: 2900, price: '$4.99', best: true },
    { e: '{{stk:coins}}', n: 'Marathon Hoard', coins: 6500, price: '$9.99', best: false }
  ];
  var AVATARS = [
    { e: '{{stk:cap}}', n: 'Trail Cap',       p: 40, tint: 'slate' },
    { e: '{{stk:visor}}', n: 'Sunset Visor',    p: 45, tint: 'lime'  },
    { e: '{{stk:helmet}}', n: 'Ridge Helmet',    p: 55, tint: 'slate' },
    { e: '{{stk:sunhat}}', n: 'Safari Hat',      p: 60, tint: 'gold'  },
    { e: '{{stk:palette}}', n: 'Dawn Palette',    p: 70, tint: 'lime'  },
    { e: '{{ic:spark}}',    n: 'Gold Dust Palette', p: 80, tint: 'gold' }
  ];
  var FEED = [
    { v: '+7 {{ic:coin}}', t: 'Steps credit',     s: '1,000 steps = 1 {{ic:coin}} · 7,000 banked',    m: '06:58' },
    { v: '+5 {{ic:coin}}', t: 'Goal bonus',       s: 'First goal of the day',                m: '07:12' },
    { v: '+1 {{ic:coin}}', t: 'Cheer from Nina',  s: 'Nina P. cheered your morning loop',    m: '09:02' },
    { v: '+2 {{ic:coin}}', t: 'Event attended',   s: 'Saturday 7am Park Walk · laps logged', m: '08:35' }
  ];
  var equipBack = null;

  function soleSync() {
    document.querySelectorAll('.sole-pill').forEach(function (p) {
      var bn = p.querySelector('b');
      var it = p.querySelector('i');
      if (bn) bn.textContent = String(SOLE.bal);
      if (it) it.textContent = '+' + SOLE.today + ' today';
      p.setAttribute('aria-label', 'Sole wallet — ' + SOLE.bal + ' coins, up ' + SOLE.today + ' today');
    });
    var el;
    if ((el = document.getElementById('wallet-bal'))) el.innerHTML = safeHTML(fmt(SOLE.bal) + ' {{ic:coin}}');
    if ((el = document.getElementById('wallet-today'))) el.textContent = '+' + SOLE.today + ' today';
    if ((el = document.getElementById('wallet-cap-fill'))) el.style.width = Math.round(SOLE.today / SOLE.cap * 100) + '%';
    if ((el = document.getElementById('wallet-cap-note'))) el.innerHTML = safeHTML(SOLE.today + ' of ' + SOLE.cap + ' {{ic:coin}} earned today');
    if ((el = document.getElementById('bait-head'))) el.innerHTML = safeHTML(SOLE.today < SOLE.cap
      ? (SOLE.cap - SOLE.today) + ' {{ic:coin}} short of your daily cap'
      : 'Daily cap reached — coins bank at midnight');
    if ((el = document.getElementById('bait-sub'))) el.innerHTML = safeHTML(fmt(SOLE.bal) + ' {{ic:coin}} · ' + SOLE.today + ' of ' + SOLE.cap + ' today · banks at midnight');
    var pf = document.getElementById('pf-plus-chip'); if (pf) pf.classList.toggle('u-hide', !SOLE.subscribed);
    var lp = document.getElementById('lby-plus'); if (lp) lp.classList.toggle('u-hide', !SOLE.subscribed);
    var sb = document.getElementById('acct-plus-sub');
    if (sb) sb.textContent = SOLE.subscribed
      ? 'Subscribed · ' + PLAN_LABEL[SOLE.plan] + ' ' + PLAN_PRICE[SOLE.plan] + ' — manage or unsubscribe'
      : 'Not subscribed — see Store › Premium';
    var stc = document.getElementById('acct-plus-state');
    if (stc) { stc.textContent = SOLE.subscribed ? 'On' : 'Off'; stc.classList.toggle('status-chip--on', SOLE.subscribed); }
    renderPlusCard();
    renderFeed();
  }
  function soleEarn(n, feedRow) {
    SOLE.bal += n;
    SOLE.today = Math.min(SOLE.cap, SOLE.today + n);
    if (feedRow) FEED.unshift(feedRow);
    soleSync();
  }
  function soleSpend(n) {
    if (SOLE.bal < n) return false;
    SOLE.bal -= n;
    soleSync();
    return true;
  }
  function jumpToPacks() { setWalletTab('premium'); showScreen('scr-wallet'); }
  var sparkTimer = null;
  function soleSpark(msg) {
    toast(msg);
    var t = document.getElementById('toast');
    t.classList.add('spark');
    clearTimeout(sparkTimer);
    sparkTimer = setTimeout(function () { t.classList.remove('spark'); }, 750);
  }

  function renderFeed() {
    var list = document.getElementById('wallet-feed-list');
    if (!list) return;
    list.innerHTML = '';
    FEED.slice(0, 6).forEach(function (f, i) {
      var row = document.createElement('div');
      row.className = 'notif-row';
      row.style.borderRadius = '14px';
      row.setAttribute('data-od-id', 'wallet-earn-' + (i + 1));
      row.innerHTML =
        '<span class="echo" aria-hidden="true">' + safeHTML(f.v) + '</span>' +
        '<div class="notif-row__t"><b>' + escapeHtml(f.t) + '</b><span>' + safeHTML(f.s) + '</span></div>' +
        '<span class="notif-row__end"><span class="notif-row__time">' + escapeHtml(f.m) + '</span></span>';
      list.appendChild(row);
    });
    var cap = document.createElement('p');
    cap.className = 'cap-row';
    cap.setAttribute('data-od-id', 'wallet-cap-notice');
    cap.innerHTML = safeHTML(SOLE.today < SOLE.cap
      ? '{{ic:clock}} ' + (SOLE.cap - SOLE.today) + ' {{ic:coin}} left today · banks at midnight'
      : '{{ic:flag}} Daily cap hit — today is banked');
    list.appendChild(cap);
  }

  /* stickers + gifts share one grid and one owned map */
  function stickerGrid(hostId) {
    var host = document.getElementById(hostId);
    if (!host) return;
    host.innerHTML = '';
    var grid = document.createElement('div');
    grid.className = 'gift-grid';
    grid.setAttribute('role', 'group');
    grid.setAttribute('aria-label', hostId === 'store-gifts' ? 'Gift stickers' : 'Sticker store');
    GIFTS.forEach(function (g, gi) {
      var owned = SOLE.ownedStk[gi];
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'gift-item' + (owned ? ' owned' : '');
      b.setAttribute('data-od-id', hostId + '-item-' + gi);
      b.innerHTML =
        '<span class="gift-item__e" aria-hidden="true">' + icSvgField(g.e) + '</span>' +
        '<span class="gift-item__n">' + escapeHtml(g.n) + '</span>' +
        '<span class="gift-item__p' + (owned ? ' own' : (g.p === 0 ? ' free' : '')) + '">' +
        (owned ? 'Owned ' + ic('check') : (g.p === 0 ? 'Free' : g.p + ' ' + ic('coin'))) + '</span>';
      b.addEventListener('click', function () {
        if (owned) { toast(g.n + ' is already yours {{ic:check}}'); return; }
        if (SOLE.bal < g.p) { toast('Not enough {{ic:coin}} — see packs'); jumpToPacks(); return; }
        soleSpend(g.p);
        SOLE.ownedStk[gi] = true;
        renderStickers();
        bumpPill();
        soleSpark('{{ic:spark}} ' + g.n + ' unlocked · ' + fmt(SOLE.bal) + ' {{ic:coin}} left');
      });
      grid.appendChild(b);
    });
    host.appendChild(grid);
  }
  function renderStickers() { stickerGrid('store-stickers'); stickerGrid('store-gifts'); }

  /* avatar cosmetics — buy, then Equip toggles the profile tint */
  function applyEquip(ai) {
    if (ai >= 0 && equipBack === null) equipBack = S.avV;
    var tint = ai >= 0 ? AVATARS[ai].tint : (equipBack || '');
    S.avV = tint;
    var av = document.getElementById('pf-avatar');
    if (av) av.className = 'avatar avatar--lg' + (tint && !S.avChar ? ' avatar--' + tint : '');
    paintYouAvatars();
  }
  function renderAvatarStore() {
    var host = document.getElementById('store-avatar');
    if (!host) return;
    host.innerHTML = '';
    var grid = document.createElement('div');
    grid.className = 'cos-grid';
    AVATARS.forEach(function (a, ai) {
      var owned = SOLE.ownedAv[ai];
      var eq = SOLE.equipped === ai;
      var card = document.createElement('div');
      card.className = 'cos-card' + (eq ? ' equipped' : '');
      card.setAttribute('data-od-id', 'cos-item-' + ai);
      card.innerHTML =
        '<div class="cos-card__top"><span class="cos-e" aria-hidden="true">' + icSvgField(a.e) + '</span>' +
        '<span><b class="cos-n">' + escapeHtml(a.n) + '</b><span class="cos-p">' +
        (owned ? (eq ? 'Equipped ' + ic('check') : 'Owned ' + ic('check')) : a.p + ' ' + ic('coin')) + '</span></span></div>' +
        '<button type="button" class="cos-act ' + (owned ? 'cos-act--eq' : 'cos-act--buy') + '" data-od-id="cos-act-' + ai + '">' +
        (owned ? (eq ? 'Unequip' : 'Equip') : 'Buy — ' + a.p + ' ' + ic('coin')) + '</button>';
      card.querySelector('.cos-act').addEventListener('click', function () {
        if (!owned) {
          if (SOLE.bal < a.p) { toast('Not enough {{ic:coin}} — see packs'); jumpToPacks(); return; }
          soleSpend(a.p);
          SOLE.ownedAv[ai] = true;
          bumpPill();
          soleSpark('{{ic:spark}} ' + a.n + ' unlocked · ' + fmt(SOLE.bal) + ' {{ic:coin}} left');
        } else {
          applyEquip(eq ? -1 : ai);
          SOLE.equipped = eq ? -1 : ai;
        }
        renderAvatarStore();
      });
      grid.appendChild(card);
    });
    host.appendChild(grid);
  }

  /* coin packs + IAP-style sheet */
  var curPack = null;
  function renderPacks() {
    var host = document.getElementById('store-packs');
    if (!host) return;
    host.innerHTML = '';
    PACKS.forEach(function (p, pi) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pack-row' + (p.best ? ' pack-row--best' : '');
      b.setAttribute('data-od-id', 'coin-pack-' + pi);
      b.innerHTML =
        '<span class="pack-e" aria-hidden="true">' + icSvgField(p.e) + '</span>' +
        '<span class="pack-t"><b>' + escapeHtml(p.n) + (p.best ? ' <span class="chip chip--rec best-badge" aria-hidden="true">Best value</span>' : '') + '</b>' +
        '<span>+' + fmt(p.coins) + ' ' + ic('coin') + '</span></span>' +
        '<span class="pack-price">' + p.price + '</span>';
      b.addEventListener('click', function () { openPackSheet(p); });
      host.appendChild(b);
    });
  }
  function openPackSheet(p) {
    curPack = p;
    document.getElementById('pack-glyph').innerHTML = icSvgField(p.e);
    document.getElementById('pack-name').textContent = p.n;
    document.getElementById('pack-coins').innerHTML = safeHTML('+' + fmt(p.coins) + ' {{ic:coin}} to your balance');
    document.getElementById('pack-price').textContent = p.price;
    document.getElementById('btn-pack-buy').textContent = 'Buy — ' + p.price;
    openSheet(document.getElementById('pack-sheet'));
  }
  document.getElementById('btn-pack-buy').addEventListener('click', function () {
    if (!curPack) return;
    SOLE.bal += curPack.coins;
    FEED.unshift({ v: '+' + fmt(curPack.coins) + ' {{ic:coin}}', t: 'Coin pack', s: curPack.n + ' · mock purchase, no real charge', m: hhmm() });
    closeSheets();
    soleSync();
    bumpPill();
    soleSpark('{{ic:spark}} +' + fmt(curPack.coins) + ' {{ic:coin}} added · balance ' + fmt(SOLE.bal));
  });
  document.getElementById('btn-pack-close').addEventListener('click', closeSheets);
  document.getElementById('btn-pack-cancel').addEventListener('click', closeSheets);

  /* StrideSquad+ */
  var plusMode = 'confirm';
  function renderPlusCard() {
    var sub = document.getElementById('btn-plus-subscribe');
    var man = document.getElementById('btn-plus-manage');
    if (!sub || !man) return;
    sub.textContent = 'Subscribe — ' + PLAN_PRICE[SOLE.plan] + PLAN_UNIT[SOLE.plan];
    sub.classList.toggle('u-hide', SOLE.subscribed);
    man.classList.toggle('u-hide', !SOLE.subscribed);
    document.querySelectorAll('[data-plusplan]').forEach(function (b) {
      b.classList.toggle('sel', b.dataset.plusplan === SOLE.plan);
    });
  }
  function openPlusSheet(mode) {
    plusMode = mode;
    document.getElementById('plus-sheet-plan').textContent = 'StrideSquad+ · ' + PLAN_LABEL[SOLE.plan];
    document.getElementById('plus-sheet-price').textContent = PLAN_PRICE[SOLE.plan];
    document.getElementById('plus-sheet-period').textContent = SOLE.plan === 'annual' ? 'per year' : 'per month';
    var title = document.getElementById('plus-sheet-title');
    var desc = document.getElementById('plus-sheet-desc');
    var confirm = document.getElementById('btn-plus-confirm');
    var unsub = document.getElementById('btn-plus-unsub');
    if (mode === 'confirm') {
      title.textContent = 'Confirm subscription';
      desc.innerHTML = safeHTML('No real charge — first month lands 500 {{ic:coin}}.');
      confirm.textContent = 'Subscribe — ' + PLAN_PRICE[SOLE.plan] + PLAN_UNIT[SOLE.plan];
      confirm.classList.remove('u-hide');
      unsub.classList.add('u-hide');
    } else {
      title.textContent = 'StrideSquad+ · manage';
      desc.textContent = 'Renews ' + (SOLE.plan === 'annual' ? 'yearly' : 'monthly') + ' at ' + PLAN_PRICE[SOLE.plan] + ' — mock billing. Unsubscribe keeps perks until period end.';
      confirm.classList.add('u-hide');
      unsub.classList.remove('u-hide');
    }
    openSheet(document.getElementById('plus-sheet'));
  }
  document.querySelectorAll('[data-plusplan]').forEach(function (b) {
    b.addEventListener('click', function () { SOLE.plan = b.dataset.plusplan; renderPlusCard(); });
  });
  document.getElementById('btn-plus-subscribe').addEventListener('click', function () { openPlusSheet('confirm'); });
  document.getElementById('btn-plus-manage').addEventListener('click', function () { openPlusSheet('manage'); });
  document.getElementById('btn-plus-confirm').addEventListener('click', function () {
    closeSheets();
    if (SOLE.subscribed) return;
    SOLE.subscribed = true;
    soleEarn(500, { v: '+500 {{ic:coin}}', t: 'StrideSquad+ stipend', s: 'Your first monthly 500 {{ic:coin}} just landed', m: hhmm() });
    bumpPill();
    soleSpark('{{ic:spark}} Welcome to StrideSquad+ — +500 {{ic:coin}} stipend added');
  });
  document.getElementById('btn-plus-unsub').addEventListener('click', function () {
    SOLE.subscribed = false;
    closeSheets();
    soleSync();
    toast('Cancelled — perks stay until period end');
  });
  document.getElementById('btn-plus-close').addEventListener('click', closeSheets);
  document.getElementById('btn-plus-cancel').addEventListener('click', closeSheets);
  document.getElementById('acct-plus-row').addEventListener('click', function () {
    if (SOLE.subscribed) openPlusSheet('manage');
    else { jumpToPacks(); toast('Pick a StrideSquad+ plan'); }
  });

  function renderWalletStore() { renderStickers(); renderAvatarStore(); renderPacks(); }
  enterHooks['scr-wallet'] = function () { renderWalletStore(); soleSync(); };
  soleSync();

  /* ── Nearby (v8-g2): opt-in gate → same-day city board with deltas,
     tap-through to the walker sheet, communities deep-link Discover ── */
  var NEARBY = [
    { n: 'Wanjiru K.',  i: 'WK', v: 'lime',  s: 9310 },
    { n: 'Achieng\u2019 M.', i: 'AM', v: '',      s: 8876 },
    { n: 'Baraka J.',   i: 'BJ', v: 'slate', s: 8420 },
    { n: 'Zawadi N.',   i: 'ZN', v: 'lime',  s: 8105 },
    { n: 'You',         i: 'YO', v: 'slate', s: 7842, you: true },
    { n: 'Otieno D.',   i: 'OD', v: '',      s: 7540 },
    { n: 'Njeri W.',    i: 'NW', v: 'lime',  s: 7118 },
    { n: 'Kip S.',      i: 'KS', v: 'slate', s: 6890 },
    { n: 'Fatuma A.',   i: 'FA', v: '',      s: 6552 },
    { n: 'Mwangi T.',   i: 'MT', v: 'lime',  s: 6214 },
    { n: 'Chege P.',    i: 'CP', v: '',      s: 5873 },
    { n: 'Njoroge S.',  i: 'NS', v: 'slate', s: 5590 },
    { n: 'Adan H.',     i: 'AH', v: '',      s: 5236 }
  ];
  var nearbyOn = false;
  var nearbyListEl = document.getElementById('nearby-list');
  function renderNearby() {
    nearbyListEl.innerHTML = '';
    var max = NEARBY[0].s;
    var avg = Math.round(NEARBY.reduce(function (s, r) { return s + r.s; }, 0) / NEARBY.length);
    NEARBY.forEach(function (wp, i) {
      var row = document.createElement('div');
      var above = wp.s >= avg;
      if (wp.you && !S.visBoards) {
        row.className = 'near-row near-row--ghost';
        row.setAttribute('data-od-id', 'nearby-row-you-hidden');
        row.innerHTML =
          '<span class="member__rank num">' + (i + 1) + '</span>' +
          '<span class="avatar" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></span>' +
          '<span class="member__body"><span class="member__name">Hidden walker <span class="chip chip--rec" aria-hidden="true">YOU</span></span>' +
          '<span class="member__steps num">Invisible while "Show me on Nearby & boards" is off</span>' +
          '<span class="meter"><span class="meter__fill" style="width:' + Math.round(wp.s / max * 100) + '%"></span></span></span>' +
          '<span class="lb-delta lb-delta--neg"><b>—</b><small>hidden</small></span>';
        nearbyListEl.appendChild(row);
        return;
      }
      row.className = 'near-row' + (wp.you ? ' near-row--you' : ' near-row--tap');
      row.setAttribute('data-od-id', 'nearby-row-' + (wp.you ? 'you' : i));
      if (!wp.you) {
        row.setAttribute('role', 'button');
        row.setAttribute('tabindex', '0');
        row.setAttribute('aria-label', 'View ' + wp.n + '\'s profile');
      }
      row.innerHTML =
        '<span class="member__rank num">' + (i + 1) + '</span>' +
        '<span class="avatar' + (wp.v ? ' avatar--' + wp.v : '') + '" aria-hidden="true">' + escapeHtml(wp.i) + '</span>' +
        '<span class="member__body"><span class="member__name">' + escapeHtml(wp.n) +
        (wp.you ? ' <span class="chip chip--rec" aria-hidden="true">YOU</span>' : '') +
        '</span><span class="member__steps num">' + wp.s.toLocaleString('en-US') + ' steps</span>' +
        '<span class="meter"><span class="meter__fill" style="width:' + Math.round(wp.s / max * 100) + '%"></span></span></span>' +
        '<span class="lb-delta' + (above ? '' : ' lb-delta--neg') + '"><b>' + (above ? '+' : '\u2212') + Math.abs(wp.s - avg).toLocaleString('en-US') + '</b><small>vs avg</small></span>';
      if (!wp.you) {
        row.addEventListener('click', function () { openUserProfile(wp, i); });
        row.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openUserProfile(wp, i); }
        });
      }
      nearbyListEl.appendChild(row);
    });
  }
  function nearbyApply() {
    document.getElementById('nearby-gate').hidden = nearbyOn;
    document.getElementById('nearby-body').hidden = !nearbyOn;
    if (nearbyOn) renderNearby();
  }
  document.getElementById('btn-nearby-on').addEventListener('click', function () {
    nearbyOn = true;
    nearbyApply();
    toast('Nearby on — city level only');
  });
  document.querySelectorAll('[data-njoin]').forEach(function (b) {
    b.addEventListener('click', function () { openGroupsView('discover', b.dataset.njoin); });
  });
  enterHooks['scr-nearby'] = nearbyApply;

  /* ═══ v8-g3 · group events (rank/stats/events tab) · chat event cards ·
     discover location chips — same registry, same sheet/toast patterns ═══ */

  var EVENTS = [
    { id: 'ev-park', gid: 'sunrise', type: 'walk', title: 'Saturday 7am Park Walk',
      day: 'Sat', time: '7:00', loc: 'Westlands Park, Nairobi',
      host: 'Nina P.', role: 'Owner', going: 8,
      av: [['MK', 'lime', 'Maya K.'], ['PT', '', 'Priya T.'], ['JO', 'slate', 'Jonas O.'], ['TB', 'lime', 'Tara B.']], more: 4, rsvp: null },
    { id: 'ev-detour', gid: 'sunrise', type: 'routine', title: 'Desk Detour · Steps Every Hour',
      day: 'Mon', time: '9:00', loc: 'Nairobi CBD',
      host: 'Nina P.', role: 'Owner', going: 5,
      av: [['NP', 'lime', 'Nina P.'], ['BW', '', 'Ben W.'], ['YO', 'slate']], more: 2, rsvp: null, repeat: true },
    { id: 'ev-100k', gid: 'sunrise', type: 'challenge', title: 'Weekend 100k Challenge',
      day: 'Fri', time: '18:00', loc: 'Kasarani Stadium loop, Nairobi',
      host: 'Maya K.', role: 'Admin', going: 11,
      av: [['MK', 'lime', 'Maya K.'], ['PT', '', 'Priya T.'], ['TB', 'lime', 'Tara B.'], ['CH', '', 'Chris H.']], more: 7, rsvp: null },
    { id: 'ev-fri', gid: 'sunrise', type: 'walk', title: 'Friday Night City Stroll',
      when: 'Last Fri · 6:30', walked: 12, past: true },
    { id: 'ev-mon', gid: 'sunrise', type: 'walk', title: 'Monday Sunrise Loop',
      when: 'Oct 26 · 6:45', walked: 12, past: true }
  ];
  var EV_ICONS = {
    walk: '<svg class="ico"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 15.5h18V18a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 18v-2.5Z"/><path d="M3 15.5V11l4-4 2.4 2 5.1-.6L18 12l3 1v2.5"/><path d="M9.5 11.5 8 13.2"/></svg>',
    routine: '<svg class="ico"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m17 2.5 3.5 3.5L17 9.5"/><path d="M3.5 11V9.5a4 4 0 0 1 4-4h13"/><path d="M7 21.5 3.5 18 7 14.5"/><path d="M20.5 13v1.5a4 4 0 0 1-4 4h-13"/></svg>',
    challenge: '<svg class="ico"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21.5V3.5"/><path d="M5 4h13l-3 4.5L18 13H5"/></svg>',
    check: '<svg class="ico"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4.5 12.5 5 5 10-11"/></svg>'
  };
  function evIcon(t) { return EV_ICONS[t] || EV_ICONS.walk; }
  function eventById(id) {
    for (var i = 0; i < EVENTS.length; i++) if (EVENTS[i].id === id) return EVENTS[i];
    return null;
  }
  function evCount(ev) { return ev.going + (ev.rsvp === 'going' ? 1 : 0); }
  function hhmm() {
    var now = new Date();
    return ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
  }
  function evAvStack(ev) {
    var html = '<span class="av-stack">';
    (ev.av || []).forEach(function (a) {
      var who = a[2];
      if (who) {
        html += '<button type="button" class="avatar av-tap' + (a[1] ? ' avatar--' + a[1] : '') + '" data-userav data-name="' + escapeHtml(who) + '" data-av="' + escapeHtml(a[0]) + '" data-v="' + escapeHtml(a[1]) + '" aria-label="View ' + escapeHtml(who) + '\'s profile">' + escapeHtml(a[0]) + '</button>';
      } else {
        html += '<span class="avatar' + (a[1] ? ' avatar--' + a[1] : '') + '" aria-hidden="true">' + escapeHtml(a[0]) + '</span>';
      }
    });
    if (ev.more) html += '<span class="av-more">+' + ev.more + '</span>';
    return html + '</span>';
  }
  function evCardHtml(ev, g) {
    var on = ev.rsvp;
    return '<div class="evcard" data-ev="' + ev.id + '" data-od-id="event-card-' + ev.id + '">' +
      '<div class="evcard__top">' + evIcon(ev.type) +
      '<div class="evcard__main"><b class="evcard__title">' + escapeHtml(ev.title) + '</b>' +
      '<span class="evcard__meta"><span class="ev-timechip">' + escapeHtml(ev.day + ' · ' + ev.time) + '</span>' +
      (ev.loc ? '<span class="ev-loc">' + CITY_PIN + escapeHtml(ev.loc) + '</span>' : '') +
      (ev.repeat ? '<span class="ev-repeat-chip">Repeats weekly</span>' : '') +
      '</span><span class="evcard__host">by ' + escapeHtml(ev.host) + ' · ' + escapeHtml(ev.role) + '</span>' +
      '</div></div>' +
      '<div class="evcard__foot"><span class="evcard__who">' + evAvStack(ev) +
      '<b class="evcard__count num">' + evCount(ev) + ' going</b></span>' +
      '<span class="rsvp-row">' +
      '<button type="button" class="rsvp rsvp--going' + (on === 'going' ? ' is-going' : '') + '" data-evact="going" aria-pressed="' + (on === 'going') + '" data-od-id="event-rsvp-going-' + ev.id + '">Going</button>' +
      '<button type="button" class="rsvp rsvp--maybe' + (on === 'maybe' ? ' is-maybe' : '') + '" data-evact="maybe" aria-pressed="' + (on === 'maybe') + '" data-od-id="event-rsvp-maybe-' + ev.id + '">Maybe</button>' +
      '</span></div>' +
      (g.owner ? '<div class="ev-admin">' +
        '<button type="button" data-evact="edit" data-od-id="event-edit-' + ev.id + '">Edit</button>' +
        '<button type="button" class="ev-ad-cancel" data-evact="cancel" data-od-id="event-cancel-' + ev.id + '">Cancel</button>' +
        '<button type="button" class="ev-ad-share" data-evact="share" data-od-id="event-share-' + ev.id + '">Share to chat</button>' +
        '</div>' : '') +
      '</div>';
  }
  function evPastHtml(ev) {
    return '<div class="evcard evcard--past" data-ev="' + ev.id + '" data-od-id="event-past-card-' + ev.id + '">' +
      '<div class="evcard__top">' + evIcon(ev.type) +
      '<div class="evcard__main"><b class="evcard__title">' + escapeHtml(ev.title) + '</b>' +
      '<span class="evcard__meta"><span class="ev-timechip">' + escapeHtml(ev.when) + '</span></span>' +
      '<span class="ev-walked">' + EV_ICONS.check + '<b class="num">' + ev.walked + ' walked</b></span>' +
      '</div></div></div>';
  }
  function evChatHtml(ev) {
    var g = groupById(ev.gid);
    var shortLoc = ev.loc ? String(ev.loc).split(',')[0].trim() : 'Location TBC';
    return '<b class="evchat__title"><span class="evchat__cal" aria-hidden="true">' + ic('event') + '</span>' + escapeHtml(ev.title) + '</b>' +
      '<span class="evchat__meta">' + escapeHtml(g ? g.name : 'StrideSquad') + ' · ' + escapeHtml(shortLoc) + ' · ' + escapeHtml(ev.day + ' ' + ev.time) + '</span>' +
      '<span class="evchat__foot">' + evAvStack(ev) + '<b class="evchat__going num">' + evCount(ev) + ' going</b></span>' +
      '<span class="evchat__btns">' +
      '<button type="button" class="evc-btn' + (ev.rsvp === 'going' ? ' is-going' : '') + '" data-evchat-rsvp="' + ev.id + '" data-od-id="chat-ev-rsvp-' + ev.id + '">' + (ev.rsvp === 'going' ? 'Going ' + ic('check') : 'RSVP') + '</button>' +
      '<button type="button" class="evc-btn" data-evchat-open="' + escapeHtml(ev.gid) + '" data-od-id="chat-ev-view-' + ev.id + '">View group</button>' +
      '</span>';
  }
  function renderEvents(g) {
    var upWrap = document.getElementById('gd-upcoming');
    var pastWrap = document.getElementById('gd-past');
    var pastLabel = document.getElementById('gd-past-label');
    upWrap.innerHTML = '';
    pastWrap.innerHTML = '';
    var up = ((g && g.up) || []).map(eventById).filter(Boolean);
    var past = ((g && g.past) || []).map(eventById).filter(Boolean);
    if (!up.length) {
      upWrap.innerHTML = '<div class="ev-empty"><b>No events yet</b><p>Walks, routines and challenges posted here appear for the whole squad — RSVP included.</p></div>';
    }
    up.forEach(function (ev) { upWrap.insertAdjacentHTML('beforeend', evCardHtml(ev, g)); });
    pastLabel.hidden = !past.length;
    pastWrap.hidden = !past.length;
    past.forEach(function (ev) { pastWrap.insertAdjacentHTML('beforeend', evPastHtml(ev)); });
  }

  /* events tab · delegated RSVP / admin actions */
  document.getElementById('gd-events').addEventListener('click', function (e) {
    var t = e.target.closest('[data-evact]');
    if (!t) return;
    var card = t.closest('[data-ev]');
    var ev = card && eventById(card.dataset.ev);
    if (!ev) return;
    var act = t.dataset.evact;
    if (act === 'going') {
      ev.rsvp = ev.rsvp === 'going' ? null : 'going';
      toast(ev.rsvp === 'going' ? 'You are going' : 'Going removed');
      renderEvents(currentGroup);
      renderThread();                      // keeps the chat card in sync
    } else if (act === 'maybe') {
      ev.rsvp = ev.rsvp === 'maybe' ? null : 'maybe';
      toast(ev.rsvp === 'maybe' ? 'Marked as maybe' : 'Maybe removed');
      renderEvents(currentGroup);
    } else if (act === 'share') {
      CHAT.global.msgs.push({ mid: 'ge' + (++msgSeq), s: 'out', i: 'YO', v: 'slate', who: 'You', t: hhmm(), ev: ev.id, text: '{{ic:event}} ' + ev.title });
      toast('Shared to Global chat');
      renderThread();
      openChannel('global');               // land on the thread where the card just posted
    } else if (act === 'edit') {
      openEventSheet(ev);
    } else if (act === 'cancel') {
      var g = groupById(ev.gid);
      if (g && g.up) g.up = g.up.filter(function (x) { return x !== ev.id; });
      for (var i = EVENTS.length - 1; i >= 0; i--) if (EVENTS[i].id === ev.id) EVENTS.splice(i, 1);
      toast('Event cancelled');
      renderEvents(currentGroup);
      renderThread();
      renderHub();
    }
  });

  /* chat thread · delegated RSVP + View group on event-card bubbles */
  chatScroll.addEventListener('click', function (e) {
    var r = e.target.closest('[data-evchat-rsvp]');
    if (r) {
      var ev = eventById(r.getAttribute('data-evchat-rsvp'));
      if (!ev) return;
      ev.rsvp = ev.rsvp === 'going' ? null : 'going';
      toast(ev.rsvp === 'going' ? 'You are going' : 'Going removed');
      renderThread();
      if (currentGroup && currentGroup.id === ev.gid) renderEvents(currentGroup);
      return;
    }
    var v = e.target.closest('[data-evchat-open]');
    if (v) openGroup(v.getAttribute('data-evchat-open'), 'events');
  });

  /* new / edit event sheet (owner-only entry point) */
  var eventSheet = document.getElementById('event-sheet');
  var evSheetEditing = null;
  var evType = 'walk', evDay = 'Sat', evTime = '7:00';
  var EV_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  function evRepeatOn() { return document.getElementById('sw-ev-repeat').getAttribute('aria-checked') === 'true'; }
  function evPaintRepeatRow() { document.getElementById('ev-repeat-row').classList.toggle('u-hide', evType !== 'routine'); }
  document.querySelectorAll('#event-sheet [data-etype]').forEach(function (b) {
    b.addEventListener('click', function () {
      evType = b.dataset.etype;
      document.querySelectorAll('#event-sheet [data-etype]').forEach(function (x) { x.classList.toggle('active', x === b); });
      evPaintRepeatRow();
    });
  });
  document.querySelectorAll('#ev-day-chips [data-day]').forEach(function (b) {
    b.addEventListener('click', function () {
      evDay = b.dataset.day;
      document.querySelectorAll('#ev-day-chips [data-day]').forEach(function (x) { x.classList.toggle('active', x === b); });
    });
  });
  document.querySelectorAll('#ev-time-chips [data-time]').forEach(function (b) {
    b.addEventListener('click', function () {
      evTime = b.dataset.time;
      document.querySelectorAll('#ev-time-chips [data-time]').forEach(function (x) { x.classList.toggle('active', x === b); });
    });
  });
  document.getElementById('sw-ev-repeat').addEventListener('click', function () {
    this.setAttribute('aria-checked', String(this.getAttribute('aria-checked') !== 'true'));
  });
  function openEventSheet(ev) {
    evSheetEditing = ev || null;
    document.getElementById('ev-sheet-title').textContent = ev ? 'Edit event' : 'New event';
    document.getElementById('ev-sheet-desc').textContent = ev
      ? 'Update details — the squad sees it instantly.'
      : 'Post a walk, routine or challenge — RSVP in chat.';
    document.getElementById('btn-event-create').textContent = ev ? 'Save changes' : 'Create event';
    document.getElementById('ev-title-input').value = ev ? ev.title : '';
    document.getElementById('ev-loc-input').value = ev && ev.loc ? ev.loc : '';
    evType = ev ? ev.type : 'walk';
    evDay = (ev && EV_DAYS.indexOf(ev.day) !== -1) ? ev.day : 'Sat';
    evTime = ev ? ev.time : '7:00';
    document.querySelectorAll('#event-sheet [data-etype]').forEach(function (x) { x.classList.toggle('active', x.dataset.etype === evType); });
    document.querySelectorAll('#ev-day-chips [data-day]').forEach(function (x) { x.classList.toggle('active', x.dataset.day === evDay); });
    document.querySelectorAll('#ev-time-chips [data-time]').forEach(function (x) { x.classList.toggle('active', x.dataset.time === evTime); });
    document.getElementById('sw-ev-repeat').setAttribute('aria-checked', String(!!(ev && ev.repeat)));
    evPaintRepeatRow();
    openSheet(eventSheet);
  }
  document.getElementById('btn-new-event').addEventListener('click', function () {
    if (currentGroup && currentGroup.owner) openEventSheet(null);
    else toast('Only owners can post events');
  });
  document.getElementById('btn-event-cancel').addEventListener('click', function () { evSheetEditing = null; closeSheets(); });
  document.getElementById('btn-ev-close').addEventListener('click', function () { evSheetEditing = null; closeSheets(); });
  document.getElementById('btn-event-create').addEventListener('click', function () {
    var g = currentGroup;
    if (!g || !g.owner) return;
    var titleEl = document.getElementById('ev-title-input');
    var title = titleEl.value.trim();
    if (!title) { titleEl.focus(); toast('Give the event a title'); return; }
    var loc = document.getElementById('ev-loc-input').value.trim() || 'Location TBC';
    var repeat = evType === 'routine' && evRepeatOn();
    if (evSheetEditing) {
      evSheetEditing.title = title;
      evSheetEditing.type = evType;
      evSheetEditing.day = evDay;
      evSheetEditing.time = evTime;
      evSheetEditing.loc = loc;
      if (repeat) evSheetEditing.repeat = true; else delete evSheetEditing.repeat;
      toast('Event updated');
      evSheetEditing = null;
      closeSheets();
      renderEvents(g);
      renderThread();
    } else {
      var ev = { id: 'ev' + Date.now(), gid: g.id, type: evType, title: title, day: evDay, time: evTime,
        loc: loc, host: 'You', role: 'Owner', going: 0, av: [['YO', 'slate']], more: 0, rsvp: 'going' };
      if (repeat) ev.repeat = true;
      EVENTS.push(ev);
      g.up = g.up || [];
      g.up.unshift(ev.id);                 // new card lands at the TOP of UPCOMING
      toast('Event posted');
      evSheetEditing = null;
      closeSheets();
      renderEvents(g);
    }
    setGdTab('events');
  });

  /* discover · location chips (All · Nairobi · Kisumu) — shares state with
     the v8-g2 city pill so Nearby routing pre-selects the chip */
  function paintLocChips() {
    document.querySelectorAll('#disc-loc-chips [data-loc]').forEach(function (b) {
      b.classList.toggle('active', (discoverCity || 'all') === b.dataset.loc);
    });
  }
  document.querySelectorAll('#disc-loc-chips [data-loc]').forEach(function (b) {
    b.addEventListener('click', function () {
      discoverCity = b.dataset.loc === 'all' ? null : b.dataset.loc;
      renderDiscover();
      setGroupsView('discover');
    });
  });


  /* ═══ v8-g4 · walker profile (scr-user) · buddies board · gifts ·
     DM request inbox · profile edit + visibility. Same registry, same
     sheet/toast patterns, vanilla JS only. ═══════════════════════════ */

  /* new session state (persist within session) */
  S.displayName = 'You';
  S.username = 'you.walks';
  S.bio = '';
  S.state = 'Nairobi';
  S.city = 'Nairobi';
  S.visBoards = true;
  S.showAch = true;
  S.buddyReqOut = {};
  S.msgReqOut = {};

  /* remember where a subview was opened from so its back chevron lands right */
  var g4Last = 'scr-today';
  var _g4Show = showScreen;
  showScreen = function (id) {
    var vis = document.querySelector('.screen.is-visible');
    if (vis && SCREENS[id]) g4Last = vis.id;
    _g4Show(id);
  };

  /* ── buddy + request data ────────────────────────────────────────── */
  var BUDDIES = [
    { n: 'Nina P.',  i: 'NP', v: 'lime',  s: 8210 },
    { n: 'Kwame A.', i: 'KA', v: 'slate', s: 10240 },
    { n: 'Maya K.',  i: 'MK', v: '',      s: 9120 }
  ];
  var BUDDY_REQS = [
    { n: 'Tomás L.', i: 'TL', v: '',     msg: 'Buddies? I cheer first — no take-backs.' },
    { n: 'Zawadi N.', i: 'ZN', v: 'lime', msg: 'Fellow 6am walker — keep each other honest?' }
  ];
  var DM_REQS = [
    { n: 'Duncan O.', i: 'DO', v: '',     msg: 'We crossed paths at Westlands Park today — swap routes?', t: '08:12' },
    { n: 'Aisha R.',  i: 'AR', v: 'lime', msg: 'Your dawn streak is unreal. Hello from a fellow early riser!', t: '07:46' }
  ];
  var CITY_OF = {
    'Nina P.': 'Nairobi', 'Maya K.': 'Nairobi', 'Priya T.': 'Nairobi', 'Jonas O.': 'Nairobi',
    'Tara B.': 'Nairobi', 'Ben W.': 'Nairobi', 'Chris H.': 'Nairobi', 'Dana K.': 'Nairobi',
    'Sam M.': 'Nairobi', 'Lena N.': 'Nairobi', 'Kwame A.': 'Nairobi', 'Duncan O.': 'Nairobi',
    'Kenji S.': 'Tokyo', 'Aisha R.': 'London', 'Tomás L.': 'Lisbon', 'Nadia F.': 'Casablanca',
    'Owen M.': 'Toronto', 'Ines B.': 'Madrid', 'Marisol V.': 'Madrid', 'Amara O.': 'Lagos',
    'Kofi A.': 'Accra', 'Sven E.': 'Stockholm', 'Yuki T.': 'Osaka', 'Diego R.': 'Bogotá',
    'Wanjiru K.': 'Nairobi', 'Baraka J.': 'Nairobi', 'Zawadi N.': 'Nairobi', 'Otieno D.': 'Kisumu',
    'Njeri W.': 'Nairobi', 'Kip S.': 'Nairobi', 'Fatuma A.': 'Nairobi', 'Mwangi T.': 'Nairobi',
    'Chege P.': 'Nairobi', 'Njoroge S.': 'Nairobi', 'Adan H.': 'Nairobi', 'Grace N.': 'Nairobi',
    'Bakari A.': 'Dar es Salaam', 'Farah H.': 'Djibouti', 'Lucía M.': 'Madrid', 'Anya P.': 'Tallinn',
    'Li W.': 'Singapore', 'Elena D.': 'Sofia', 'Noah W.': 'Melbourne'
  };
  var CITIES = ['Nairobi', 'Kisumu', 'Eldoret', 'Mombasa'];
  var MONTHS = ['Jan', 'Mar', 'Apr', 'Jun', 'Aug', 'Oct', 'Nov'];
  var BADGE_POOL = ['Dawn patrol', 'Hill taker', 'Goal crusher', 'Streak saver', '10k club', 'Evening walker'];
  USER_INFO['Nina P.'] = USER_INFO['Nina P.'] || { streak: 15, badges: ['Podium week', 'Dawn patrol'] };
  USER_INFO['Kwame A.'] = USER_INFO['Kwame A.'] || { streak: 24, badges: ['Goal crusher', '100k club'] };

  function firstName(n) { return n.split(' ')[0]; }
  function isBuddy(n) {
    for (var i = 0; i < BUDDIES.length; i++) if (BUDDIES[i].n === n) return true;
    return false;
  }
  function dmExists(n) {
    for (var i = 0; i < DM_META.length; i++) if (DM_META[i].peer === n) return true;
    return false;
  }
  var FIRST_FULL = {};
  function fullNameOf(who) {
    if (!who) return who;
    if (who.indexOf(' ') > -1) return who;
    if (!Object.keys(FIRST_FULL).length) {
      GROUPS.forEach(function (g) { g.members.forEach(function (m) { FIRST_FULL[firstName(m.n)] = m.n; }); });
      NEARBY.forEach(function (wp) { if (!FIRST_FULL[firstName(wp.n)]) FIRST_FULL[firstName(wp.n)] = wp.n; });
      LB['weekly-global'].concat(LB['daily-global']).forEach(function (r) { if (!FIRST_FULL[firstName(r.n)]) FIRST_FULL[firstName(r.n)] = r.n; });
      BUDDIES.concat(BUDDY_REQS).concat(DM_REQS).forEach(function (r) { FIRST_FULL[firstName(r.n)] = r.n; });
    }
    return FIRST_FULL[firstName(who)] || who;
  }

  /* ── scr-user · the full walker profile ──────────────────────────── */
  function pctOf(rank) {
    if (rank == null) return 'Top 10%';
    if (rank <= 3) return 'Top 0.1%';
    if (rank <= 25) return 'Top 1%';
    if (rank <= 100) return 'Top 5%';
    return 'Top 10%';
  }
  function profileOf(row, idx) {
    var wk = weeklyOf(row.n);
    var rank = wk ? (LB['weekly-global'].indexOf(wk) + 1) : (typeof idx === 'number' ? idx + 1 : null);
    var info = USER_INFO[row.n];
    var seed = lbSeed('g4|' + row.n);
    var rnd = mulberry32(seed);
    var streak = info ? info.streak : 4 + Math.floor(rnd() * 40);
    var badges = (info && info.badges.length) ? info.badges : [BADGE_POOL[Math.floor(rnd() * BADGE_POOL.length)]];
    var gm = null, gName = null;
    for (var g = 0; g < GROUPS.length && !gm; g++) {
      for (var m = 0; m < GROUPS[g].members.length; m++) {
        if (GROUPS[g].members[m].n === row.n) { gm = GROUPS[g].members[m]; gName = GROUPS[g].name; break; }
      }
    }
    var daily = (row.s && row.s < 40000) ? row.s : null;
    var avg = wk ? Math.round(wk.s / 7) : (gm ? Math.round(gm.w / 7) : (daily ? Math.round(daily * 0.92) : null));
    var best = wk ? Math.round(wk.s / 7 * 1.22) : (gm ? Math.max(gm.d, Math.round(gm.w / 7 * 1.1)) : (daily ? Math.round(daily * 1.18) : null));
    var since = MONTHS[seed % MONTHS.length] + ' ' + (2024 + (seed % 7 > 3 ? 1 : 0));
    var city = CITY_OF[row.n] || CITIES[seed % CITIES.length];
    return { n: row.n, i: row.i, v: row.v, rank: rank, wk: wk ? wk.s : null, avg: avg, best: best,
      since: since, streak: streak, bestStreak: Math.max(streak, 12 + Math.floor(rnd() * 40)),
      badges: badges, city: city, share: gName };
  }
  var userCtx = null;
  var userBackTo = 'scr-today';
  var buddiesBackTo = 'scr-chat';

  function openUserProfile(row, idx) {
    if (!row || !row.n) return;
    var vis = document.querySelector('.screen.is-visible');
    if (vis && vis.id !== 'scr-user' && vis.id !== 'scr-buddies') userBackTo = vis.id;
    userCtx = profileOf(row, idx);
    paintUserProfile(userCtx);
    showScreen('scr-user');
  }
  function paintUserProfile(p) {
    if (SCREENS['scr-user']) document.getElementById('appbar-title').textContent = p.n;   /* v10 · appbar shows the walker name */
    document.getElementById('user-head-sub').textContent = p.rank ? 'Global weekly rank #' + p.rank : 'StrideSquad walker';
    var av = document.getElementById('user-av');
    av.className = 'uav' + (p.v ? ' uav--' + p.v : '');
    /* v8-g6 · generated avatar replaces the face plate for your own card */
    if (S.avChar && (p.n === 'You' || (S.displayName && p.n === S.displayName))) {
      av.classList.add('uav--char');
      av.innerHTML = avCharSvg(S.avChar, 96);
    } else {
      av.classList.remove('uav--char');
      if (USER_AV_DEFAULT) av.innerHTML = USER_AV_DEFAULT;
    }
    /* FIX(qa) · KI-1 — initials must be painted AFTER the innerHTML restore
       above: USER_AV_DEFAULT re-injects the static <span id="user-ini">YO</span>,
       so writing before it was always wiped out. */
    document.getElementById('user-ini').textContent = p.i || initialsOf(p.n);
    document.getElementById('user-name').textContent = p.n;
    document.getElementById('user-city-n').textContent = p.city;
    document.getElementById('user-rank').textContent = p.rank
      ? 'No. ' + fmt(p.rank) + ' this week worldwide \u00b7 ' + pctOf(p.rank)
      : pctOf(p.rank) + ' this week worldwide';
    document.getElementById('user-avg').textContent = p.avg === null ? '\u2014' : fmt(p.avg);
    document.getElementById('user-best').textContent = p.best === null ? '\u2014' : fmt(p.best);
    document.getElementById('user-since').textContent = p.since;
    document.getElementById('user-streak').textContent = p.streak;
    document.getElementById('user-streak-best').textContent = 'best ' + p.bestStreak;
    var hideBadges = !S.showAch && p.n === S.displayName;
    var bd = document.getElementById('user-badges');
    bd.classList.toggle('u-hide', hideBadges);
    bd.innerHTML = '';
    if (!hideBadges) {
      bd.insertAdjacentHTML('beforeend', '<span class="ubadge ubadge--pct">' + pctOf(p.rank) + ' this week</span>');
      p.badges.forEach(function (b) {
        bd.insertAdjacentHTML('beforeend', '<span class="ubadge">' + escapeHtml(b) + '</span>');
      });
    }
    var share = document.getElementById('user-share');
    share.classList.toggle('u-hide', !p.share);
    if (p.share) document.getElementById('user-share-g').textContent = p.share;
    var msgB = document.getElementById('btn-user-msg');
    var msgSent = !!S.msgReqOut[p.n];
    msgB.className = 'uact' + (msgSent ? ' is-done' : ' uact--primary');
    msgB.innerHTML = safeHTML(msgSent ? 'Request sent {{ic:check}}' : 'Message');
    var budB = document.getElementById('btn-user-buddy');
    var already = isBuddy(p.n);
    budB.className = 'uact' + ((already || S.buddyReqOut[p.n]) ? ' is-done' : '');
    budB.innerHTML = safeHTML(already ? '{{ic:check}} Buddies' : (S.buddyReqOut[p.n] ? 'Request sent {{ic:check}}' : '+ Buddy'));
  }
  document.getElementById('btn-user-back').addEventListener('click', function () { showScreen(userBackTo); });
  document.getElementById('btn-user-msg').addEventListener('click', function () {
    if (!userCtx) return;
    if (isBuddy(userCtx.n) || dmExists(userCtx.n)) {
      openDm(userCtx.n, { i: userCtx.i, v: userCtx.v, rank: userCtx.rank, wk: userCtx.wk });
      return;
    }
    S.msgReqOut[userCtx.n] = true;
    paintUserProfile(userCtx);
    toast('Request sent \u2014 they must accept first');
  });
  document.getElementById('btn-user-gift').addEventListener('click', function () {
    if (userCtx) openGiftSheet(userCtx);
  });
  document.getElementById('btn-user-buddy').addEventListener('click', function () {
    if (!userCtx || isBuddy(userCtx.n)) return;
    S.buddyReqOut[userCtx.n] = true;
    paintUserProfile(userCtx);
    toast('Buddy request sent to ' + firstName(userCtx.n));
  });

  /* ⋯ menu — report / block */
  document.getElementById('btn-user-menu').addEventListener('click', function () {
    if (!userCtx) return;
    document.getElementById('user-menu-title').textContent = 'Options for ' + userCtx.n;
    openSheet(document.getElementById('user-menu-sheet'));
  });
  document.getElementById('btn-user-menu-cancel').addEventListener('click', closeSheets);
  document.getElementById('btn-user-report').addEventListener('click', function () {
    closeSheets();
    if (userCtx) toast('Reported ' + userCtx.n + ' to moderators');
  });
  document.getElementById('btn-user-block').addEventListener('click', function () {
    if (!userCtx) { closeSheets(); return; }
    for (var i = 0; i < DM_META.length; i++) if (DM_META[i].peer === userCtx.n) DM_META[i].blocked = true;
    addBlock(userCtx.n, userCtx.i);
    toast('Blocked ' + userCtx.n);
    closeSheets();
    showScreen(userBackTo);
  });

  /* delegated avatar taps — threads, event attendee stacks, buddy rows */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-userav]');
    if (!t) return;
    openUserProfile({ n: t.getAttribute('data-name'), i: t.getAttribute('data-av'), v: t.getAttribute('data-v') });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var a = document.activeElement;
    var t = a && a.closest ? a.closest('[data-userav]') : null;
    if (!t) return;
    e.preventDefault();
    openUserProfile({ n: t.getAttribute('data-name'), i: t.getAttribute('data-av'), v: t.getAttribute('data-v') });
  });
  document.getElementById('dm-avatar').addEventListener('click', function () {
    if (dmPeer) openUserProfile({ n: dmPeer.name, i: dmPeer.i, v: dmPeer.v });
  });

  /* ── scr-buddies · feed strip, incoming requests, buddy list ─────── */
  function bumpPill() {
    document.querySelectorAll('.sole-pill').forEach(function (p) {
      p.classList.remove('bump');
      void p.offsetWidth;
      p.classList.add('bump');
      setTimeout(function () { p.classList.remove('bump'); }, 650);
    });
  }
  function addBuddy(r) {
    for (var i = 0; i < BUDDIES.length; i++) if (BUDDIES[i].n === r.n) return;
    BUDDIES.push({ n: r.n, i: r.i, v: r.v, s: 4200 + (lbSeed('b|' + r.n) % 5200) });
  }
  function renderBuddies() {
    document.getElementById('bdy-count').textContent = String(BUDDIES.length);
    document.getElementById('pf-buddy-count').textContent = String(BUDDIES.length);
    document.getElementById('pf-buddies-chip-n').textContent = BUDDIES.length + ' Buddies';
    var feed = document.getElementById('bdy-feed');
    feed.innerHTML =
      '<div class="feed-card"><span class="avatar avatar--slate" aria-hidden="true">KA</span>' +
      '<span class="feed-card__t"><b>Kwame hit 10k ' + ic('cheer') + '</b><span class="f">Just now \u00b7 say it with a cheer</span></span>' +
      '<button type="button" class="cheer-btn" data-cheer="Kwame A." data-od-id="buddy-feed-cheer-kwame">Cheer</button></div>' +
      '<button type="button" class="feed-card" data-feedgift="Nina P." data-od-id="buddy-feed-nina-gift">' +
      '<span class="avatar avatar--lime" aria-hidden="true">NP</span>' +
      '<span class="feed-card__t"><b>Nina sent you a gift ' + ic('gift') + '</b><span class="f">Open the thread to thank her</span></span></button>';
    var req = document.getElementById('bdy-requests');
    req.innerHTML = '';
    if (!BUDDY_REQS.length) {
      req.innerHTML = '<div class="empty"><b>No pending requests</b><p>When someone asks to be buddies, they land here.</p></div>';
    }
    BUDDY_REQS.forEach(function (r, ri) {
      var row = document.createElement('div');
      row.className = 'bdy-row';
      row.setAttribute('data-od-id', 'buddy-request-' + ri);
      row.innerHTML =
        '<span class="avatar' + (r.v ? ' avatar--' + r.v : '') + '" aria-hidden="true">' + escapeHtml(r.i) + '</span>' +
        '<span class="bdy-row__body"><b class="bdy-row__name">' + escapeHtml(r.n) + '</b>' +
        '<span class="bdy-row__meta">' + escapeHtml(r.msg) + '</span></span>' +
        '<span class="req-actions">' +
        '<button type="button" class="req-btn req-btn--ok" data-breq="accept" data-i="' + ri + '" data-od-id="buddy-req-accept-' + ri + '">Accept</button>' +
        '<button type="button" class="req-btn req-btn--no" data-breq="decline" data-i="' + ri + '" data-od-id="buddy-req-decline-' + ri + '">Decline</button>' +
        '</span>';
      req.appendChild(row);
    });
    var list = document.getElementById('bdy-list');
    list.innerHTML = '';
    BUDDIES.forEach(function (b, bi) {
      var row = document.createElement('div');
      row.className = 'bdy-row';
      row.setAttribute('data-od-id', 'buddy-row-' + bi);
      row.innerHTML =
        '<button type="button" class="avatar av-tap' + (b.v ? ' avatar--' + b.v : '') + '" data-userav data-name="' + escapeHtml(b.n) + '" data-av="' + escapeHtml(b.i) + '" data-v="' + escapeHtml(b.v) + '" aria-label="View ' + escapeHtml(b.n) + '\'s profile">' + escapeHtml(b.i) + '</button>' +
        '<span class="bdy-row__body"><b class="bdy-row__name">' + escapeHtml(b.n) + '</b>' +
        '<span class="bdy-row__meta num">' + fmt(b.s) + ' steps today</span></span>' +
        '<button type="button" class="cheer-btn" data-cheer="' + escapeHtml(b.n) + '" data-od-id="buddy-cheer-' + bi + '">Cheer</button>';
      list.appendChild(row);
    });
    updateReqBadges();
  }
  document.getElementById('bdy-requests').addEventListener('click', function (e) {
    var t = e.target.closest('[data-breq]');
    if (!t) return;
    var ri = parseInt(t.dataset.i, 10);
    var r = BUDDY_REQS[ri];
    if (!r) return;
    BUDDY_REQS.splice(ri, 1);
    if (t.dataset.breq === 'accept') { addBuddy(r); toast(firstName(r.n) + ' is now your buddy'); }
    else toast('Request declined');
    renderBuddies();
  });
  document.getElementById('scr-buddies').addEventListener('click', function (e) {
    var c = e.target.closest('[data-cheer]');
    if (c) {
      var nm = c.dataset.cheer;
      for (var i = 0; i < BUDDIES.length; i++) if (BUDDIES[i].n === nm) BUDDIES[i].s += 1;
      soleEarn(1, { v: '+1 {{ic:coin}}', t: 'Cheer sent', s: firstName(nm) + ' got your cheer', m: hhmm() });
      bumpPill();
      toast('Cheered! +1 {{ic:coin}} each way · ' + fmt(SOLE.bal) + ' {{ic:coin}} in your wallet');
      renderBuddies();
      return;
    }
    var g = e.target.closest('[data-feedgift]');
    if (g) openDm(g.dataset.feedgift);
  });
  document.getElementById('btn-buddies-back').addEventListener('click', function () { showScreen(buddiesBackTo); });

  /* ── gifts · bottom sheet with a sticker grid ────────────────────── */
  var GIFTS = [
    { e: '{{stk:kicks}}', n: 'Fresh Kicks', p: 0 },
    { e: '{{stk:flameface}}', n: 'On Fire', p: 0 },
    { e: '{{stk:bolt2}}', n: 'Energy Boost', p: 0 },
    { e: '{{stk:starburst}}', n: 'Star Walker', p: 0 },
    { e: '{{stk:medal2}}', n: 'Champion', p: 60 },
    { e: '{{stk:rocket}}', n: 'Moonshot', p: 90 },
    { e: '{{stk:crown}}', n: 'Crown', p: 150 },
    { e: '{{stk:lion}}', n: 'Lionheart', p: 200 }
  ];
  var giftSel = null;
  function openGiftSheet(p) {
    document.getElementById('gift-peer').textContent = p.n;
    giftSel = null;
    var grid = document.getElementById('gift-grid');
    grid.innerHTML = '';
    GIFTS.forEach(function (g, gi) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'gift-item';
      b.setAttribute('aria-pressed', 'false');
      b.setAttribute('data-od-id', 'gift-item-' + gi);
      b.innerHTML =
        '<span class="gift-item__e" aria-hidden="true">' + icSvgField(g.e) + '</span>' +
        '<span class="gift-item__n">' + escapeHtml(g.n) + '</span>' +
        '<span class="gift-item__p' + (g.p === 0 ? ' free' : '') + '">' + (g.p === 0 ? 'Free' : g.p + ' ' + ic('coin')) + '</span>';
      b.addEventListener('click', function () {
        giftSel = g;
        grid.querySelectorAll('.gift-item').forEach(function (x) { x.classList.remove('sel'); x.setAttribute('aria-pressed', 'false'); });
        b.classList.add('sel');
        b.setAttribute('aria-pressed', 'true');
        document.getElementById('btn-gift-send').disabled = false;
      });
      grid.appendChild(b);
    });
    document.getElementById('btn-gift-send').disabled = true;
    openSheet(document.getElementById('gift-sheet'));
  }
  document.getElementById('btn-gift-close').addEventListener('click', closeSheets);
  document.getElementById('btn-gift-send').addEventListener('click', function () {
    if (!giftSel || !userCtx) return;
    var name = userCtx.n;
    var giftCost = giftSel.p;
    if (giftCost > 0 && !soleSpend(giftCost)) {
      toast('Not enough {{ic:coin}} — see packs');
      jumpToPacks();
      return;
    }
    if (!DM[name]) DM[name] = [];
    var meta = null;
    for (var i = 0; i < DM_META.length; i++) if (DM_META[i].peer === name) meta = DM_META[i];
    if (!meta) {
      meta = { peer: name, i: userCtx.i, v: userCtx.v, unread: 1, blocked: false };
      DM_META.unshift(meta);
    } else { meta.unread = (meta.unread || 0) + 1; }
    DM[name].push({ mid: 'gf' + (++msgSeq), s: 'out', i: S.avI, v: S.avV || 'slate', who: 'You', t: hhmm(), gift: giftSel });
    if (dmPeer && dmPeer.name === name) renderDm();
    renderHub();
    closeSheets();
    giftSel = null;
    if (giftCost > 0) {
      bumpPill();
      toast('Gift sent to ' + firstName(name) + ' · −' + giftCost + ' {{ic:coin}} · balance ' + fmt(SOLE.bal));
    } else {
      toast('Gift sent to ' + firstName(name));
    }
  });

  /* ── DM request inbox · chat hub top tabs ────────────────────────── */
  var chatTab = 'chats';
  function setChatTab(tab) { chatTab = tab; applyChatTab(); }
  function applyChatTab() {
    document.getElementById('chat-tab-chats').classList.toggle('active', chatTab === 'chats');
    document.getElementById('chat-tab-requests').classList.toggle('active', chatTab === 'requests');
    document.getElementById('chan-list').hidden = chatTab !== 'chats';
    document.getElementById('chat-req-list').hidden = chatTab !== 'requests';
    if (chatTab === 'requests') renderDMReqs();
  }
  function renderDMReqs() {
    var wrap = document.getElementById('chat-req-list');
    wrap.innerHTML = '';
    if (!DM_REQS.length) {
      wrap.innerHTML = '<div class="empty"><b>No pending requests</b><p>When a walker who isn\'t your buddy yet messages you, their request lands here.</p></div>';
      return;
    }
    var card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-od-id', 'chat-requests-card');
    DM_REQS.forEach(function (r, ri) {
      var row = document.createElement('div');
      row.className = 'bdy-row';
      row.setAttribute('data-od-id', 'dm-request-' + ri);
      row.innerHTML =
        '<span class="avatar' + (r.v ? ' avatar--' + r.v : '') + '" aria-hidden="true">' + escapeHtml(r.i) + '</span>' +
        '<span class="bdy-row__body"><b class="bdy-row__name">' + escapeHtml(r.n) + '</b>' +
        '<span class="bdy-row__meta">' + escapeHtml(r.msg) + '</span></span>' +
        '<span class="req-actions">' +
        '<button type="button" class="req-btn req-btn--ok" data-dreq="accept" data-i="' + ri + '" data-od-id="dm-req-accept-' + ri + '">Accept</button>' +
        '<button type="button" class="req-btn req-btn--no" data-dreq="decline" data-i="' + ri + '" data-od-id="dm-req-decline-' + ri + '">Decline</button>' +
        '</span>';
      card.appendChild(row);
    });
    wrap.appendChild(card);
  }
  document.getElementById('chat-tab-chats').addEventListener('click', function () { setChatTab('chats'); });
  document.getElementById('chat-tab-requests').addEventListener('click', function () { setChatTab('requests'); });
  document.getElementById('chat-req-list').addEventListener('click', function (e) {
    var t = e.target.closest('[data-dreq]');
    if (!t) return;
    var ri = parseInt(t.dataset.i, 10);
    var r = DM_REQS[ri];
    if (!r) return;
    DM_REQS.splice(ri, 1);
    updateReqBadges();
    if (t.dataset.dreq === 'accept') {
      if (!DM[r.n]) DM[r.n] = [{ mid: 'rq' + (++msgSeq), s: 'in', i: r.i, v: r.v, who: firstName(r.n), t: r.t, text: r.msg }];
      setChatTab('chats');
      renderHub();
      openDm(r.n, { i: r.i, v: r.v });
    } else {
      toast('Request declined');
      renderDMReqs();
    }
  });
  function updateReqBadges() {
    var badge = document.getElementById('acct-req-badge');
    var n = BUDDY_REQS.length + DM_REQS.length;
    if (badge) { badge.textContent = String(n); badge.classList.toggle('u-hide', n === 0); }
    var cnt = document.getElementById('chat-req-count');
    if (cnt) cnt.textContent = String(DM_REQS.length);
  }

  /* ── edit profile · username, bio, location, visibility ──────────── */
  var EP_STATES = {
    'Nairobi': ['Nairobi', 'Kikuyu', 'Karen'],
    'Kiambu': ['Kiambu', 'Thika', 'Ruiru'],
    'Nakuru': ['Nakuru', 'Naivasha', 'Gilgil'],
    'Mombasa': ['Mombasa', 'Diani', 'Kwale'],
    'Kisumu': ['Kisumu', 'Chemelil', 'Maseno']
  };
  function epFillCities(keep) {
    var st = document.getElementById('ep-state').value;
    var sel = document.getElementById('ep-city');
    sel.innerHTML = '';
    (EP_STATES[st] || [st]).forEach(function (c) {
      var o = document.createElement('option');
      o.value = c; o.textContent = c;
      sel.appendChild(o);
    });
    if (keep && (EP_STATES[st] || []).indexOf(keep) > -1) sel.value = keep;
  }
  function epG4Sync() {
    document.getElementById('ep-username').value = S.username;
    document.getElementById('ep-bio').value = S.bio;
    document.getElementById('ep-bio-count').textContent = S.bio.length + ' of 80';
    document.getElementById('ep-state').value = S.state;
    epFillCities(S.city);
    document.getElementById('sw-vis-boards').setAttribute('aria-checked', String(S.visBoards));
    document.getElementById('sw-vis-ach').setAttribute('aria-checked', String(S.showAch));
  }
  document.getElementById('ep-state').addEventListener('change', function () { epFillCities(null); });
  document.getElementById('ep-bio').addEventListener('input', function () {
    document.getElementById('ep-bio-count').textContent = this.value.length + ' of 80';
  });
  var _epHook = enterHooks['scr-edit-profile'];
  enterHooks['scr-edit-profile'] = function () { if (_epHook) _epHook(); epG4Sync(); };
  bindSwitch('sw-vis-boards', function (on) {
    S.visBoards = on;
    renderProfileG4();
    toast(on ? 'You\'re visible on Nearby & boards' : 'Hidden \u2014 Nearby now shows you as \u201CHidden walker\u201D');
  });
  bindSwitch('sw-vis-ach', function (on) {
    S.showAch = on;
    renderProfileG4();
    if (userCtx && userCtx.n === S.displayName) paintUserProfile(userCtx);
    toast(on ? 'Achievements visible on your profile' : 'Achievements hidden on your profile');
  });
  function renderProfileG4() {
    /* FIX(qa) · KI-2 — header name must boot-paint from state. The edit-profile
       save handler's direct #pf-name write lands on a detached stub (real element
       lives on profile.html only), so profile boot relies on this line. */
    document.getElementById('pf-name').textContent = S.displayName || 'You';
    var line = document.getElementById('pf-userline');
    line.textContent = '@' + S.username + ' \u00b7 ' + S.city;
    line.hidden = !S.username;
    var bio = document.getElementById('pf-bio');
    bio.textContent = S.bio;
    bio.hidden = !S.bio;
    document.getElementById('pf-lock-note').classList.toggle('u-hide', S.visBoards);
    document.getElementById('pf-ach-block').classList.toggle('u-hide', !S.showAch);
  }
  var _pfHook = enterHooks['scr-profile'];
  enterHooks['scr-profile'] = function () { if (_pfHook) _pfHook(); renderBuddies(); renderProfileG4(); };
  var _chatHook = enterHooks['scr-chat'];
  enterHooks['scr-chat'] = function () { if (_chatHook) _chatHook(); updateReqBadges(); applyChatTab(); };
  enterHooks['scr-buddies'] = function () {
    if (g4Last && g4Last !== 'scr-buddies' && g4Last !== 'scr-user') buddiesBackTo = g4Last;
    renderBuddies();
  };

  /* first paint so nothing reads blank before the first enter-hook */
  renderBuddies();

  /* ═════ v8-g6 · demo photo gallery · avatar generator ═══════════════ */

  /* ── mock gallery: six SVG landscape "demo photos" ───────────────── */
  var PH_SEQ = 0;
  var DEMO_PHOTOS = [
    { n: 'Dawn ridge',      sky: ['#FDE68A', '#FB923C'], h1: '#7C2D12', h2: '#C2410C', sun: '#FFFBEB', sunOn: true },
    { n: 'Lake dusk',       sky: ['#BAE6FD', '#1D4ED8'], h1: '#1E3A8A', h2: '#3B82F6', sun: '#F0F9FF', sunOn: true },
    { n: 'Forest haze',     sky: ['#A7F3D0', '#065F46'], h1: '#064E3B', h2: '#10B981', sun: '', sunOn: false },
    { n: 'Violet ridgeline', sky: ['#DDD6FE', '#6D28D9'], h1: '#4C1D95', h2: '#7C3AED', sun: '#EDE9FE', sunOn: true },
    { n: 'Pink canyon',     sky: ['#FBCFE8', '#BE185D'], h1: '#831843', h2: '#DB2777', sun: '#FCE7F3', sunOn: true },
    { n: 'Glacier peaks',   sky: ['#E0F2FE', '#0369A1'], h1: '#0C4A6E', h2: '#0EA5E9', sun: '#F0F9FF', sunOn: true }
  ];
  function demoPhotoSvg(i) {
    var p = DEMO_PHOTOS[((i % 6) + 6) % 6];
    var uid = 'dp' + (++PH_SEQ);
    var s = '<svg viewBox="0 0 160 120" role="img" aria-label="Demo photo: ' + escapeHtml(p.n) + '">';
    s += '<defs><linearGradient id="sky' + uid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.sky[0] + '"/><stop offset="1" stop-color="' + p.sky[1] + '"/></linearGradient></defs>';
    s += '<rect width="160" height="120" fill="url(#sky' + uid + ')"/>';
    if (p.sunOn) s += '<circle cx="118" cy="34" r="14" fill="' + p.sun + '" opacity=".9"/>';
    s += '<path d="M0 74 C26 54 48 66 78 58 C108 50 130 66 160 54 L160 120 L0 120 Z" fill="' + p.h2 + '" opacity=".85"/>';
    s += '<path d="M0 94 C38 76 74 90 108 82 C134 76 148 86 160 82 L160 120 L0 120 Z" fill="' + p.h1 + '"/>';
    s += '</svg>';
    return s;
  }
  var photoTarget = 'chat';
  function renderGalleryOnce() {
    var host = document.getElementById('gallery-grid');
    if (!host || host.childElementCount) return;
    DEMO_PHOTOS.forEach(function (p, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'gallery-item';
      b.setAttribute('data-od-id', 'gallery-photo-' + i);
      b.setAttribute('aria-label', 'Attach demo photo — ' + p.n);
      b.innerHTML = demoPhotoSvg(i);
      b.addEventListener('click', function () {
        closeSheets();
        if (photoTarget === 'dm') { attachDemoPhoto(i, 'dm'); return; }
        if (curChannel === 'global' && !S.globalRules) {
          pendingAct = { kind: 'photo', val: i };
          openSheet(document.getElementById('rules-sheet'));
          return;
        }
        attachDemoPhoto(i, 'chat');
      });
      host.appendChild(b);
    });
  }
  function attachDemoPhoto(idx, where) {
    var msg = { mid: 'p' + (++msgSeq), s: 'out', i: S.avI, v: S.avV || 'slate', who: 'You', t: hhmm(), ph: idx, text: 'Photo · demo' };
    if (where === 'dm') {
      if (!dmPeer || dmBlocked()) return;
      DM[dmPeer.name].push(msg);
      renderDm(); renderHub();
    } else {
      CHAT[curChannel].msgs.push(msg);
      renderThread();
    }
    toast('Photo attached · demo');
  }
  document.getElementById('btn-chat-photo').addEventListener('click', function () { photoTarget = 'chat'; renderGalleryOnce(); openSheet(document.getElementById('gallery-sheet')); });
  document.getElementById('btn-dm-photo').addEventListener('click', function () { photoTarget = 'dm'; renderGalleryOnce(); openSheet(document.getElementById('gallery-sheet')); });
  document.getElementById('btn-gallery-close').addEventListener('click', closeSheets);

  /* ── avatar generator · one avatar state (S.avChar), layered inline SVG ── */
  var AV_BODIES = [
    { n: 'Grass',      c: '#16A34A', sh: '#127C39', lock: -1 },
    { n: 'Lime',       c: '#A3E635', sh: '#65A30D', lock: -1 },
    { n: 'Amber',      c: '#F59E0B', sh: '#B45309', lock: -1 },
    { n: 'Slate',      c: '#64748B', sh: '#334155', lock: -1 },
    { n: 'Dawn',       c: '#F472B6', sh: '#BE185D', lock: 4 },
    { n: 'Gold Dust',  c: '#EAB308', sh: '#A16207', lock: 5 }
  ];
  var AV_HATS = [
    { n: 'None',          av: -1 },
    { n: 'Trail Cap',     av: 0 },
    { n: 'Sunset Visor',  av: 1 },
    { n: 'Ridge Helmet',  av: 2 },
    { n: 'Safari Hat',    av: 3 }
  ];
  var AV_FACE_N = 5;
  var avSel = { body: 0, face: 0, hat: 0 };
  function avBodyOwned(bi) { var lk = AV_BODIES[bi].lock; return lk < 0 || !!SOLE.ownedAv[lk]; }
  function avHatOwned(hi) { var av = AV_HATS[hi].av; return av < 0 || !!SOLE.ownedAv[av]; }
  function avLockPrice(avIdx) { return (avIdx >= 0 && AVATARS[avIdx]) ? AVATARS[avIdx].p + ' {{ic:coin}}' : ''; }

  function avFaceMarkup(f, ink) {
    if (f === 1) return '<circle cx="40" cy="49" r="4.2" fill="' + ink + '"/><circle cx="60" cy="49" r="4.2" fill="' + ink + '"/><ellipse cx="50" cy="63" rx="6.5" ry="5.4" fill="' + ink + '"/><path d="M45.5 66q4.5 2.6 9 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/>';
    if (f === 2) return '<circle cx="40" cy="50" r="3.4" fill="' + ink + '"/><path d="M55 50q5-4.5 10 0" stroke="' + ink + '" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M40 61q10 7 20 0" stroke="' + ink + '" stroke-width="3.4" stroke-linecap="round" fill="none"/>';
    if (f === 3) return '<path d="M35.5 48h9M55.5 48h9" stroke="' + ink + '" stroke-width="3.4" stroke-linecap="round"/><path d="M42 60q8 5 16 0" stroke="' + ink + '" stroke-width="3.2" stroke-linecap="round" fill="none"/>';
    if (f === 4) return '<circle cx="40" cy="50" r="2.6" fill="' + ink + '"/><circle cx="60" cy="50" r="2.6" fill="' + ink + '"/><path d="M43 57q7 10 14 0Z" fill="' + ink + '"/>';
    return '<circle cx="40" cy="50" r="3.4" fill="' + ink + '"/><circle cx="60" cy="50" r="3.4" fill="' + ink + '"/><path d="M40 61q10 7 20 0" stroke="' + ink + '" stroke-width="3.4" stroke-linecap="round" fill="none"/>';
  }
  function avHatMarkup(hi) {
    if (hi === 1) return '<path d="M28 33C28 21 37 14 50 14s22 7 22 19c0 1.7-1.4 3-3.2 3H31.2C29.4 36 28 34.7 28 33Z" fill="#1E3A5F"/><path d="M70 36c9 0 15 2.4 15 5.2s-6 4-14.5 3.3Z" fill="#16324F"/><circle cx="50" cy="14.5" r="2.6" fill="#16324F"/>';
    if (hi === 2) return '<path d="M27 31a23 21 0 0 1 46 0l-6 2a17 15 0 0 0-34 0Z" fill="#F97316"/><path d="M71 33c8 .6 13 3 12.6 5.6-.4 2.6-6.6 3.2-14 2Z" fill="#EA580C"/>';
    if (hi === 3) return '<path d="M29 34c0-12 9-20 21-20s21 8 21 20c0 1.7-1.3 3-3 3H32c-1.7 0-3-1.3-3-3Z" fill="#334155"/><path d="M40 18l2 14M50 15l0 17M60 18l-2 14" stroke="#0F172A" stroke-width="2.4" stroke-linecap="round"/><rect x="27" y="34" width="46" height="4.6" rx="2.3" fill="#0F172A"/>';
    if (hi === 4) return '<path d="M33 30c0-9 7.5-15 17-15s17 6 17 15c0 1.5-1.2 2.6-2.7 2.6H35.7C34.2 32.6 33 31.5 33 30Z" fill="#8C6A3F"/><ellipse cx="50" cy="34" rx="30" ry="5" fill="#A87F4B"/><path d="M33 31h34" stroke="#6B4F2A" stroke-width="2"/>';
    return '';
  }
  function avCharSvg(sel, size) {
    var b = AV_BODIES[sel.body % AV_BODIES.length] || AV_BODIES[0];
    var uid = 'ac' + (++PH_SEQ);
    var INK = '#1F2430';
    var s = '<svg class="avchar" viewBox="0 0 100 100" width="' + size + '" height="' + size + '" aria-hidden="true">';
    s += '<defs>'
      + '<linearGradient id="dsk' + uid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + b.c + '" stop-opacity=".18"/><stop offset="1" stop-color="' + b.c + '" stop-opacity=".4"/></linearGradient>'
      + '<linearGradient id="bdy' + uid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + b.c + '"/><stop offset="1" stop-color="' + b.sh + '"/></linearGradient>'
      + '<radialGradient id="gl' + uid + '" cx="34%" cy="26%" r="72%"><stop offset="0" stop-color="#fff" stop-opacity=".62"/><stop offset="55%" stop-color="#fff" stop-opacity="0"/></radialGradient>'
      + '</defs>';
    s += '<circle cx="50" cy="50" r="49" fill="url(#dsk' + uid + ')"/>';
    s += '<ellipse cx="50" cy="86.5" rx="25" ry="5" fill="' + b.sh + '" opacity=".2"/>';
    s += '<ellipse cx="38.5" cy="83" rx="7" ry="4.4" fill="' + b.sh + '"/><ellipse cx="61.5" cy="83" rx="7" ry="4.4" fill="' + b.sh + '"/>';
    s += '<path d="M50 20c17 0 29 13 29 31 0 18-12 30.5-29 30.5S21 69 21 51C21 33 33 20 50 20Z" fill="url(#bdy' + uid + ')"/>';
    s += '<path d="M50 20c17 0 29 13 29 31 0 18-12 30.5-29 30.5S21 69 21 51C21 33 33 20 50 20Z" fill="url(#gl' + uid + ')"/>';
    s += avFaceMarkup(sel.face % AV_FACE_N, INK);
    s += avHatMarkup(sel.hat % AV_HATS.length);
    s += '</svg>';
    return s;
  }

  /* one avatar state → profile header, leaderboard You-row, edit-profile, own chat chips, user sheet */
  function paintYouAvatars() {
    [['pf-avatar', 'avatar avatar--lg', 56], ['ep-preview', 'avatar avatar--lg', 56], ['lby-av', 'avatar', 40]].forEach(function (p) {
      var el = document.getElementById(p[0]);
      if (!el) return;
      el.className = p[1] + (S.avChar ? ' avatar--char' : (S.avV ? ' avatar--' + S.avV : ''));
      if (S.avChar) el.innerHTML = avCharSvg(S.avChar, p[2]);
      else el.textContent = S.avI;
    });
    var vis = document.querySelector('.screen.is-visible');
    if (vis && vis.id === 'scr-chat-thread') renderThread();
    if (vis && vis.id === 'scr-dm-thread') renderDm();
  }

  function avOptBtn(cls, idx, inner, label, active, locked, priceTxt, onPick) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'avgen-opt' + cls + (active ? ' active' : '') + (locked ? ' locked' : '');
    b.setAttribute('aria-label', label);
    b.innerHTML = inner;
    b.addEventListener('click', function () {
      if (locked) {
        toast('Locked — grab it in the Sole store for ' + priceTxt);
        setWalletTab('avatar');
        showScreen('scr-wallet');
        return;
      }
      onPick();
    });
    return b;
  }
  function renderAvGen() {
    var stage = document.getElementById('avgen-stage');
    stage.innerHTML = avCharSvg(avSel, 240);
    var bodies = document.getElementById('avgen-bodies');
    bodies.innerHTML = '';
    AV_BODIES.forEach(function (b, bi) {
      var owned = avBodyOwned(bi);
      bodies.appendChild(avOptBtn('', bi,
        '<span class="avgen-opt__sw" style="background:' + b.c + '"></span><span class="avgen-opt__p">' + (owned ? escapeHtml(b.n) : safeHTML(avLockPrice(b.lock))) + '</span>',
        b.n + (owned ? ' body color' : ' — locked, ' + icPlain(avLockPrice(b.lock))),
        avSel.body === bi, !owned, avLockPrice(b.lock),
        function () { avSel.body = bi; renderAvGen(); }));
    });
    var faces = document.getElementById('avgen-faces');
    faces.innerHTML = '';
    var FLABEL = ['Smile', 'Happy', 'Wink', 'Focused', 'Cheerful'];
    for (var f = 0; f < AV_FACE_N; f++) {
      (function (fi) {
        faces.appendChild(avOptBtn('', fi,
          '<span class="avgen-opt__ic">' + avCharSvg({ body: 3, face: fi, hat: 0 }, 26) + '</span><span class="avgen-opt__p">' + FLABEL[fi] + '</span>',
          FLABEL[fi] + ' face', avSel.face === fi, false, '',
          function () { avSel.face = fi; renderAvGen(); }));
      })(f);
    }
    var hats = document.getElementById('avgen-hats');
    hats.innerHTML = '';
    AV_HATS.forEach(function (h, hi) {
      var owned = avHatOwned(hi);
      var price = h.av >= 0 ? avLockPrice(h.av) : '';
      hats.appendChild(avOptBtn('', hi,
        '<span class="avgen-opt__ic">' + avCharSvg({ body: avSel.body, face: avSel.face, hat: hi }, 26) + '</span><span class="avgen-opt__p">' + (owned ? escapeHtml(h.n) : safeHTML(price)) + '</span>',
        h.n + (owned ? ' hat' : ' — locked, ' + icPlain(price)),
        avSel.hat === hi, !owned, price,
        function () { avSel.hat = hi; renderAvGen(); }));
    });
  }
  function shuffleAv() {
    var bodyPool = [], hatPool = [];
    AV_BODIES.forEach(function (b, i) { if (avBodyOwned(i)) bodyPool.push(i); });
    AV_HATS.forEach(function (h, i) { if (avHatOwned(i)) hatPool.push(i); });
    for (var tries = 0; tries < 25; tries++) {
      var nb = bodyPool[Math.floor(Math.random() * bodyPool.length)];
      var nf = Math.floor(Math.random() * AV_FACE_N);
      var nh = hatPool[Math.floor(Math.random() * hatPool.length)];
      var diff = (nb !== avSel.body ? 1 : 0) + (nf !== avSel.face ? 1 : 0) + (nh !== avSel.hat ? 1 : 0);
      if (diff >= 2) { avSel = { body: nb, face: nf, hat: nh }; break; }
    }
    renderAvGen();
  }
  var avatarBackTo = 'scr-profile';
  function openAvGen(shuffleFirst) {
    avSel = S.avChar ? { body: S.avChar.body, face: S.avChar.face, hat: S.avChar.hat } : { body: 0, face: 0, hat: 0 };
    renderAvGen();
    if (shuffleFirst) shuffleAv();
    showScreen('scr-avatar');
  }
  document.getElementById('btn-change-avatar').addEventListener('click', function () { avatarBackTo = 'scr-edit-profile'; openAvGen(false); });
  document.getElementById('btn-wallet-av-shuffle').addEventListener('click', function () { avatarBackTo = 'scr-wallet'; openAvGen(true); });
  document.getElementById('btn-avatar-back').addEventListener('click', function () { showScreen(avatarBackTo); });
  document.getElementById('btn-av-shuffle').addEventListener('click', shuffleAv);
  document.getElementById('btn-av-save').addEventListener('click', function () {
    S.avChar = { body: avSel.body, face: avSel.face, hat: avSel.hat };
    paintYouAvatars();
    renderHub();
    toast('Avatar saved — profile, board and chat updated');
  });
  document.getElementById('btn-av-reset').addEventListener('click', function () {
    S.avChar = null;
    renderAvGen();
    paintYouAvatars();
    toast('Back to your initials');
  });
  var USER_AV_DEFAULT = document.getElementById('user-av').innerHTML;


  /* ══ migration · localStorage persistence + cross-page router ════════
     Single source of truth: in-memory objects stay as in v8; every mutation
     path (toast, navigation, pagehide) mirrors them to localStorage, and
     restoreSS() rehydrates before the eager renders at boot. */
  var SS_KEY = 'ss.v8.state';
  /* FIX (login-bounce) · journey rank: persistence must never walk auth
     flags backwards. A stale page's lifecycle save (pagehide, bfcache,
     second tab backgrounding) used to clobber a further page's newer
     write — the root cause of signedUp=false after signup+verify. */
  var _AUTH_FLAGS = ['signedUp', 'email', 'healthDone', 'chosen', 'onboarded'];
  function _journeyRank(s) {
    if (!s) return 0;
    if (s.onboarded) return 5;
    if (s.chosen)    return 4;
    if (s.healthDone) return 3;
    if (s.signedUp)   return 2;
    if (s.email)      return 1;
    return 0;
  }
  function saveSS(force) {
    if (_loggingOut) return;   /* logout · state cleared deliberately — do not rewrite */
    try {
      var snap = {
        S: S, SOLE: SOLE, BLOCKLIST: BLOCKLIST, DM_META: DM_META, DM: DM,
        CHAT: CHAT, BUDDIES: BUDDIES, BUDDY_REQS: BUDDY_REQS, DM_REQS: DM_REQS,
        EVENTS: EVENTS, GROUPS: GROUPS, PUBLIC_GROUPS: PUBLIC_GROUPS,
        CHANNELS_META: CHANNELS_META, LA: LA,
        flags: { soloMode: soloMode, GOAL: GOAL, soloGoal: soloGoal, gView: gView,
                 chatTab: chatTab }
      };
      if (!force) {
        var d0 = null; try { d0 = JSON.parse(localStorage.getItem(SS_KEY)); } catch (e0) {}
        if (d0 && d0.S && _journeyRank(d0.S) > _journeyRank(S)) {
          /* disk already carries a further journey — keep its auth flags
             (and adopt them in-memory so this page stops seeing stale) */
          _AUTH_FLAGS.forEach(function (k) { S[k] = d0.S[k]; });
        }
      }
      localStorage.setItem(SS_KEY, JSON.stringify(snap));
    } catch (e) { /* storage full/disabled — prototype keeps in-memory state */ }
  }
  /* FIX (login-bounce): canonical immediate persist — call FIRST at every
     flag mutation and before every navigation, so a snapshot can never
     precede the mutation it is supposed to carry. force=true only for
     deliberate full resets (delete account / reset demo). */
  function saveNow(force) { saveSS(force); }
  function _mergeInto(target, saved) {   /* object dicts: keep identity */
    Object.keys(saved).forEach(function (k) { target[k] = saved[k]; });
  }
  function restoreSS() {
    var d = null;
    try { d = JSON.parse(localStorage.getItem(SS_KEY)); } catch (e) {}
    if (!d) return;
    if (d.S) Object.assign(S, d.S);
    if (d.SOLE) { Object.keys(d.SOLE).forEach(function (k) { SOLE[k] = d.SOLE[k]; }); }
    if (d.BLOCKLIST) BLOCKLIST = d.BLOCKLIST;
    if (d.DM_META) DM_META = d.DM_META;
    if (d.DM) _mergeInto(DM, d.DM);
    if (d.CHAT) _mergeInto(CHAT, d.CHAT);
    if (d.BUDDIES) BUDDIES = d.BUDDIES;
    if (d.BUDDY_REQS) BUDDY_REQS = d.BUDDY_REQS;
    if (d.DM_REQS) DM_REQS = d.DM_REQS;
    if (d.EVENTS) { EVENTS.length = 0; d.EVENTS.forEach(function (e) { EVENTS.push(e); }); }
    if (d.GROUPS) GROUPS = d.GROUPS;
    if (d.PUBLIC_GROUPS) PUBLIC_GROUPS = d.PUBLIC_GROUPS;
    if (d.CHANNELS_META) CHANNELS_META = d.CHANNELS_META;
    if (d.LA) _mergeInto(LA, d.LA);
    if (d.flags) {
      soloMode = !!d.flags.soloMode;
      if (typeof d.flags.GOAL === 'number') GOAL = d.flags.GOAL;
      if (typeof d.flags.soloGoal === 'number') soloGoal = d.flags.soloGoal;
      if (typeof d.flags.gView === 'string') gView = d.flags.gView;
      if (typeof d.flags.chatTab === 'string') chatTab = d.flags.chatTab;
    }
  }

  /* routeTo: cross-page navigation with context carried via query params */
  function routeTo(id) {
    saveNow();                 /* FIX (login-bounce): persist truth before we navigate */
    var file = PAGE_OF[id];
    if (!file) return false;   /* unknown screen — stay put, same as v8 no-op */
    var q = [];
    function p(k, v) { if (v !== null && v !== undefined && v !== '') q.push(k + '=' + encodeURIComponent(v)); }
    if (id === 'scr-chat-thread') p('ch', curChannel);
    if (id === 'scr-dm-thread')   p('dm', dmPeer ? dmPeer.name : '');
    if (id === 'scr-user')        p('u', userCtx ? userCtx.n : '');
    if (id === 'scr-group')       { p('g', currentGroup ? currentGroup.id : ''); if (curGroupTab) p('tab', curGroupTab); }
    if (id === 'scr-groups') {
      if (gView && gView !== 'mine') p('view', gView);
      if (discoverCity !== null && discoverCity !== undefined) p('city', discoverCity);
    }
    location.href = file + (q.length ? '?' + q.join('&') : '');
    return true;
  }

  function findUserRow(name) {
    try {
      var keys = Object.keys(LB);
      for (var k = 0; k < keys.length; k++) {
        var arr = LB[keys[k]];
        if (!Array.isArray(arr)) continue;
        for (var i = 0; i < arr.length; i++) if (arr[i] && arr[i].n === name) return arr[i];
      }
    } catch (e) {}
    for (var g = 0; g < GROUPS.length; g++) {
      var ms = GROUPS[g].members || [];
      for (var m = 0; m < ms.length; m++) if (ms[m].n === name) return { n: name, s: ms[m].d || 0 };
    }
    for (var b = 0; b < BUDDIES.length; b++) if (BUDDIES[b].n === name) return { n: name, s: 0 };
    return { n: name };
  }

  var _toast0 = toast;
  toast = function (msg) { _toast0(msg); saveSS(); };

  function bootPage() {
    var def = document.body.getAttribute('data-screen') || 'scr-today';
    var q = new URLSearchParams(location.search);
    if (q.get('ch')) { openChannel(q.get('ch')); return; }
    if (q.get('dm')) { openDm(q.get('dm')); return; }
    if (q.get('u'))  { openUserProfile(findUserRow(q.get('u')), null); return; }
    if (q.get('g'))  { openGroup(groupById(q.get('g')) ? q.get('g') : currentGroup.id, q.get('tab') || undefined); return; }   /* FIX(qa) · unknown group id falls back to default instead of blank */
    if (q.get('open')) { showScreen(q.get('open')); return; }
    if (document.body.getAttribute('data-splash') === '1' && !S.onboarded && !(S.demo && !S.signedUp)) { bootSplash(); return; }   /* FIX (demo) · demo users boot straight to Today — no splash, no signup bounce */
    if (def === 'scr-groups') {
      if (q.get('city')) discoverCity = q.get('city').toLowerCase();   /* FIX(qa) · filter compares lower-case city */
      if (q.get('view')) gView = q.get('view');
      setGroupsView(gView || 'mine');
      if ((gView || 'mine') === 'discover') renderDiscover();           /* FIX(qa) · re-render after city applied on deep link */
    }
    if (def === 'scr-group')        { openGroup(currentGroup.id); return; }
    if (def === 'scr-chat-thread')  { openChannel(curChannel || 'global'); return; }
    if (def === 'scr-dm-thread')    { openDm(dmPeer ? dmPeer.name : 'Nina P.'); return; }
    if (def === 'scr-user')         { openUserProfile(findUserRow(userCtx ? userCtx.n : 'You'), null); return; }
    showScreen(def);
  }

  restoreSS();
  try { paintYouAvatars(); soleSync(); } catch (e) {}
  window.addEventListener('pagehide', function () { saveSS(); });   /* no event-as-force (monotonic guard stays armed) */
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') saveSS(); });

  renderNotif();
  renderNearby();
  syncBellDots();

  /* ── device presentation: scale the frame to fit the viewport ─────
     Desktop only. ≤500px the CSS media query dissolves the frame and
     the app fills 100dvh, so we hand the sizing back to CSS. */
  var fitBox  = document.querySelector('.fit');
  var frameEl = document.querySelector('.device-frame');
  var mqMobile = window.matchMedia('(max-width: 500px)');
  var DW = 413, DH = 872;                 // bezel outer size (393×852 screen + 2×10px)
  function fitDevice() {
    if (mqMobile.matches) {
      frameEl.style.transform = '';
      fitBox.style.width = '';
      fitBox.style.height = '';
      return;
    }
    var s = Math.min(1, (window.innerWidth - 48) / DW, (window.innerHeight - 130) / DH);
    if (!isFinite(s) || s <= 0) s = 1;
    frameEl.style.transform = 'scale(' + s + ')';
    fitBox.style.width  = Math.round(DW * s) + 'px';
    fitBox.style.height = Math.round(DH * s) + 'px';
  }
  window.addEventListener('resize', fitDevice);
  if (mqMobile.addEventListener) mqMobile.addEventListener('change', fitDevice);
  fitDevice();

  /* ═══ v9 · stats screen (stats.html) ══════════════════════════════
     Deterministic mock series per range · six toggleable cards ·
     persistence in S.statsCards inside the existing SS_KEY snapshot. */
  if (!S.statsCards) S.statsCards = { bars: true, heat: true, streak: true, goal: true, squad: true, best: true };

  (function statsModule () {
    var RANGE_DAYS = { 'today': 7, '7d': 7, '30d': 30, '14d': 14, '60d': 60, '90d': 90 };
    var statsRange = '7d';   /* token: today | 7d | 30d | 14d | 60d | 90d | year */
    function sr (i) { var x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
    function daysIn (t) {
      if (t === 'year') { var d = new Date(); return Math.max(1, Math.round((d - new Date(d.getFullYear(), 0, 1)) / 864e5) + 1); }
      return RANGE_DAYS[t] || 7;
    }
    /* For Today the band reflects a single day; trend series still shows the week. */
    var STEP_EPOCH = 9000, GOAL_STAT = 9000;
    function daySteps (absIdx) { return Math.round(6200 + sr(absIdx) * 5600); }
    function series (n, trendN) {
      var m = trendN || n, out = [];
      for (var k = 0; k < m; k++) out.push(daySteps(STEP_EPOCH + k));
      return out;
    }
    function fmtN (n) { return Math.round(n).toLocaleString('en-US'); }
    function dayLabel (nAgo) {
      var d = new Date(); d.setDate(d.getDate() - nAgo);
      return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }
    function renderStats () {
      if (!SCREENS['scr-stats']) return;
      var days = statsRange === 'year' ? daysIn('year') : (RANGE_DAYS[statsRange] || 7);
      var bandDays = statsRange === 'today' ? 1 : days;   /* Today band = single day; charts keep the week */
      var s = series(days);
      var band = s.slice(s.length - bandDays);
      var total = band.reduce(function (a, b) { return a + b; }, 0);

      /* ── summary band (re-scales per range) ── */
      var el;
      if ((el = document.getElementById('stats-steps'))) el.textContent = fmtN(total);
      if ((el = document.getElementById('stats-km'))) el.textContent = (total * 0.00072).toFixed(1);
      if ((el = document.getElementById('stats-active'))) el.textContent = fmtN(total / 115);
      if ((el = document.getElementById('stats-kcal'))) el.textContent = fmtN(total * 0.041);

      /* ── 1 · daily bars, ≤14 bins, goal line ── */
      var host = document.getElementById('bars-chart');
      if (host) {
        var bins = Math.min(s.length, 14), size = Math.ceil(s.length / bins), vals = [];
        for (var b = 0; b < bins; b++) {
          var chunk = s.slice(b * size, (b + 1) * size);
          vals.push(Math.round(chunk.reduce(function (a, x) { return a + x; }, 0) / chunk.length));
        }
        var maxV = Math.max(GOAL_STAT * 1.12, Math.max.apply(null, vals));
        var gPct = Math.round(GOAL_STAT / maxV * 100);
        var html = '<span class="goal-line" style="bottom:' + gPct + '%" aria-hidden="true"><i>Goal</i></span>';
        for (var v = 0; v < bins; v++) {
          var h = Math.max(6, Math.round(vals[v] / maxV * 100));
          var hit = vals[v] >= GOAL_STAT;
          var lbl = bins <= 8 ? ['S', 'M', 'T', 'W', 'T', 'F', 'S'][7 - bins + v] || '' : (v === 0 || v === bins - 1 ? '•' : '');
          html += '<span class="sb-col' + (v === bins - 1 ? ' is-last' : '') + '"><span class="sb-bar' + (hit ? ' hit' : '') + '" style="height:' + h + '%" title="' + fmtN(vals[v]) + ' steps"></span><span class="sb-lbl">' + lbl + '</span></span>';
        }
        host.className = 'stats-bars';
        host.innerHTML = html;
      }

      /* ── 2 · hourly heat, 12 bins 6a–6p ── */
      var heat = document.getElementById('heat-chart');
      if (heat) {
        var weights = [0.28, 0.42, 0.7, 0.55, 0.34, 0.4, 0.3, 0.36, 0.52, 0.86, 0.98, 0.6];
        var hMax = 1, hv = [];
        for (var i2 = 0; i2 < 12; i2++) { var val = Math.round(weights[i2] * (0.7 + sr(i2 * 7 + days) * 0.6) * 100) / 100; hv.push(val); if (val > hMax) hMax = val; }
        var hHtml = '';
        for (var i3 = 0; i3 < 12; i3++) {
          hHtml += '<span class="ht-col"><span class="ht-bar" style="height:' + Math.round(hv[i3] / hMax * 100) + '%"></span><span class="ht-lbl">' + (6 + i3 === 12 ? '12' : (6 + i3 > 12 ? 6 + i3 - 12 : 6 + i3)) + (6 + i3 >= 12 ? 'p' : 'a') + '</span></span>';
        }
        heat.className = 'heat-row';
        heat.innerHTML = hHtml;
      }

      /* ── 3 · streak timeline, segmented hit/miss ── */
      var seg = document.getElementById('streak-seg');
      if (seg) {
        var segN = Math.min(s.length, 30), sHtml = '';
        for (var k2 = s.length - segN; k2 < s.length; k2++) {
          var ok = s[k2] >= GOAL_STAT;
          sHtml += '<span class="seg-cell' + (ok ? ' on' : '') + '" title="' + dayLabel(s.length - 1 - k2) + '"></span>';
        }
        seg.className = 'seg-bar';
        seg.innerHTML = sHtml;
        var sl = document.getElementById('streak-line');
        if (sl) sl.textContent = 'Now 12d · best 34d';
      }

      /* ── 4 · goal hit ring ── */
      var ring = document.getElementById('goal-ring');
      if (ring) {
        var hitPct = Math.round(s.filter(function (x) { return x >= GOAL_STAT; }).length / s.length * 100);
        var C = 264, dash = Math.round(C * hitPct / 100);
        ring.innerHTML =
          '<svg viewBox="0 0 100 100" role="img" aria-label="' + hitPct + '% of days hit goal">' +
          '<circle class="gr-track" cx="50" cy="50" r="42"/>' +
          '<circle class="gr-prog" cx="50" cy="50" r="42" stroke-dasharray="' + dash + ' ' + (C - dash) + '"/>' +
          '</svg><b class="gr-num num">' + hitPct + '%</b>';
      }

      /* ── 5 · squad comparison ── */
      var cmp = document.getElementById('squad-cmp');
      if (cmp) {
        var you = Math.round(total / bandDays), avg = Math.round(you * (0.88 + sr(days) * 0.22));
        var m2 = Math.max(you, avg) * 1.18;
        cmp.innerHTML =
          '<div class="cmp-row"><span class="cmp-lbl">You</span><span class="cmp-track"><span class="cmp-bar mine" style="width:' + Math.round(you / m2 * 100) + '%"></span></span><span class="cmp-v num">' + fmtN(you) + '</span></div>' +
          '<div class="cmp-row"><span class="cmp-lbl">Squad</span><span class="cmp-track"><span class="cmp-bar" style="width:' + Math.round(avg / m2 * 100) + '%"></span></span><span class="cmp-v num">' + fmtN(avg) + '</span></div>';
      }

      /* ── 6 · best day ── */
      var bestN = document.getElementById('best-num'), bestD = document.getElementById('best-date');
      if (bestN && bestD) {
        var mx = Math.max.apply(null, s), pos = s.indexOf(mx);
        bestN.innerHTML = safeHTML(fmtN(mx) + ' <svg class="ico" aria-hidden="true"><use href="#ic-footprint"></use></svg>');
        bestD.textContent = dayLabel(s.length - 1 - pos);
      }

      /* ── chips + hidden-card state ── */
      document.querySelectorAll('.range-chip').forEach(function (c) {
        var t = c.dataset.range;
        var isActive = t === statsRange ||
          (t === 'custom' && ['14d', '60d', '90d', 'year'].indexOf(statsRange) > -1);
        c.classList.toggle('active', isActive);
        c.setAttribute('aria-pressed', String(isActive));
      });
      /* v10 · appbar mini mirrors the active range */
      if (SCREENS['scr-stats']) {
        var _mini = document.getElementById('appbar-mini');
        if (_mini) _mini.textContent = ({
          today: 'Today', '7d': '7 days', '30d': '30 days',
          '14d': '14 days', '60d': '60 days', '90d': '90 days', year: '365 days'
        })[statsRange] || '7 days';
      }
      applyCards();
    }
    function applyCards () {
      Object.keys(S.statsCards).forEach(function (k) {
        var c = document.getElementById('card-' + k);
        if (c && SCREENS['scr-stats']) c.hidden = !S.statsCards[k];
      });
      document.querySelectorAll('#cards-sheet .fs-opt input').forEach(function (inp) {
        inp.checked = !!S.statsCards[inp.dataset.card];
        inp.closest('.fs-opt').classList.toggle('is-on', inp.checked);
      });
    }
    function setRange (t) {
      statsRange = t;
      try { history.replaceState(null, '', '?range=' + encodeURIComponent(t === '14d' || t === '60d' || t === '90d' || t === 'year' ? 'custom:' + t : t)); } catch (e) {}
      closeSheets();
      renderStats();
    }

    if (SCREENS['scr-stats']) {
      document.querySelectorAll('.range-chip').forEach(function (c) {
        c.addEventListener('click', function () {
          if (!c.dataset.range) return;
          if (c.dataset.range === 'custom') { openSheet(document.getElementById('custom-sheet')); return; }
          setRange(c.dataset.range);
        });
      });
      document.querySelectorAll('#custom-sheet [data-crange]').forEach(function (b) {
        b.addEventListener('click', function () { setRange(b.dataset.crange); });
      });
      document.querySelectorAll('#custom-sheet .sheet__x, #cards-sheet .sheet__x').forEach(function (x) {
        x.addEventListener('click', closeSheets);
      });
      document.getElementById('stats-customize').addEventListener('click', function () {
        applyCards();
        openSheet(document.getElementById('cards-sheet'));
      });
      document.querySelectorAll('#cards-sheet .fs-opt input').forEach(function (inp) {
        inp.addEventListener('change', function () {
          S.statsCards[inp.dataset.card] = inp.checked;
          saveNow();
          applyCards();
        });
      });
      document.getElementById('btn-cards-done').addEventListener('click', closeSheets);
      document.getElementById('btn-custom-cancel').addEventListener('click', closeSheets);

      /* deep link: ?range=today|7d|30d|custom:14d|60d|90d|year */
      var _q = (new URLSearchParams(location.search).get('range') || '').replace('custom:', '');
      if (['today', '7d', '30d', '14d', '60d', '90d', 'year'].indexOf(_q) > -1) statsRange = _q;
      enterHooks['scr-stats'] = renderStats;
      renderStats();
    }
  })();

  /* boot: every data-driven screen renders eagerly — never blank */
  renderGroups();
  renderHub();
  renderDiscover();
  refreshTodayGoal();
  drawQr(document.getElementById('invite-link').textContent.trim());
  bootPage();
})();
