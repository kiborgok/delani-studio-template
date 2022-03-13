$(document).ready(function () {
  //Show form popup after 1 second on page load

  setTimeout(function () {
    $(".popup").show("slow");
  }, 1000);

  //Show and hide icon and description on click

  $(".product").click(function () {
    $(this).find(".description").toggle();
    $(this).find(".icon").toggle();
  });

  //Show project name on hover

  $(".port-imgs").hover(function () {
    $(this).find(".port-overlay").toggle();
  });

  //Hide form when 'X' is clicked

  $(".text-end").click(function () {
    setTimeout(function () {
      $(".popup").hide("slow");
    }, 1000);
  });

  //Show thank you message or error message when submit button is clicked

  $(".show-msg").click(function () {
    $("form").submit(function (e) {
      e.preventDefault();
      let name = $(this).find("#name").val();
      let email = $(this).find("#email").val();
      let msg = $(this).find("#textarea").val();
      if (name == "" || email == "" || msg == "") {
          $(this).find(".ms").text("Please fill all fields");
          return
      } else {
        $(this).find(".ms").text(
          name +
            " we have received your message. Thank you for reaching out to us."
        );
          setTimeout(function () {
            $(".ms").remove();
          $(".popup").hide("slow");
        }, 6000);
      }
    });
  });
});
