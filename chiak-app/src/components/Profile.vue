// this component is for displaying individual profiles on the browser page
// It is the child component of Profiles.vue => 2 levels deep from the main Preset component
<template>
<!-- emit the toggle-select event and profile.id to the parent component upon click -->
<!-- ternary for the select class. If true, then we add a class called select, else do nothing -->
    <div @click="$emit('toggle-select', profile.id)" :class="[profile.select ? 'select' : 
    '', 'profile']">
    <!-- information of the data fields -->
        <h3>Profile Name: {{profile.name }}
            <!-- this is the x icon on the profile. When the icon is clicked, it will emit the delete-profile event to the parent component -->
            <i @click="$emit('delete-profile', profile.id)" class="fas fa-times"></i>
        </h3>
        <p>Rank 1: {{profile.rank_1}}</p>
        <p>Rank 2: {{profile.rank_2}}</p>
        <p>Rank 3: {{profile.rank_3}}</p>
    </div>
</template>

<script>

export default{
    name: 'Profile ',
    props:{
        profile: Object
    },
}
</script>

<style scope>
.fas{
    color:red;
}

.profile{
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
}

/* have a green border if profile is selected */
.profile.select{
    border-left: 5px solid green;
}

.profile h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
