<template>
  <div id="app" class="w-full min-h-screen bg-gray-100">
    <div
      class="md:w-11/12 xxl:w-8/12 md:mx-auto min-h-screen bg-white shadow-2xl py-1 flex flex-col justify-center items-center"
    >
      <OrbitSpinner
        v-if="loading"
        :animation-duration="1000"
        :size="60"
        :color="'#b91c1c'"
      />
      <div v-else>
        <Searchbar @clicked="onClick" class="my-10" />
        <ErrorScreen v-if="notFound" />
        <ImagesContainer v-else :photos="photos" />
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from './components/Searchbar.vue';
import ErrorScreen from './components/ErrorScreen.vue';
import ImagesContainer from './components/ImagesContainer.vue';
import { OrbitSpinner } from 'epic-spinners';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Searchbar,
    ImagesContainer,
    OrbitSpinner,
    ErrorScreen,
  },
  data() {
    return {
      photos: [],
      loading: false,
      notFound: false,
    };
  },
  methods: {
    onClick(input) {
      this.loading = true;
      this.notFound = false;
      axios
        .get('https://pixabay.com/api/', {
          params: { key: process.env.VUE_APP_API_KEY, q: `${input}` },
        })
        .then((response) => {
          this.loading = false;
          this.photos = response.data.hits;
          if (!this.photos.length) {
            throw new Error('not found');
          }
          return this.photos;
        })
        .catch((e) => {
          this.notFound = true;
          return e;
        });
    },
  },
};
</script>
