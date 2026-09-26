/* worldscrolling — applies WS_CONFIG (config.js) to every [data-link] element. */
(function () {
  var c = window.WS_CONFIG;
  if (!c) return;

  function wa(text) {
    return "https://wa.me/" + c.whatsappNumber + "?text=" + encodeURIComponent(text || c.whatsappMessage);
  }

  document.querySelectorAll("[data-link]").forEach(function (el) {
    var type = el.getAttribute("data-link");
    if (type === "whatsapp") {
      el.href = wa(el.getAttribute("data-wa-text"));
    } else if (type === "email") {
      el.href = "mailto:" + c.email;
      var t = el.querySelector("[data-email-text]");
      if (t) t.textContent = c.email;
    } else if (type === "instagram") {
      el.href = "https://www.instagram.com/" + c.instagram + "/";
    } else if (type.indexOf("stripe-") === 0) {
      var url = c.stripe[type.slice(7)];
      if (url) el.href = url;
      if (!url || url.charAt(0) === "#") {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          console.warn("[worldscrolling] Stripe link for '" + type + "' not set yet — edit assets/js/config.js");
        });
      }
    }
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
