/* eslint-disable */
const analytics = {
  onAccept: function(option = `true`) {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag(`js`, new Date());
    gtag(`config`, `G-6PWBLDMWTG`);
  },
  onRevoke: function(){
    window['ga-disable-G-6PWBLDMWTG'] = true;
  }
};

export default analytics;
