if (process.client) {
  window.onNuxtReady(() => {
    const script = document.createElement("script");

    script.src =
      "//static.cdn.prismic.io/prismic.min.js?repo=XXXXXXXXXXXXXXX&new=true";
    document.body.appendChild(script);
  });
}
