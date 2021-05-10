export default function buildFormValidation(formId, validators) {
  return window.FormValidation.formValidation(document.getElementById(formId), {
    locale: "ca_ES",
    localization: window.FormValidation.locales.ca_ES,
    fields: validators,
    plugins: {
      bootstrap: new window.FormValidation.plugins.Bootstrap(),
    },
  });
}
