<template>
    <div :key="profile.id" v-for="profile in profiles">
        <Profile :profile='profile' />
    </div>
</template>

<script>
import Profile from './Profile.vue'
export default{
    name: 'Profiles',
    props: {
        profiles: Array
    },
    components: {
        Profile
    }
}
</script>
