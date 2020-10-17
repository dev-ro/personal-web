<template>
  <main>
    <section id="me" class="py-4 bg-l-g">
      <div class="container">
        <div class="me-wrapper">
          <h3 class="me_text">ME</h3>
          <div class="me_desc">
            <h1 class="me_name">Rohit Sagar <span class="text-dark-gray font-sm">|&nbsp;Web Developer</span></h1>
            <p class="font-sm text-dark-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus qui voluptatibus dolorum, eius placeat tempora sint esse minus ipsam perferendis, corporis molestiae. Illum optio veritatis odio facere, minima doloremque aut ab dignissimos, molestias commodi culpa iure! Quis, repudiandae. Iure nobis voluptates libero, dolorum nemo ipsa porro nulla repudiandae earum possimus iste, suscipit temporibus. Sed eum quam quaerat veritatis consequuntur quia voluptatem nulla a nam ut suscipit at deleniti, numquam laborum.</p>
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
export default {
  layout: "portfolio",
  name: "Homepage",
  components: {
    RecentProjects,
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
