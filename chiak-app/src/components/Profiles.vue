<template>
    <div :key="profile.id" v-for="profile in profiles">
        <Profile @toggle-select="$emit('toggle-select', profile.id)" @delete-profile="$emit('delete-profile', profile.id)" :profile='profile' />
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
    },
    emits: ['delete-profile', 'toggle-select']
}
</script>
