<template>
   <div class="spotify">
                    <div class="sp-box" >
                        <p-drpd 
                        :prevent-default="true">
                            <div class="popper">
                            <span style="border-right: 1px solid rgba(0,0,0, .3);">Playing </span>
                            <a href="" class="text-dark-gray ml-1">Lorem ipsum dolor sit amet?</a>
                            </div>
                            <font-awesome-icon slot="reference" :icon="['fab' , 'spotify']" class="mr-2"  
                                :class="isListening ? 'animate__animated animate__heartBeat animate__infinite isActive' : ''"
                            />
                        </p-drpd>
                    </div>
            </div>
</template>

<script>
export default {
    name: 'SpotifyWidget',
    data () {
        return {
            isListening: true
        }
    }
}
</script>

<style>

</style>