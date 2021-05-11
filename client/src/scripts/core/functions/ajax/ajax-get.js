import errorNotification from "scripts/core/functions/notifications/error-notification";

export default function ajaxGet(url, callback) {
  window.axios
    .get(url)
    .then((response) => {
      if (typeof response.data === "object") {
        callback(response.data);
      } else {
        errorNotification(window.intlMessages.errorLoad);
      }
    })
    .catch((error) => {
      errorNotification(window.intlMessages.errorLoad);
    });
}
