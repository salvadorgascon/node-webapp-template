export default function serializeFormObject(formSelector) {
  const formData = {};

  const controls = $(formSelector).find(
    "input.form-control,select.form-control,textarea.form-control"
  );

  for (let i = 0; i < controls.length; i++) {
    const htmlControl = $(controls[i]);

    if (htmlControl.is("input")) {
      if (htmlControl.attr("name") && htmlControl.val() !== undefined) {
        if (
          $(this).attr("type") == "checkbox" ||
          $(this).attr("type") == "radio"
        ) {
          if ($(this).is(":checked")) {
            formData[$(this).attr("name")] = $(this).val();
          }
        } else {
          formData[htmlControl.attr("name")] = htmlControl.val();
        }
      }
    }

    if (htmlControl.is("select")) {
      if (htmlControl.attr("name") && htmlControl.val() !== undefined) {
        const value_selector = htmlControl.val();

        if (typeof value_selector === "string") {
          formData[htmlControl.attr("name")] = value_selector;
        } else if (
          typeof value_selector === "object" &&
          value_selector != null
        ) {
          formData[htmlControl.attr("name")] = value_selector.join(",");
        }
      }
    }

    if (htmlControl.is("textarea")) {
      if (htmlControl.attr("name") && htmlControl.val() !== undefined) {
        formData[htmlControl.attr("name")] = htmlControl.val();
      }
    }
  }

  return formData;
}
