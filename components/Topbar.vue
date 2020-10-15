<template>
    <div class="container-fluid topbar shadow-xs">
        <a href="/">
          <Logo />
        </a>
        <a class="text-dark-gray d-none d-md-block d-lg-block d-xl-block" href="/">🎉 Your Promotion Element Goes Here</a>
        <div class="r-nav">
        <ul>
            <li>
                <p-drpd 
                trigger="clickToToggle"
                :options="{
                    placement: 'bottom'
                }"
                :prevent-default="true">
                    <div class="popper">
                        <ul class="reset-ul  social social-links--top">
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'facebook-f']" class="mr-2" />Facebook</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'twitter']" class="mr-2" />Twitter</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'linkedin-in']" class="mr-2" />Linkedin</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'github']" class="mr-2" />Github</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'discord']" class="mr-2" />Discord</a></li>
                            <li><a href="https://facebook.com/"><font-awesome-icon :icon="['fab' , 'spotify']" class="mr-2" />My Playlist</a></li>
                        </ul>
                    </div>
                     <a href="#" slot="reference">
                        <span class="d-lg-block d-md-block d-xl-block d-sm-none">Socialize Me</span>
                        <font-awesome-icon :icon="['fas' , 'angle-down']" class="d-block d-lg-none d-md-none d-xl-none" />
                        <font-awesome-icon :icon="['fas' , 'angle-down']" class="ml-2" />
                    </a>
                </p-drpd>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar'
}
</script>

<style>

</style>