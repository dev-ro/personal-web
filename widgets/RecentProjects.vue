<template>
  <div class="row" :class="isLoading ? 'h-100 position-relative' : ''">
    <div class="overlay" v-if="isLoading">
      <div class="spinner"></div>
    </div>
    <div
      v-else
      v-for="(prj, index) in projects"
      :key="index"
      class="col-md-6 col-sm-4 col-lg-4"
    >
      <div class="rc-prj-box">
        <div class="img-box">
          <img
            :src="prj.data.image.url"
            class="img-fluid"
            :alt="prj.data.image.alt"
          />
        </div>
        <div class="prj-des mt-3">
          <a :href="'projects/' + prj.slugs[0]"
            ><h6 class="mb-1">{{ prj.data.title[0].text }}</h6></a
          >
          <p class="text-dark-gray mb-0 font-sm">
            {{ prj.data.small_description[0].text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentProjects",
  data() {
    return {
      projects: null,
      isLoading: false,
    };
  },
  async fetch() {
    this.isLoading = true;
    const document = await this.$prismic.api.query(
      this.$prismic.predicates.at("document.type", "project")
    );

    if (document) {
      this.projects = document.results;
      this.isLoading = false;
    } else {
      error({ statusCode: 404, message: "Page not found" });
      this.isLoading = false;
    }
  },
};
</script>

<style>
</style>