$(function() {
  $("#addComment").on("click", function() {
    body = $("#textComment")
      .val()
      .trim();
    id = $(this).data("id");
    $.ajax("/comment/" + id, {
      type: "POST",
      data: { body: body, id: id }
    }).then(data => {
      if (data) {
        location.reload(true);
      }
    });
  });
  $("ul#comments").on("click", ".deleteComment", function() {
    id = $(this).data("id");
    $.ajax("/comment/" + id, {
      type: "DELETE",
      data: { id: id }
    }).then(location.reload());
  });
});
