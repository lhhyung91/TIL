const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "redux",
    body: "어휴..",
  },
  {
    id: 2,
    title: "redux-thunk",
    body: "아니 이건 또..",
  },
  {
    id: 3,
    title: "redux-saga",
    body: "아니 아니 이건 왜 또..",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
