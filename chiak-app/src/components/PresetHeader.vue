<template>
    <div>
    <header>
        <!-- title for the parent component to declare -->
        <h1 class="text-2xl">Your Profiles</h1>
        <!-- bind data with PresetButton -->
        <PresetButton @btn-click="$emit('toggle-add-profile')" 
        :text="showAddProfile ? 'Close' : 'Add Profile'" 
        :color="showAddProfile ? 'red' : 'green'" />
    </header>
    <h2 class="text-sm mb-8">Let's start by selecting a profile as your preset.</h2>
    </div>
</template>

<script>
// import PresetButton as the child component
import PresetButton from './PresetButton.vue'

export default {
    // name which is used for importing
    name: 'PresetHeader',

    // data that is used for importing
    // define a prop using an array
    // can define a prop as an object as well
    props: {
        showAddProfile: Boolean
    },

    // imported child component(s)
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