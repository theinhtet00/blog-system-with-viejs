<template>
  <div class="home">
    <div v-if="posts.length > 0" class="layout">
      <div>
        <PostsList :posts="posts" />
      </div>
      <div>
        <TagCloud :posts="posts" />
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import Spinner from "../components/Spinner";
import PostsList from "../components/PostsList";
import getPosts from "../composables/getPosts";

// @ is an alias to /src

export default {
  components: {
    TagCloud,
    Spinner,
    PostsList,
  },
  setup() {
    let { posts, error, load } = getPosts();
    load();
    return { posts, load, error };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Fira Code;
}
body {
  background-color: #eeede7;
}
.home {
  max-width: 800px;
  margin: 0 auto;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
