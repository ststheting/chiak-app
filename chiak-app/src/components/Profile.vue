<template>
<!-- emit the toggle-select event and profile.id to the parent component upon click -->
<!-- ternary for the select class. If true, then we add a class called select, else do nothing -->
    <div @click="$emit('toggle-select', profile.id)" :class="[profile.select ? 'select' : '', 'profile flex mx-auto justify-between items-center']">
    <!-- information of the data fields -->
        <div>
            <h3>{{profile.name }}</h3>
            <p>Rank 1: {{profile.rank_1}}</p>
            <p>Rank 2: {{profile.rank_2}}</p>
            <p>Rank 3: {{profile.rank_3}}</p>
        </div>
        <button @click="$emit('delete-profile', profile.id)"><i class="fas fa-times"></i></button>
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
