<template>
    <div class="container-fluid topbar shadow-xs">
        <a href="/">
          <Logo />
        </a>
        <a class="text-dark-gray" href="/">🎉 Your Promotion Element Goes Here</a>
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
                        <ul class="social-links-top">
                            <li><a href="https://facebook.com/">Facebook</a></li>
                            <li><a href="https://facebook.com/">Twitter</a></li>
                            <li><a href="https://facebook.com/">Github</a></li>
                            <li><a href="https://facebook.com/">Discord</a></li>
                        </ul>
                    </div>
                     <a href="#" slot="reference">
                        Socialize Me
                        <font-awesome-icon :icon="['fas' , 'angle-down']" class="ml-2" />
                    </a>
                </p-drpd>
            </li>
            <li>
                <p-drpd 
                trigger="clickToToggle"
                :options="{
                    placement: 'bottom'
                }"
                :prevent-default="true">
                    <div class="popper">
                        <ul class="social-links-top">
                            <li><a href="https://facebook.com/">Facebook</a></li>
                            <li><a href="https://facebook.com/">Twitter</a></li>
                            <li><a href="https://facebook.com/">Github</a></li>
                            <li><a href="https://facebook.com/">Discord</a></li>
                        </ul>
                    </div>
                    <a href="#" slot="reference">
                        More
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