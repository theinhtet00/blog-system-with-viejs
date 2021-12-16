<template>
  <h1>Post Lists</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {},
};
</script>

<style>
h1 {
  padding: 20px;
}
</style>