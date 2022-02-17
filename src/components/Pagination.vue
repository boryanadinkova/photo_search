<template>
  <ul
    v-if="pager.pages && pager.pages.length"
    class="flex h-12 w-44 justify-between items-center ml-2"
  >
    <li
      v-for="page in pager.pages"
      :key="page"
      class="btn btn-red w-10 h-10 rounded-full cursor-pointer"
      :class="{ active: pager.currentPage === page }"
      @click="setPage(page)"
    >
      <a class="-ml-0.5">{{ page }}</a>
    </li>
  </ul>
</template>

<script>
import paginate from 'jw-paginate';

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 6,
    },
    maxPages: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      pager: {},
    };
  },
  created() {
    if (!this.$listeners.changePage) {
      throw 'Missing required event listener: "changePage"';
    }
    this.setPage(this.initialPage);
  },
  methods: {
    setPage(page) {
      const { items, pageSize, maxPages } = this;

      // get new pager object for specified page
      const pager = paginate(items.length, page, pageSize, maxPages);

      // get new page of items from items array
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

      // update pager
      this.pager = pager;

      // emit change page event to parent component
      this.$emit('changePage', pageOfItems);
    },
  },
};
</script>
