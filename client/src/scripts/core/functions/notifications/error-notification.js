export default function errorNotification(message) {
  window.toastr.error(message, window.intlMessages.error);
}
