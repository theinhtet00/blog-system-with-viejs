import { ref } from "@vue/reactivity";
const getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  const load = async () => {
    try {
      // await new Promise((resolve, reject) => {
      //   setTimeout(resolve, 1000);
      // });
      let res = await fetch("http://localhost:3000/posts");
      if (res.status === 404) {
        throw new Error("Not Found URL");
      }
      let data = await res.json();
      posts.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};

export default getPosts;
