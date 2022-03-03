<template>
    <div class = "profile">
        <h3>Profile Name: {{profile.name}}</h3>
        <p>Sugar Level: {{profile.sugar_lvl}}</p>
        <p>Calorie: {{profile.calorie}}</p>
        <p>Protein: {{profile.protein}}</p>
        <p>Price: {{profile.price}}</p>
    </div>
    
</template>

<script>
export default{
    name: 'Profile ',
    props:{
        profile: Object
    }
}
</script>

<style>
.profile{
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
}
</style>
