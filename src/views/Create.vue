<template>
  <form @submit.prevent="addPost">
    <h1>Create Post</h1>
    <label>Title</label>
    <input type="text" required v-model="title" />

    <label>Body</label>
    <textarea required v-model="body"></textarea>

    <label>Tags</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleTag" />
    <small>(Note: press <span>'Enter'</span> to add tag)</small>

    <div v-for="tag in tags" :key="tag" class="pill">
      <p>{{ tag }}</p>
    </div>

    <div class="btn">
      <button>Add Post</button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    const handleTag = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const addPost = async () => {
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tags: tags.value,
        }),
      });
      router.push({ name: "Home" });
    };
    return { title, body, tag, tags, handleTag, addPost };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f8f8f8;
}
form {
  width: 350px;
  min-height: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  border: 2px solid #8712fb;
  box-shadow: 5px 5px 8px 5px white;
}
h1 {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 20px;
}
label,
input {
  display: block;
}
label {
  padding: 5px 20px;
  font-size: 18px;
  font-weight: bold;
}
input,
textarea {
  margin: 0px 20px;
  width: 80%;
  outline: none;
  border: 1px solid #8712fb;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px;
  color: #8712fb;
}
input {
  height: 30px;
}
small {
  padding-left: 17px;
}
small span {
  font-weight: bold;
}
.btn {
  text-align: center;
}
button {
  margin: 20px 0 10px 0;
  padding: 5px 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  outline: none;
  background-color: #8712fb;
  border: 2px solid #8712fb;
  color: #dfe3e6;
}
.pill {
  display: inline-block;
  margin: 10px 5px 5px 20px;
  padding: 5px 10px;
  background-color: #dfe3e6;
  border-radius: 5px;
}
</style>