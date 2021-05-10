export default function loadForm(formSelector, key) {
  const dataJsonString = window.store.session(key);

  const data = JSON.parse(dataJsonString);

  for (const prop in data) {
    if ($(formSelector).find(`input[name="${prop}"]`).length > 0) {
      $(formSelector).find(`input[name="${prop}"]`).val(data[prop]);
    } else if ($(formSelector).find(`select[name="${prop}"]`).length > 0) {
      $(formSelector)
        .find(`select[name="${prop}"]`)
        .val(data[prop])
        .trigger("change");
    }
  }
}
