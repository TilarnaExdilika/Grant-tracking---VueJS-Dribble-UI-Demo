<template>
  <div class="base-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-content {
  flex: 1;
  background-color: var(--backgroundSecondary);
  padding: 10px 0px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>
