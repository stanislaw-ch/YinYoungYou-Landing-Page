/* eslint-disable */
var config = {
  apiKey: '592b99ebdf88c091dad9b556b6d8de236ac97687',
  product: 'PRO_MULTISITE',
  text : {
      thirdPartyTitle : 'Warning: Some cookies require your attention',
      thirdPartyDescription : 'Consent for some third party cookies can not be automatically revoked. Please follow the link below if you want to opt out of them.'
  },
  optionalCookies: [
      {
        name : 'analytics',
        label: 'Analytical Cookies',
        description: 'Analytical cookies help us to improve our website by collecting and reporting information on its usage.',
        cookies: ['_ga', '_gid', '_gat', '__utma', '__utmt', '__utmb', '__utmc', '__utmz', '__utmv'],
        vendors: [{
          name: "Google",
          url: "https://policies.google.com/technologies/types?hl=en-US",
          description: "Google Analytics"
        }],
        onAccept : function(){
            // Add Google Analytics
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-XXXXX-Y', 'auto');
            ga('send', 'pageview');
            // End Google Analytics
        },
        onRevoke: function(){
            // Disable Google Analytics
            window['ga-disable-UA-XXXXX-Y'] = true;
            // End Google Analytics
        }
    },
  ],
};

CookieControl.load(config);
