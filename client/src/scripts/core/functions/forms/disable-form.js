export default function disableForm(formSelector) {
  $(formSelector).find('input[type="text"]').attr("disabled", "disabled");
  $(formSelector).find('input[type="file"]').attr("disabled", "disabled");
  $(formSelector).find('input[type="email"]').attr("disabled", "disabled");
  $(formSelector).find('input[type="password"]').attr("disabled", "disabled");
  $(formSelector).find('input[type="number"]').attr("disabled", "disabled");

  $(formSelector).find("textarea").attr("disabled", "disabled");

  $(formSelector)
    .find("select.select2-hidden-accessible")
    .attr("disabled", "disabled");
  $(formSelector)
    .find("select.select2-hidden-accessible")
    .prop("disabled", true);
}
