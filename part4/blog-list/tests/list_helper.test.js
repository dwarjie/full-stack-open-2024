const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

const oneBlogList = [
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
    likes: 5,
    __v: 0,
  },
];

const multipleBlogsList = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

describe("Total likes", () => {
  test("of empty list is zero", () => {
    assert.strictEqual(listHelper.totalLikes([]), 0);
  });

  test("of only one blog should equal to the blog likes", () => {
    assert.strictEqual(listHelper.totalLikes(oneBlogList), 5);
  });

  test("of multiple blogs should be the total likes of all blogs", () => {
    assert.strictEqual(listHelper.totalLikes(multipleBlogsList), 36);
  });
});

describe("Favorite Blog", () => {
  test("of empty blog list is empty object", () => {
    assert.deepStrictEqual(listHelper.favoriteBlog([]), {});
  });

  test("of only one blog should be the same blog", () => {
    const result = {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5,
    };

    assert.deepStrictEqual(listHelper.favoriteBlog(oneBlogList), result);
  });

  test("of multiple blogs should be the highest blog", () => {
    const result = {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
    };

    assert.deepStrictEqual(listHelper.favoriteBlog(multipleBlogsList), result);
  });
});
