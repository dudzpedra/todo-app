<template>
  <div class="footer">
    <p>
      Created by
      <a href="https://twitter.com/dudzpedra" target="_blank">
        <i class="fab fa-twitter"></i> dudzpedra
      </a>
      .
    </p>
    <p>
      Made with
      <a href="https://vuejs.org" target="_blank"> Vuejs </a>
      . Check out the repo in
      <a href="https://github.com/dudzpedra/todo-app" target="_blank">
        <i class="fab fa-github"></i> Github
      </a>
      .
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  text-align: center;
}
a {
  font-weight: bold;
  text-decoration: none;
  color: rgb(13, 83, 100);
}
</style>
