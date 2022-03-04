<template>
    <header>
        <h1>{{ title }}</h1>
        <PresetButton @btn-click="$emit('toggle-add-profile')" 
        :text="showAddProfile ? 'Close' : 'Add Profile'" 
        :color="showAddProfile ? 'red' : 'green'" />
    </header>
</template>

<script>
import PresetButton from './PresetButton.vue'

export default {
    name: 'PresetHeader',
    // define a prop using an array
    // can define a prop as an object as well
    props: {
        title: String,
        showAddProfile: Boolean
    },
    components: {
        PresetButton
    }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }
</style>