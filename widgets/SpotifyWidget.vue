<template>
    <div class="spotify">
        <div class="sp-box" >
            <no-ssr>
            <popover  name="spotify">
                    <span :class="isListening ? 'isActive' : ''" style="border-right: 1px solid rgba(0,0,0, .3);">Playing </span>
                    <a href="/" class="text-dark-gray ml-1">Lorem ipsum dolor sit amet?</a>
            </popover>
            </no-ssr>
            <font-awesome-icon v-popover:spotify.left 
                :icon="['fab' , 'spotify']" class="mr-2"  
                :class="isListening ? 'animate__animated animate__heartBeat animate__infinite isActive' : ''"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpotifyWidget',
    data () {
        return {
            isListening: true,
            accessToken : null,
        }
    },
    methods: {
       
    },
    created() 
       {
        // headers: {
        //   Accept: 'application/json',
        //   'content-type': 'application/x-www-form-urlencoded',
        //   Authorization: 'Basic '+Buffer.from('72ecb0cbd173432d80404c64f5303275:094abe91841a46ad81aed278e7710687').toString('base64')
        // }
    }
}
</script>

<style>

</style>