import errorNotification from "scripts/core/functions/notifications/error-notification";

export default function ajaxDeleteRecord(url, errorMessage, callback) {
  window.axios
    .delete(url)
    .then((response) => {
      if (typeof response.data === "object") {
        if (response.data.IsValid) {
          callback(response.data);
        } else {
          errorNotification(errorMessage);
        }
      } else {
        errorNotification(errorMessage);
      }
    })
    .catch((error) => {
      errorNotification(errorMessage);
    });
}
