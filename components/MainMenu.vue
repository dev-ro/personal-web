<template>
  <nav class="navbar shadow-sm">
      <div class="container d-flex justify-content-between">
            <ul class="reset-ul d-flex flex-row">
             <li><a href="">Home</a></li>
             <li><a href=""><span class="mr-1 me"><img src="https://www.leadmeonline.com/wp-content/uploads/2018/04/user-placeholder-man-10-6.jpg" class="img-fluid" alt=""></span>ME</a></li>
             <li><a href="">Projects</a></li>
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

<style lang="scss">
.me {
    display: flex;
     img {
        width: 25px;
        height: 25px;
        border-radius: 100%; 
     }
}
</style>