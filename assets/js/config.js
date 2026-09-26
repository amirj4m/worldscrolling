/* ==========================================================================
   worldscrolling — SITE CONFIG
   ==========================================================================
   👋 jam: this is the ONE file to edit for links & contact details.
   Everything on every page (buttons, footer, floating WhatsApp button)
   reads from here. Save the file, refresh, done.

   The same placeholder values are also written into the HTML as fallbacks,
   so a project-wide find-and-replace works too (see README.md).
   ========================================================================== */

window.WS_CONFIG = {
  // Launch city (used in WhatsApp pre-filled messages).
  city: "Athens",

  // WhatsApp number — international format, DIGITS ONLY,
  // no "+", no spaces, no leading zeros. e.g. Greek mobile: "306912345678"
  whatsappNumber: "306975720023",

  // Pre-filled text when someone taps a WhatsApp button.
  whatsappMessage: "Hey! I found worldscrolling and I'm planning a trip to Athens 👋",

  // Public contact email.
  email: "amirj4m@gmail.com",

  // Instagram handle (no @).
  instagram: "worldscrolling",

  // TODO(jam): paste your Stripe Payment Links (one per package).
  // They look like "https://buy.stripe.com/xxxxxxxx".
  stripe: {
    map: "#STRIPE_MAP",       // The Map — €39
    friend: "#STRIPE_FRIEND", // Local Friend on Call — €99
    night: "#STRIPE_NIGHT"    // A Night Out With a Local — €149
  }
};
