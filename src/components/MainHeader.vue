<template>
  <nav>
    <div class="container">
      <h1>Where in the world?</h1>
      <span>
        <font-awesome-icon icon="fa-regular fa-moon" />
        <span class="app-mode">Dark Mode</span>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  padding: {
    top: $main-padding;
    bottom: $main-padding;
  }
  .container {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 20px;
    }
    > span {
      font: {
        weight: 600;
        size: 14px;
      }
      svg {
        margin-right: 8px;
        transform: rotate(-30deg);
      }
      &:hover {
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
