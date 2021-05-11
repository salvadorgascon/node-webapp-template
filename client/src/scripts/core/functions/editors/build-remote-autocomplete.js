export default function buildRemoteAutocomplete(selector, url) {
  const remoteData = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url, // +'?query=%QUERY',
      wildcard: "%QUERY",
      prepare(query, settings) {
        settings.url = `${settings.url}?query=${query}`;
        settings.headers = {};
        return settings;
      },
    },
  });

  $(selector).typeahead(
    {
      hint: true,
      highlight: true,
      minLength: 1,
    },
    {
      limit: 5,
      source: remoteData,
    }
  );

  return null;
}
