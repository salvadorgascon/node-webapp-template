export default function saveForm(key, data) {
  const dataJsonString = JSON.stringify(data);

  window.store.session(key, dataJsonString);
}
