

document.getElementById("generateButton").addEventListener("click", () => {
  var siteTitle = document.getElementById("siteTitle").value;
  var headerLink1 = document.getElementById(headerLink1).value;
  var headerLink2 = document.getElementById(headerLink2).value;
  var tagline = document.getElementById("tagline").value;
  var button1Link = document.getElementById("button1Link").value;
  var button1Text = document.getElementById("button1Text").value;
  var button2Link = document.getElementById("button2Link").value;
  var button2Text = document.getElementById("button2Text").value;
  var button3Link = document.getElementById("button3Link").value;
  var button3Text = document.getElementById("button3Text").value;
  var thisWebsite = document.getElementById("thisWebsite").value;
  var youtubeVideoId = document.getElementById("youtubeVideoId").value;
  var indicatorButton1Text = document.getElementById(
    "indicatorButton1Text"
  ).value;
  var indicatorButton2Text = document.getElementById(
    "indicatorButton2Text"
  ).value;
  var indicatorButton1Link = document.getElementById(
    "indicatorButton1Link"
  ).value;
  var indicatorButton2Link = document.getElementById(
    "indicatorButton2Link"
  ).value;
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

  var head = `
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
`;

  // Logo of product should be in assets/logo.png
  var navbar = `
<body>
  <!-- This is the sticky navbar -->
  <div id="sticky-bar">
    <div id="sticky-bar-content">
      <div class="backdrop"></div>
      <div class="foreground">
        <div id="sticky-bar-squeezer">
          <a id="sticky-bar-home" href="javascript:;" onclick="return scrollToTop();">
            <img src="./assets/logo.png" width="50px" height="50px">
            <h4>${siteTitle}</h4>
          </a>

          <div id="sticky-bar-links">

            <!-- Sticky Link 1 -->
            <a href="${headerLink1}" target="_blank">${headerText1}</a>
            <div class="padding"></div>

            <!-- Sticky Link 2 -->
            <a href="${headerLink2}/releases">${headerText2}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

  var main = `
  <div id="main-padding">
    <!-- Contains all content including footer -->
    <div class="main">
      <div id="section-1" class="section-alignment">

        <!-- Top content -->
        <img id="app-icon" src="./assets/logo.png">
        <h2 id="landing-header">${siteTitle}</h2>
        <h4 id="landing-subtitle">${tagline}</h4>
        <div class="padding"></div>
`;
  // For localVideo, the video should be in assets/video.mp4
  var localVideo = `
        <video class="video" id="opening-video" width="100%" autoplay muted playsinline>
          <source src="assets/video.mp4" type="video/mp4">
        </video>
  `;

  var youtubeVideo = `
        <iframe width="90%" height="380px" src="${youtubeVideoId}" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
`;
  var downloadButtons = `
        <div class="padding-semi-large"></div>

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
`;
  var indicatorButtons = `
        <!-- Indicators -->
        <div id="indicators">

          <div id="repo-links">
            <!-- Releases -->
            <a class="indicator" href="${indicatorButton1Link}/releases" target="_blank">${indicatorButton1Text}</a>

            <p class="indicator indicator-separator">•</p>

            <!-- Repository -->
            <a class="indicator" href="${indicatorButton2Link}" target="_blank">${indicatorButton2Text}</a>
          </div>
        </div>
        `;

  // For images, they have to be named: assets/image1.png assets/image2.png assets/image3.png
  var info1 = `
      </div>

      <div class="padding-large"></div>
      <div class="padding-large"></div>
      <div class="padding-small"></div>

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

`;
  var info2 = `
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
`;

  var info3 = `
        <div class="blurb">
          <h3>${bodyTitle3}</h3>
          <div class="padding-small"></div>
          <span id="emoji-magnifying-glass" class="emoji">${bodyEmoji3}</span>
        </div>
        <p>
          ${bodySubtitle3}
        </p>
        <div class="center-image">
          <img id="image1" src="assets/image3.png">
        </div>
`;

  var faq1 = `
  <hr>
      <div id="faq">
        <!-- FAQ -->
        <h2>Frequently asked questions</h2>

        <div class="padding"></div>

        <!-- Question 1 -->
        <div class="padding-faq-block">
          <h4>${q1}</h4>
          <p>${a1}</p>
        </div>
`;
  var faq2 = `
        <div class="padding-faq-block">
          <h4>${q2}</h4>
          <p>${a2}</p>
        </div>
`;
  var faq3 = `
        <!-- Compatibility Question -->
        <div class="padding-faq-block">
          <h4>${q3}</h4>
          <p>${a3}</p>
        </div>
`;
  var faq4 = `
        <!-- Question 4 -->
        <div class="padding-faq-block" id="privacy">
          <h4>${q4}</h4>
          <p>${a4}</p>
        </div>
`;
  var faqEnd = `
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
`;
  var footer = `
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

  // console.log(html);
  // document.getElementById("websiteCode").innerHTML = html;
});
