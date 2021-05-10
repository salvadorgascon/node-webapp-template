export default function buildLocalAutocomplete(selector, items) {
  const localData = new window.Bloodhound({
    datumTokenizer: window.Bloodhound.tokenizers.whitespace,
    queryTokenizer: window.Bloodhound.tokenizers.whitespace,
    local: items,
  });

  $(selector).typeahead(
    {
      hint: true,
      highlight: true,
      minLength: 1,
    },
    {
      limit: 5,
      source: localData
    }
  );

  return null;
}
