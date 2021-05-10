export default function enableForm(formSelector) {
  $(formSelector)
    .find('input[type="text"]')
    .not('[data-val-readonly="true"]')
    .removeAttr("disabled");
  $(formSelector)
    .find('input[type="file"]')
    .not('[data-val-readonly="true"]')
    .removeAttr("disabled");
  $(formSelector)
    .find('input[type="email"]')
    .not('[data-val-readonly="true"]')
    .removeAttr("disabled");
  $(formSelector)
    .find('input[type="password"]')
    .not('[data-val-readonly="true"]')
    .removeAttr("disabled");
  $(formSelector)
    .find('input[type="number"]')
    .not('[data-val-readonly="true"]')
    .removeAttr("disabled");

  $(formSelector)
    .find("textarea")
    .not('[data-val-readonly="true"]')
    .removeAttr("disabled");

  $(formSelector)
    .find("select.select2-hidden-accessible")
    .not('[data-val-readonly="true"]')
    .removeAttr("disabled");
  $(formSelector)
    .find("select.select2-hidden-accessible")
    .not('[data-val-readonly="true"]')
    .prop("disabled", false);
}
