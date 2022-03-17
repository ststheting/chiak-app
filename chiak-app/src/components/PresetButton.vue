// configuration for the button
<template>
    <button @click="onClick()"
    :style="{background: color}" 
    class="btn">{{ text }}
    </button>
</template>

<script>
export default {
    // the name that is called when importing the button
    name:'PresetButton',
    // the data that is visible by the parent component
    props: {
        text: String,
        color: String
    },
    methods:{
        // when the button is clicked, it should emit the event name 'btn-click' to the parent component
        onClick(){
            this.$emit('btn-click')
        },
    }
}
</script>