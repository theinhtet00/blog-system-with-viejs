<template>
  <div class="post">
    <div v-if="post" class="post">
      <h2>{{ post.title }}</h2>
      <pre>{{ post.body }}</pre>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import getPost from "../composables/getPost";
import { useRoute } from "vue-router";
export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let route = useRoute();
    let { post, error, load } = getPost(route.params.id);
    load();
    return { post, error };
  },
};
</script>

<style scoped>
.post {
  max-width: 800px;
  padding: 20px;
  background-color: white;
  margin: 20px auto;
  border-radius: 10px;
  border: 2px solid white;
}
.post a {
  text-decoration: none;
}
.post h2 {
  color: #8712fb;
  text-align: center;
}
.post pre {
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