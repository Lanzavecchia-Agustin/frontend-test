import axios from 'axios';

const BASE_URL = 'https://en.wikipedia.org/w/api.php';

const getPersonDetails = async (personName) => {
  const response = await axios.get(BASE_URL, {
    params: {
      action: 'query',
      prop: 'extracts|pageimages',
      exintro: true,
      explaintext: true,
      titles: personName,
      format: 'json',
      redirects: true,
      origin: '*',
      pithumbsize: 500,
    },
  });

  const pages = response.data.query.pages;
  const pageId = Object.keys(pages)[0];

  if (pages[pageId].missing) {
    throw new Error(`No information found for "${personName}"`);
  }

  if (!pages[pageId].extract) {
    throw new Error(`No extract found for "${personName}"`);
  }

  return pages[pageId];
};

export default getPersonDetails;
