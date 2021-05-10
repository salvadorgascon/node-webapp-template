export default function showRemoteErrorList(formSelector, errors) {
  let htmlList = "";

  const controls = $(formSelector).find("input,select,textarea");

  const objectKeys = Object.keys(errors);

  for (let i = 0; i < objectKeys.length; i++) {
    const attributeName = objectKeys[i];
    let fieldName = attributeName;

    let control = null;

    for (let j = 0; j < controls.length; j++) {
      const tempControl = $(controls[j]);

      const attrName = tempControl.attr("name");

      if (attrName && attrName.includes(`[${attributeName}]`)) {
        const textLabel = tempControl
          .parents("div.form-group:first")
          .find("label.control-label")
          .text();

        if (textLabel) {
          fieldName = textLabel;
        }

        tempControl.addClass("is-invalid");

        control = tempControl;
        break;
      }
    }

    if (control && control.length > 0 && control[0].id) {
      htmlList += `<li><a href="" data-target-id="${control[0].id}">${fieldName}</a>: ${errors[attributeName]}</li>`;
    } else {
      htmlList += `<li>${fieldName}: ${errors[attributeName]}</li>`;
    }
  }

  $('div[data-val-validation-error-list="true"] ul').append(htmlList);

  $('div[data-val-validation-error-list="true"] ul li a').click(function () {
    const targetId = $(this).attr("data-target-id");

    $("html, body").animate({ scrollTop: $(`#${targetId}`).offset().top }, 500);

    return false;
  });

  if (Object.keys(errors).length > 0) {
    $('div[data-val-validation-error-list="true"]').removeClass("d-none");
  }
}
