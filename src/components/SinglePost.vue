<template>
  <div class="post">
    <router-link :to="{ name: 'Detail', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <div v-for="tag in post.tags" :key="tag" class="tag">
      <router-link :to="{ name: 'Tag', params: { tag } }">{{
        tag
      }}</router-link>
    </div>
    <p>{{ intro }}</p>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: ["post"],
  setup(props) {
    let intro = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    return { intro };
  },
};
</script>

<style>
.post {
  padding: 20px;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
  border: 2px solid white;
}
.post a {
  text-decoration: none;
}
.post h2 {
  color: #8712fb;
}
.post p {
  padding: 20px;
}

.tag {
  display: inline-block;
  margin: 5px;
  font-size: 12px;
  border-radius: 5px;
  padding: 5px 15px;
  background-color: #dfe3e6;
}
</style>