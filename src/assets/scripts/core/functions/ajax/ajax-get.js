import errorNotification from "scripts/core/functions/notifications/error-notification";

export default function ajaxGet(url, errorMessage, callback) {
  window.axios
    .get(url)
    .then((response) => {
      if (typeof response.data === "object") {
        callback(response.data);
      } else {
        errorNotification(errorMessage);
      }
    })
    .catch((error) => {
      errorNotification(errorMessage);
    });
}
