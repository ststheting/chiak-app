<template>
    <div>
        <Nav />
        <!-- self-defined class to implement styling -->
        <div class = "container m-10 mx-auto">
            <div class="text-3xl font-semibold text-center">Welcome back, Shaun!</div>
            <!-- id is for the styling of the PresetHeader -->
            <!-- catch the toggle-add-profile emit from the PresetHeader, then call the toggleAddProfile method -->
            <!-- use v-bind to pass in the boolean value of showAddProfile -->
            <div class="border-2 rounded-md mt-8 p-10">
                <PresetHeader id="presetHeader" @toggle-add-profile="toggleAddProfile" :showAddProfile="showAddProfile" />
                <!-- this is for toggling the AddProfile form. v-show to show the form -->
                <div v-show="showAddProfile">
                    <!-- Catch the add-profile emit and call the addProfile method to add a new profile -->
                    <AddProfile @add-profile="addProfile" />
                </div>
                <!-- catch the emits and call the respective methods -->
                <!-- since we are passing in an array from Profiles that will be dynamic, we v-bind the profiles to the profiles data -->
                <Profiles @toggle-select="toggleSelect" @delete-profile="deleteProfile" :profiles="profiles" :selected="selected"/>
            </div>
        </div>  
    </div>
</template>

<script>
import Profiles from '../components/Profiles.vue'
import PresetHeader from '../components/PresetHeader.vue'
import AddProfile from '../components/AddProfile.vue'
import Nav from '../components/Nav.vue'
import PresetService from '../services/PresetService'
export default {
    name: 'Preset',
    components:{
        Profiles,
        PresetHeader,
        AddProfile,
        Nav
    },
    data(){
        return{
            // the data will return an array of of Profile objects
            // data is not stored here because of the life-cycle method
            profiles:[],
            selected: Object,
            // Use add profile button to toggle the 'Create Profile' form
            showAddProfile: false
        }
    },
    created(){
        this.profiles = 
        // PresetService.getPresets()
        //     .then((res) => {
        //         this.profiles = JSON.parse(localStorage.getItem("presets"));
        //         this.selected[0] = this.profiles[0];
        //         })
        [
            {
                id: 1,
                name: "Bulking",
                factor1: "Protein-High",
                factor2: "Fibre-High",
                factor3: "Price-Low",
            },
            {
                id: 2,
                name: "Slimming",
                factor1: "Sugar-Low",
                factor2: "Fats-Low",
                factor3: "Price-Low",
            },
            {
                id: 3,
                name: "Vegetarian",
                factor1: "Protein-High",
                factor2: "Carbohydrate-High",
                factor3: "Sodium-Low",
            }
        ],
        this.selected = this.profiles[0]
    },
    
    methods: {
        // toggle the add profile button by setting the boolean variable to its opposite value
        toggleAddProfile(){
            this.showAddProfile = !this.showAddProfile
        },

        // set the profiles as an array and spread across the current profiles, then add a new one onto it
        // the new profile comes from the AddProfile component
        addProfile(profile){
            this.profiles = [...this.profiles, profile]
        },

        // pass in the id of the profile that we want to delete. Keep the profile.id that are NOT equal to the id passed in 
        // the filter will only keep the profile ids that are not equal to the id, so the profile to delete will no longer be in the array
        deleteProfile(id){
            // confirm delete
            if(confirm('You are about to delete this profile, are you sure?')){
                this.profiles = this.profiles.filter((profile) => profile.id !== id)
            }
        },

        // map through the entire profiles array and see for each profile if the profile.id is equal to the id that we pass in, then spread across
        // all the profiles to find the matching profile and change its initial select boolean value to the opposite
        toggleSelect(id){
            this.selected = this.profiles.find(profile => profile.id === id)
            // this.profiles = this.profiles.map((profile) => profile.id === id ? {...profile, select: !profile.select} : profile)
        }

        // toggleSelect(id){
        //     if(this.profiles.map((profile) => profile.id === id && profile.select === false ? {...profile} : profile)){
        //         if(confirm('You are about to select this profile as your preset. Click OK to confirm')){
        //             this.profiles = this.profiles.map((profile) => profile.id === id ? {...profile, select: !profile.select} : profile)
        //         }
        //     }
        //     else if(this.profiles.map((profile) => profile.id === id && profile.select === true ? {...profile} : profile)){
        //         if(confirm('Would you like to unselect this profile as your preset?')){
        //             this.profiles = this.profiles.map((profile) => profile.id === id ? {...profile, select: !profile.select} : profile)
        //         }
        //     }
        // }
    },

    // life cycle method to store the data. Define the profiles (hardcode data)
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#presetHeader{
    font-size: 22px;
}
/* .container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
} */
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