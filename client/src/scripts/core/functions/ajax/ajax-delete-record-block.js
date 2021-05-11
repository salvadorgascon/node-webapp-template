import errorNotification from "scripts/core/functions/notifications/error-notification";
import successNotification from "scripts/core/functions/notifications/success-notification";

export default function ajaxDeleteRecordBlock(
  url,
  htmlBlockId,
  errorMessage,
  successMessage,
  callback
) {
  window.KTApp.block(`#${htmlBlockId}`, {
    state: "primary",
    message: window.intlMessages.deleting,
  });

  window.axios
    .delete(url)
    .then((response) => {
      if (typeof response.data === "object") {
        if (response.data.IsValid) {
          successNotification(successMessage);
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
    })
    .then(() => {
      window.KTApp.unblock(`#${htmlBlockId}`);
    });
}
