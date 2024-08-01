<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="dropdown-toggle">{{ selectedItem }}</button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li 
        v-for="item in items" 
        :key="item" 
        @click="selectItem(item)"
        class="dropdown-item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  data() {
    return {
      isOpen: false,
      selectedItem: 'Select an item',
      items: ['Menu 1', 'Menu 2', 'Menu 3']
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectItem(item) {
      this.selectedItem = item;
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.dropdown-menu {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #ddd;
}
</style>
