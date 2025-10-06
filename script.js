if (window.location.pathname.match(/\.html$/)) {
    window.location.replace(window.location.pathname.replace(/\.html$/, ""));
}