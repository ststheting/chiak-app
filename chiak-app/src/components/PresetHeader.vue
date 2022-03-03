<template>
    <header>
        <h1>{{ title }}</h1>
        <Button text="Add Task" color="green"/>
    </header>
</template>

<script>
import PresetButton from './PresetButton.vue'

export default {
    name: 'PresetHeader',
    // define a prop using an array
    // can define a prop as an object as well
    props: ['title'],
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
        margin-bottom: 20px;
    }
</style>