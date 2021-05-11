export default function successNotification(message) {
  window.toastr.success(message, window.intlMessages.success);
}
