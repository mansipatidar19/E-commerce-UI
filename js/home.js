// Executed after DOM loading
$(function(){

    // $ and # used together so it selects the element with the particular ID
    // load method is used to load pages
    $('#header').load("/pages/partials/header.html");
    $('#books').load("/pages/partials/slider.html");
    $('#banner').load("/pages/partials/banner.html");
    $('#footer').load("/pages/partials/footer.html");
}) 