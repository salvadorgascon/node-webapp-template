export default function emptyErrorList(formSelector) {
  $('div[data-val-validation-error-list="true"]').addClass("d-none");
  $('div[data-val-validation-error-list="true"] ul').empty();

  $(formSelector).find(".is-invalid").removeClass("is-invalid");
}
