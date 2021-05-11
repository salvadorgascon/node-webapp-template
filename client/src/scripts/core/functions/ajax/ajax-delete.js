import errorNotification from "scripts/core/functions/notifications/error-notification";

export default function ajaxDelete(url, errorMessage, callback) {
  window.axios
    .delete(url)
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
