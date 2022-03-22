<template>
<!-- emit the toggle-select event and profile.id to the parent component upon click -->
<!-- ternary for the select class. If true, then we add a class called select, else do nothing -->
    <div class="px-10 py-5 pr-16" @toggle-select="$emit('toggle-select', profile.id)"
    :class="[profile.id == selected.id ? 'select' : '', 'profile flex mx-auto justify-between items-center']">
    <!-- information of the data fields -->
        <div>
            <p class="text-2xl mb-3">{{profile.name }}</p>
            <p>1: {{profile.factor1}}</p>
            <p>2: {{profile.factor2}}</p>
            <p>3: {{profile.factor3}}</p>

            <!-- <button class="button" @click="() => TogglePopup('buttonTrigger')">Select</button> -->

            <button class="rounded-lg bg-green-600 px-4 py-1 text-white mt-5" @click="$emit('toggle-select', profile.id)">Set as Preset</button>

        </div>
        <button @click="$emit('delete-profile', profile.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
        </button>
    </div>    
</template>

<script>
export default{
    name: 'Profile ',
    props:{
        profile: Object,
        selected: Object
    }
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

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
