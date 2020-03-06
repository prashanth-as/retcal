function switchToMort() {
      removeActive();
      hideAll();
      $("#mort").addClass("is-active");
      $("#mort-content").removeClass("is-hidden");
    }

    function switchToRetire() {
      removeActive();
      hideAll();
      $("#retirement").addClass("is-active");
      $("#retirement-content").removeClass("is-hidden");
    }

    function removeActive() {
      $("li").each(function() {
        $(this).removeClass("is-active");
      });
    }

    function hideAll(){
      $("#mort-content").addClass("is-hidden");
      $("#retirement-content").addClass("is-hidden");
    }