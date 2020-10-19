<template>
  <nav class="navbar shadow-sm">
      <div class="container d-flex justify-content-between align-items-center" :style="!showMenu ? 'padding-top: .8rem; padding-bottom: .8rem;' : ''">
           <Menu v-if="showMenu" class="d-flex flex-row" />
            <font-awesome-icon @click="hamOpen=!hamOpen" :icon="['fas' , 'bars']" class="text-white d-lg-none navbar-toggler-icon"></font-awesome-icon>
           <SpotifyWidget />
      </div>
        <SideMenu
          :openSideMenu="hamOpen"
          @close-side-menu="hamOpen=false"
        />
  </nav>
</template>


<script>
import SpotifyWidget from '@/widgets/SpotifyWidget';
export default {
    name: 'MainMenu',
    data() {
       return {
        factive: false,
        showMenu: true,
        hamOpen: false
       }
    },
    components: {
        SpotifyWidget
    },
    methods: {
        activeMEnu() {

            if(window.innerWidth <= 990) {
                this.showMenu = false;
            }
            window.onresize = () => {
                let mtm = window.matchMedia('(max-width: 990px)');
                if(mtm.matches) {
                this.showMenu = false;
                } else {
                    this.showMenu = true;
                }
            }
        }
    },
    mounted() {
        this.activeMEnu()
    }
}
</script>

<style lang="scss">
    .navbar-toggler-icon {
    cursor: pointer;
}
</style>