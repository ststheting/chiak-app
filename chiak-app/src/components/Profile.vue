<template>
    <div @click="$emit('toggle-select', profile.id)" :class="[profile.select ? 'select' : 
    '', 'profile']">
        <h3>Profile Name: {{profile.name }}
            <i @click="$emit('delete-profile', profile.id)" class="fas fa-times"></i>
        </h3>
        <p>Sugar Level: {{profile.sugar_lvl}}</p>
        <p>Calorie: {{profile.calorie}}</p>
        <p>Protein: {{profile.protein}}</p>
        <p>Price: ${{profile.price}}</p>
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
