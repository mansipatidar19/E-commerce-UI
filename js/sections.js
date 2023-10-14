$(function () {
  // Load header
  $("#header").load("/pages/partials/header.html");

  // Load footer
  $("#footer").load("/pages/partials/footer.html");

  // Define sections and their corresponding containers
  var sections = [
    "happiness", "personal-growth", "spiritual", "self-help", 
    "biography", "essay", "technical", "non-fiction", "novels"
  ];

  // Loop through sections and load content
  sections.forEach(function(section) {
    $.ajax({
      // "GET" data which is of type html from the all-books.html 
      url: "/pages/all-books.html",
      type: "GET",
      dataType: "html",

      // if its successful, this is called
      success: function (data) {
        var sectionContent = $(data).find("#" + section).html();
        $("#" + section + "-container").html(sectionContent);
      },

      // if it failed error: is called
      error: function (error) {
        console.error('Error loading "' + section + '" section:', error);
      },
    });
  });
});
