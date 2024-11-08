<template>
  <div class="dashboard">
    <div class="header-bar">
      <!-- Nội dung header bar -->
    </div>
    <div class="container">
      <!-- Nội dung container -->
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  height: 100vh;
  padding: 2px 10px 0 10px;
  background-color: var(--backgroundMain);
  display: flex;
  flex-direction: column;
}

.header-bar {
  height: 100px;
  width: 100%;
  background: transparent;
}

.container {
  flex: 1;
  background-color: var(--backgroundSecondary);
  padding: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>
