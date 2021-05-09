export default function warningNotification(message) {
  window.toastr.warning(message, window.intlMessages.warning);
}
