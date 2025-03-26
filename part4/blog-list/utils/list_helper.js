const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const total = blogs.reduce((accumulator, currVal) => {
    return accumulator + currVal.likes;
  }, 0);

  return total;
};

const favoriteBlog = (blogs) => {
  if (!blogs || !blogs.length) return {};

  let mostLiked;
  blogs.map((blog) => {
    if (!mostLiked) return (mostLiked = blog);
    if (blog.likes > mostLiked.likes) return (mostLiked = blog);
  });

  return {
    title: mostLiked.title,
    author: mostLiked.author,
    likes: mostLiked.likes,
  };
};

module.exports = { dummy, totalLikes, favoriteBlog };
