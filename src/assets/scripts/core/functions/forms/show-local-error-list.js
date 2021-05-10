export default function showLocalErrorList(errors) {
  let htmlList = "";

  for (let i = 0; i < errors.length; i += 1) {
    const item = errors[i];

    const control = $(item.element);

    const textLabel = control
      .parents("div.form-group:first")
      .find("label.control-label")
      .text();

    if (textLabel && item.element.id) {
      htmlList += `<li><a href="" data-target-id="${control[0].id}">${textLabel}</a>: ${item.message}</li>`;
    } else {
      htmlList += `<li>${item.message}</li>`;
    }

    control.addClass("is-invalid");
  }

  $('div[data-val-validation-error-list="true"] ul').append(htmlList);

  $('div[data-val-validation-error-list="true"] ul li a').click(function () {
    const targetId = $(this).attr("data-target-id");

    $("html, body").animate({ scrollTop: $(`#${targetId}`).offset().top }, 500);

    return false;
  });

  if (errors.length > 0) {
    $('div[data-val-validation-error-list="true"]').removeClass("d-none");
  }
}
