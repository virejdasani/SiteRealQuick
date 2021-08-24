document.getElementById("generateButton").addEventListener("click", () => {
  var siteTitle = document.getElementById("siteTitle").value;
  var tagline = document.getElementById("tagline").value;
  var button1Link = document.getElementById("button1Link").value;
  var button1Text = document.getElementById("button1Text").value;
  var button2Link = document.getElementById("button2Link").value;
  var button2Text = document.getElementById("button2Text").value;
  var button3Link = document.getElementById("button3Link").value;
  var button3Text = document.getElementById("button3Text").value;
  var thisWebsite = document.getElementById("thisWebsite").value;
  var youtubeVideo = document.getElementById("youtubeVideo").value;
  var bodyTitle1 = document.getElementById("bodyTitle1").value;
  var bodyEmoji1 = document.getElementById("bodyEmoji1").value;
  var bodySubtitle1 = document.getElementById("bodySubtitle1").value;
  var bodyTitle2 = document.getElementById("bodyTitle2").value;
  var bodyEmoji2 = document.getElementById("bodyEmoji2").value;
  var bodySubtitle2 = document.getElementById("bodySubtitle2").value;
  var q1 = document.getElementById("q1").value;
  var a1 = document.getElementById("a1").value;
  var q2 = document.getElementById("q2").value;
  var a2 = document.getElementById("a2").value;
  var q3 = document.getElementById("q3").value;
  var a3 = document.getElementById("a3").value;
  var q4 = document.getElementById("q4").value;
  var a4 = document.getElementById("a4").value;
  var repo = document.getElementById("repo").value;
  var author = document.getElementById("author").value;
  var authorWebsite = document.getElementById("authorWebsite").value;
  var email = document.getElementById("email").value;

  var html = `
<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">

  <!-- Page title and Favicon -->
  <title>${siteTitle}</title>
  <link rel="icon" href="assets/appLogo.png" />

  <!-- Primary Meta Tags -->
  <title>${siteTitle}</title>
  <meta name="title" content="${siteTitle}">
  <meta name="description" content="${tagline}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${thisWebsite}/">
  <meta property="og:title" content="${siteTitle}">
  <meta property="og:description" content="${tagline}">
  <meta property="og:image" content="${thisWebsite}/assets/appLogo.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${thisWebsite}/">
  <meta property="twitter:title" content="${siteTitle}">
  <meta property="twitter:description" content="${tagline}">
  <meta property="twitter:image" content="${thisWebsite}/assets/appLogo.png">

  <!-- Scripts -->
  <script src="./scripts/smooth-scroll.js"></script>
  <script src="./scripts/smooth-scroll-commands.js"></script>

</head>

<body>

  <!-- Used to setup downloads -->
  <iframe id="invisible" style="display:none;"></iframe>

  <!-- This is the sticky bar that moves with a scroll -->
  <div id="sticky-bar">
    <div id="sticky-bar-content">
      <div class="backdrop"></div>
      <div class="foreground">
        <div id="sticky-bar-squeezer">
          <a id="sticky-bar-home" href="javascript:;" onclick="return scrollToTop();">
            <img src="./assets/appLogo.png" width="50px" height="50px">
            <h4>${siteTitle}</h4>
          </a>

          <div id="sticky-bar-links">

            <!-- GitHub Sticky Link -->
            <a href="${repo}" target="_blank">GitHub</a>
            <div class="padding"></div>

            <!-- Download Sticky Link -->
            <a href="${repo}/releases">Downloads</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="main-padding">
    <!-- Contains all content including footer -->
    <div class="main">

      <!-- ----------------------------------------------------------------------- -->
      <!--                                Section 1                                -->
      <!-- ----------------------------------------------------------------------- -->
      <div id="section-1" class="section-alignment">

        <!-- Top content -->
        <img id="app-icon" src="./assets/appLogo.png">
        <h2 id="landing-header">${siteTitle}</h2>
        <h4 id="landing-subtitle">${tagline}</h4>
        <div class="padding"></div>

        <!-- <video class="video" id="opening-video" width="100%" autoplay muted playsinline>
          <source src="assets/video/ResponsivizeFeatureVideo.mp4" type="video/mp4">
        </video> -->

        <iframe width="90%" height="380px" src="${youtubeVideo}" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>

        <div class="padding-semi-large"></div>

        <!-- -------------------------- App store buttons -------------------------- -->

        <div id="app-store-buttons">
          <!-- Download button -->
          <a class="button-standard" href="${button1Link}">${button1Text}<img class="icon-link"
              src="./assets/icons/download-icon.svg"></a>

          <p>|</p>

          <!-- Download button -->
          <a class="button-standard" href="${button2Link}">${button2Text}<img class="icon-link"
              src="./assets/icons/download-icon.svg"></a>

          <p>|</p>

          <!-- Download button -->
          <a class="button-standard" href="${button3Link}">${button3Text}<img class="icon-link"
              src="./assets/icons/download-icon.svg"></a>

        </div>

        <!-- Indicators -->
        <div id="indicators">

          <div id="repo-links">
            <!-- Releases -->
            <a class="indicator" href="${repo}/releases" target="_blank">Releases</a>

            <p class="indicator indicator-separator">•</p>

            <!-- Repository -->
            <a class="indicator" href="${repo}" target="_blank">Repository</a>
          </div>

        </div>
      </div>

      <div class="padding-large"></div>
      <div class="padding-large"></div>
      <div class="padding-small"></div>

      <!-- ----------------------------------------------------------------------- -->
      <!--                                Section 2                                -->
      <!-- ----------------------------------------------------------------------- -->
      <div id="section-2">

        <!-- How does it work -->
        <div class="blurb">
          <h3>${bodyTitle1}</h3>
          <div class="padding-small"></div>
          <span id="emoji-magnifying-glass" class="emoji">${bodyEmoji1}</span>
        </div>
        <p>
          ${bodySubtitle1}
        </p>
        <div class="center-image">
          <img id="image1" src="assets/image1.png">
        </div>

        <div class="padding-blurb"></div>

        <!-- Key support -->
        <div class="blurb">
          <h3>${bodyTitle2}</h3>
          <div class="padding-small"></div>
          <span id="emoji-keyboard" class="emoji">${bodyEmoji2}</span>
        </div>
        <p>
          ${bodySubtitle2}
        </p>
        <div class="center-image">
        </div>

        <div class="center-image">
          <img id="settings-window-image" src="assets/image2.png">
        </div>

      </div>

      <hr>

      <!-- ----------------------------------------------------------------------- -->
      <!--                                Section 3                                -->
      <!-- ----------------------------------------------------------------------- -->
      <div id="faq">

        <!-- FAQ -->
        <h2>Frequently asked questions</h2>

        <div class="padding"></div>

        <!-- Question 2 -->
        <div class="padding-faq-block">
          <h4>${q1}</h4>
          <p>${a1}</p>
        </div>

        <!-- Localization Question -->
        <div class="padding-faq-block">
          <h4>${q2}</h4>
          <p>${a2}</p>
        </div>

        <!-- Compatibility Question -->
        <div class="padding-faq-block">
          <h4>${q3}</h4>
          <p>${a3}</p>
        </div>

        <!-- Question 4 -->
        <div class="padding-faq-block" id="privacy">
          <h4>${q4}</h4>
          <p>${a4}</p>
        </div>

        <!-- Extra padding -->
        <div class="padding-faq-block"></div>

        <!-- Still have questions? -->
        <div class="padding-faq-block">
          <h3 class="contact-us">Still have questions? <a href="mailto: ${email}" class="link">Get in
              touch</a>. Got feedback or ideas for ${siteTitle}? We're all ears! Come <a href="${repo}/issues/new"
              class="link" target="_blank">share them with
              us</a>
            over on Github.
          </h3>
        </div>
      </div>

      <!-- Footer -->
      <div id="footer">

        <hr id="footer-rule" class="remove-bottom-margin">

        <!-- Contains icons, and text -->
        <div id="footer-content">

          <!-- Created by... -->
          <p class="footer-font">${siteTitle} is developed and maintained by <a href="${authorWebsite}" class="link"
              target="_blank">${author}</a></p>
          <!-- Copyright -->
          <p class="footer-font">©2021</p>
        </div>
      </div>

      <!-- Bottom padding -->
      <div class="padding-bottom"></div>
    </div>
  </div>

</body>

</html>
  `;

  console.log(html);
  document.getElementById("websiteCode").innerHTML = html;
});
