<template>
    <div>
        <div class = "container">
            <PresetHeader id="presetHeader" title = "Suggested/Previous Profiles" />
            <Profiles :profiles="profiles" />
        </div>  
    </div>
</template>

<script>
import Profiles from '../components/Profiles.vue'
import PresetHeader from '../components/PresetHeader.vue'

export default {
    name: 'Preset',
    components:{
        Profiles,
        PresetHeader
    },
    data(){
        return{
            profiles:[]
        }
    },
    created(){
        this.profiles = [
            {
                id: 1,
                name: "Bulking",
                sugar_lvl: 10.00,
                calorie: 500,
                protein: 200,
                price: 10.00,
            },
            {
                id: 2,
                name: "Slimming",
                sugar_lvl: 5.00,
                calorie: 100,
                protein: 150,
                price: 12.00,
            },
            {
                id: 3,
                name: "Vegetarian",
                sugar_lvl: 0.00,
                calorie: 300,
                protein: 200,
                price: 5.00,
            },
            {
                id: 4,
                name: "Bulking",
                sugar_lvl: 10.00,
                calorie: 500,
                protein: 200,
                price: 10.00,
            },
            {
                id: 5,
                name: "Bulking",
                sugar_lvl: 10.00,
                calorie: 500,
                protein: 200,
                price: 10.00,
            }
        ]
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}

#presetHeader{
    font-size: 30px;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
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
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>