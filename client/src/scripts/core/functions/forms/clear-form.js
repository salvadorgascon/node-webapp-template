export default function clearForm(formSelector) {
  $(formSelector)[0].reset();

  $(formSelector).find("select.select2-hidden-accessible").select2("val", {});
  $(formSelector)
    .find("select.select2-hidden-accessible")
    .val(null)
    .trigger("change");
}
