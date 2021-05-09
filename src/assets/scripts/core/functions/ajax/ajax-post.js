import errorNotification from "scripts/core/functions/notifications/error-notification";

export default function ajaxPost(url, data, errorMessage, callback) {
  window.axios
    .post(url, data)
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
