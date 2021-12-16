const { ref } = require("vue");

const getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      // await new Promise((resolve, reject) => {
      //   setTimeout(resolve, 1000);
      // });
      let res = await fetch("http://localhost:3000/posts/" + id);
      if (res.status === 404) {
        throw new Error("Not Found URL");
      }
      let data = await res.json();
      post.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
