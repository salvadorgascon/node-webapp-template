import english from "data/intl/en.json";
import buttons from "data/intl/buttons-en.json";
import dialogs from "data/intl/dialogs-en.json";
import notifications from "data/intl/notifications-en.json";
import forms from "data/intl/forms-en.json";
import editors from "data/intl/editors-en.json";
import users from "data/intl/users-en.json";
import tables from "data/intl/tables-en.json";

export default function buildIntlMessages() {
  const intlMessages = {
    ...english,
    ...buttons,
    ...dialogs,
    ...notifications,
    ...forms,
    ...editors,
    ...tables,
    ...users
  };

  return intlMessages;
}

