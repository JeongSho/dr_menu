<template>
  <div id="app">
    <DropdownMenu />
  </div>
</template>

<script>
import DropdownMenu from './components/DropdownMenu.vue';

export default {
  name: 'App',
  components: {
    DropdownMenu
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
