<template>
  <nav class="navbar shadow-sm">
      <div class="container d-flex justify-content-between">
            <ul class="reset-ul d-flex flex-row">
             <li><a href="">Home</a></li>
             <li><a href="">Projects</a></li>
             <li><a href="">Portfolio</a></li>
             <li><a href="">Diary</a></li>
             <li><a href="">Gallery</a></li>
             <li><a href="">Blogs</a></li>
            </ul>
           <SpotifyWidget />
      </div>
  </nav>
</template>

<script>
import SpotifyWidget from '@/widgets/SpotifyWidget';
export default {
    name: 'MainMenu',
    components: {
        SpotifyWidget
    }
}
</script>

<style>

</style>