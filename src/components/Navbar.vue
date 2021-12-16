<template>
  <header>
    <h1><span>B</span>it</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 span {
  font-size: 40px;
  color: #8712fb;
}
nav a {
  text-decoration: none;
  padding: 0 10px;
  font-size: 16px;
}
nav a.router-link-active {
  color: #8712fb;
  font-weight: bold;
  padding: 5px 10px;
  border-bottom: 2px solid #8712fb;
}
</style>