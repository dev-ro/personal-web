<template>
  <main>
    <section id="me" class="py-4 bg-l-g">
      <div class="container">
        <div class="me-wrapper">
          <h3 class="me_text">ME</h3>
          <div class="me_desc">
            <h1 class="me_name">{{me.full_name}} <span class="text-dark-gray font-sm">|&nbsp;{{me.designation}}</span></h1>
            <p class="font-sm text-dark-gray">{{me.about_short}}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="recent-projects" class="my-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3 mb-md-0 mb-xl-0 mb-lg-0">
            <h3>Recent Projects</h3>
            <p class="text-dark-gray font-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              mollitia molestias enim voluptas voluptate explicabo aspernatur
              earum omnis ab autem. Porro nihil omnis corporis debitis iure eaque
              vel voluptates quas.
            </p>
            <a href="/projects" class="link-default">All Projects</a>
          </div>
          <div class="col-md-8 rc-prj-wrapper">
            <RecentProjects />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import RecentProjects from "@/widgets/RecentProjects";
import { EventBus } from '@/plugins/event-bus';
export default {
  layout: "portfolio",
  name: "Homepage",
  data() {
    return {
      me: {
        'full_name' : '',
        'about_short': '',
        'profile_image' : {
          'url' : '',
          'alt' : ''
        },
        'designation': ''
      }
    }
  },
  components: {
    RecentProjects,
  },
  methods: {
    async getMe() {
      const document = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'me'),
        {fetch: ['me.designation' , 'me.about_short' , 'me.full_name' , 'me.profile_image']}
      );

      if(document) {
        this.me.full_name = document.results[0].data.full_name[0].text;
        this.me.about_short = document.results[0].data.about_short;
        this.me.designation = document.results[0].data.designation;
        this.me.profile_image.url = document.results[0].data.profile_image.url;
        this.me.profile_image.alt = document.results[0].data.profile_image.alt;
        EventBus.$emit('profile_pic' , this.me.profile_image);
        EventBus.$emit('footer_abt' , this.me.about_short);
      } else {
        error({
          statusCode: 404,
          message: 'No content'
        })
      }

    }
  },
  created(){
    this.getMe();
  },
  header() {
    return {
      meta: {
        title: "Devology",
      },
    };
  },
};
</script>
