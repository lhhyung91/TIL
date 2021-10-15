import axios from 'axios';

export const getapidata = async searchValue => {
  // const apiAddress = `https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}`;
  // const apiAddress = `https://api.github.com/search/repositories?q=${searchValue}{&page,per_page,sort,order}`;
  const apiAddress = `https://api.github.com/search/repositories?q=${searchValue}`;
  const token = 'token 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';

  const res = await axios.get(`${apiAddress}`, {
    headers: {
      Authorization: token,
    },
  });

  return res.data.items;
};

// const searchrepos = searchValue => {
//   getData(searchValue);
// };
