<template>
  <div class="tag_cloud">
    <h2>Tag Cloud</h2>
    <hr />
    <div v-for="tag in uniqueTags" :key="tag" class="tag">
      <router-link :to="{ name: 'Tag', params: { tag } }">
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["posts"],
  setup(props) {
    let tags = ref([]);
    props.posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tags.value.push(tag);
      });
    });
    let uniqueTags = tags.value.filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });

    return { uniqueTags };
  },
};
</script>

<style>
.tag_cloud {
  margin: 30px 5px;
  background-color: white;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
}
.tag_cloud h2 {
  padding-left: 5px;
}
.tag_cloud hr {
  background-color: #8712fb;
  height: 3px;
  margin: 5px;
}
.tag_cloud a {
  text-decoration: none;
}
.tag_cloud .tag {
  margin: 10px 10px 5px 10px;
}
.tag_cloud a.router-link-active {
  color: #8712fb;
  font-weight: bold;
}
a.router-link-active .tag {
  border: 2px solid #8712fb;
}
</style>