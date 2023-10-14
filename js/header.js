// Opening Dropdown on hover
$('.dropdown').hover(

  // On hover of "dropdown" class, below function executed
    function() {

      // this keyword selects the element which is hovered now
      // addClass method adds a class named show to it
      $(this).addClass('show');

      // find method finds "dropdown-menu" and addClass adds show to it
      $(this).find('.dropdown-menu').addClass('show');

      // this is how the dropdown-menu is shown when we hover on dropdown
    },

    // When the cursor is removed, this function is executed
    function() {

      // removeClass removes the show class from this element
      $(this).removeClass('show');

      // Same finding is happening and removeClass removes the show class
      $(this).find('.dropdown-menu').removeClass('show');
    }
  );

  // Both the functions execute everytime we hover on dropdown menu
  