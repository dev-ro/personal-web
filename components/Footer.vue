<template>
    <footer class="footer">
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-3 mb-3">
                   <h6 class="title">Who I am?</h6>
                   <p class="text-muted font-sm">{{abt}}</p>
              </div>
              <div class="col-md-3 mb-3">
                   <h6 class="title">Quick Links</h6>
                   <ul class="reset-ul qk-links">
                        <li><a href="">Home</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Blogs</a></li>
                    </ul> 
              </div>
              <div class="col-md-3 mb-3">
                  <div class="f-section">
                    <h6 class="title">Socialize Me At</h6>
                        <ul class="reset-ul social social-links--footer">
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'facebook-f']" class="mr-2" />Facebook</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'twitter']" class="mr-2" />Twitter</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'linkedin-in']" class="mr-2" />Linkedin</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'github']" class="mr-2" />Github</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'discord']" class="mr-2" />Discord</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'spotify']" class="mr-2" />My Playlist</a></li>
                        </ul> 
                  </div>
              </div>
              <div class="col-md-3">
                   <h6 class="title">Latest Projects</h6>
              </div>
          </div>
      </div>
    </footer>
</template>

<script>
import { EventBus } from '@/plugins/event-bus';
export default {
    name :'Footer',
    data() {
        return {
            abt: ''
        }
    },
    created() {
         EventBus.$on('footer_abt' ,(abt) => {
           this.abt = abt
        })
    }
}
</script>

<style>

</style>