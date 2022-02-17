<template>
  <div
    class="flex flex-col justify-between bg-white p-4 w-72 h-96 m-2 shadow-md rounded-sm"
  >
    <img :src="url" />
    <div class="flex justify-between items-center">
      <div v-if="user" data-user>
        By <span class="font-cursive text-2xl">{{ user }}</span>
      </div>
      <img
        v-if="userImage"
        :src="userImage"
        class="w-12 h-12 rounded-full border-b"
        data-user-image
      />
    </div>
    <div data-tags>Tags: {{ tags }}</div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    url: {
      type: String,
      default: '',
    },
    user: {
      type: String,
      default: '',
    },
    userImage: {
      type: String,
      default: '',
    },
    tags: {
      type: String,
      default: '',
    },
  },
};
</script>
