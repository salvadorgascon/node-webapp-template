import errorNotification from "scripts/core/functions/notifications/error-notification";

export default function ajaxPostBlock(
  url,
  data,
  htmlBlockId,
  blockMessage,
  errorMessage,
  callback
) {
  window.KTApp.block(`#${htmlBlockId}`, {
    state: "primary",
    message: blockMessage,
  });

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
    })
    .then(() => {
      window.KTApp.unblock(`#${htmlBlockId}`);
    });
}
