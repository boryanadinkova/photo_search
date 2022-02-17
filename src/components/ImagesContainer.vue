<template>
  <div>
    <Pagination
      v-if="photos"
      :items="photos"
      @changePage="onChangePage"
      class="flex h-12"
    />
    <div class="w-full grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
      <ImageCard
        v-for="item in pageOfItems"
        :key="item.id"
        :url="item.webformatURL"
        :user="item.user"
        :tags="item.tags"
        :userImage="item.userImageURL"
      />
    </div>
  </div>
</template>

<script>
import ImageCard from './ImageCard.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'ImagesContainer',
  components: {
    ImageCard,
    Pagination,
  },
  props: {
    photos: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>
