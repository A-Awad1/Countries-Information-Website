<template>
  <nav>
    <div class="container">
      <h1>Where in the world?</h1>
      <span @click="changeMode">
        <font-awesome-icon icon="fa-regular fa-moon" />
        <span class="app-mode" v-text="`${modeButton} Mode`"></span>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainHeader",
  props: ["modeButton", "changeMode"],
};
</script>

<style scoped lang="scss">
nav {
  background-color: var(--elements-color);
  color: var(--text-color);
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
      font-size: 22px;
      @include underTablet {
        font-size: 18px;
      }
    }

    > span {
      font: {
        weight: 800;
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
