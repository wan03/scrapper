$(function() {
  $("#addComment").on("click", function() {
    body = $("#textComment")
      .val()
      .trim();
    id = $(this).data("id");
    console.log(id + "__________________" + "\n" + body + "***************");

    $.ajax("/comment/" + id, {
      type: "POST",
      data: { body: body, id: id }
    }).then(location.reload());
  });
  $("ul#comments").on("click", ".deleteComment", function() {
    console.log("delete");
    id = $(this).data("id");
    $.ajax("/comment/" + id, {
      type: "DELETE",
      data: { id: id }
    }).then(location.reload());
  });
});
