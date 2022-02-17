<template>
  <div class="w-full flex flex-col sm:flex-row sm:w-96 mx-auto">
    <input
      type="text"
      placeholder="Search for images..."
      v-model="input"
      @keyup.enter="click"
      class="w-full sm:border-b font-cursive placeholder-gray-600 border-0 text-center h-10 focus:outline-none text-2xl mb-4 mr-6"
    />
    <button
      type="submit"
      class="btn btn-red sm:w-16 w-72 mx-auto h-10"
      @click="click"
    >
      Go
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      input: '',
    };
  },
  methods: {
    click() {
      this.$emit('clicked', this.input);
    },
  },
};
</script>
