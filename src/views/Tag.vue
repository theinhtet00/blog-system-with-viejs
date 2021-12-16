<template>
  <div class="tag_layout">
    <div v-if="error">{{ error }}</div>
    <div v-if="filter_posts.length" class="layout">
      <div>
        <PostsList :posts="filter_posts" />
      </div>
      <div>
        <TagCloud :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import PostsList from "../components/PostsList";
import { computed } from "@vue/reactivity";
import getPosts from "../composables/getPosts";
export default {
  components: {
    TagCloud,
    PostsList,
  },
  props: ["tag"],
  setup(props) {
    let { posts, error, load } = getPosts();
    load();
    let filter_posts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });
    return { posts, error, filter_posts };
  },
};
</script>

<style>
.tag_layout {
  max-width: 1000px;
  margin: 0 auto;
}
</style>