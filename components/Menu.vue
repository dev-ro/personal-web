<template>
    <ul class="reset-ul">
        <li><a href="">Home</a></li>
        <li><a href=""><span class="mr-1 me"><img :src="profile_pic.image" class="img-fluid" :alt="profile_pic.alt" :title="profile_pic.alt"></span>ME</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Gallery</a></li>
        <li><a href="">Blogs</a></li>
    </ul>
</template>
<script>
import { EventBus } from '@/plugins/event-bus';
export default {
    data() {
        return {
            profile_pic: {
                image: '',
                alt: ''
            }
        }
    },
     created() {
        EventBus.$on('profile_pic' ,(image) => {
            this.profile_pic.image = image.url;
            this.profile_pic.alt = image.alt;
        })
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