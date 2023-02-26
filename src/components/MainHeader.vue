<template>
  <nav>
    <div class="container">
      <h1>Where in the world?</h1>
      <span>
        <font-awesome-icon icon="fa-regular fa-moon" />
        Dark Mode
      </span>
    </div>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped lang="scss">
nav {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: {
      top: 20px;
      bottom: 20px;
    }
    h1 {
      font-size: 20px;
    }
    span {
      font: {
        weight: 600;
        size: 14px;
      }
      svg {
        margin-right: 3px;
        transform: rotate(-30deg);
      }
    }
  }
}
</style>
