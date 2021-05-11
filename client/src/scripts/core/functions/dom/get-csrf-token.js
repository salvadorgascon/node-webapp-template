export default function getCsrfToken() {
    return $('meta[name="csrf-token"]').attr("content");
  }
  