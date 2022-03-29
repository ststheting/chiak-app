<template>
    <form @submit="onSubmit" class="mb-10 border-2 px-10 pt-3 pb-10 rounded-lg">

        <!--Profile input label  -->
        <div class="form-control">
        <label>Profile</label>
        <input 
        type="text" 
        v-model="name" 
        name="name" 
        class="rounded-md w-2/5 text-base h-8 mt-3 p-5 border-2"
        placeholder="New Profile Name" />
        </div>
        <!-- height, border, margin, padding -->

        <!-- Rank 1 dropdown -->
        <div class="form-control">
        <label>Rank 1 Nutritional Metric:</label>
        <div class="flex items-center mt-3">
            <select class="rounded-md p-1 border-2" v-model="factor1">
                <option value="Price" >Price</option>
                <option value="Calories" >Calories</option>
                <option value="Protein" >Protein</option>
                <option value="Fat">Fats</option>
                <option value="Fibre">Fibre</option>
                <option value="Sodium">Sodium</option>
                <option value="Sugar">Sugar</option>
            </select>
            <div class="ml-3">
                <label class="text-sm" v-if="factor1 != ''"><input type="radio" name="preference1" value="-High" v-model="factor1Preference" checked/> High </label>
                <label class="text-sm" v-if="factor1 != ''"><input type="radio" name="preference1" value="-Low" v-model="factor1Preference" /> Low </label>
            </div>
        </div>
        </div>

        <!-- Rank 2 dropdown -->
        <div class="form-control">
        <label>Rank 2 Nutritional Metric:</label>
            <div class="flex items-center mt-3">
                <select class="rounded-md p-1 border-2" v-model="factor2">
                    <option value="Price">Price</option>
                    <option value="Calories" >Calories</option>
                    <option value="Protein">Protein</option>
                    <option value="Fat">Fats</option>
                    <option value="Fibre">Fibre</option>
                    <option value="Sodium">Sodium</option>
                    <option value="Sugar">Sugar</option>
                    <option value="None" selected>None</option>
                </select>
                <div class="ml-3">
                    <label class="text-sm" v-if="factor2 != 'None'"><input type="radio" name="preference2" value="-High" v-model="factor2Preference" checked/> High </label>
                    <label class="text-sm" v-if="factor2 != 'None'"><input type="radio" name="preference2" value="-Low" v-model="factor2Preference" /> Low </label>
                </div>
            </div>
        </div>

        <!-- Rank 3 dropdown -->
        <div class="form-control">
        <label>Rank 3 Nutritional Metric:</label>
            <div class="flex items-center mt-3">
                <select class="rounded-md p-1 border-2" v-model="factor3">
                    <option value="Price">Price</option>
                    <option value="Calories" >Calories</option>
                    <option value="Protein">Protein</option>
                    <option value="Fat">Fats</option>
                    <option value="Fibre">Fibre</option>
                    <option value="Sodium">Sodium</option>
                    <option value="Sugar">Sugar</option>
                    <option value="None" selected>None</option>
                </select>
                <div  class="ml-3">
                    <label class="text-sm" v-if="factor3 != 'None'"><input type="radio" name="preference3" value="-High" v-model="factor3Preference" checked/> High </label>
                    <label class="text-sm" v-if="factor3 != 'None'"><input type="radio" name="preference3" value="-Low" v-model="factor3Preference" /> Low </label>
                </div>
            </div>
        </div>

        <!-- <div class="form-control form-control-check">
            <label>Set As Preset</label>
            <input type="checkbox" v-model="select" name="select" />
        </div> -->

        <input type="submit" value="Create Profile" class="btn btn-block bg-green-600 text-center" />
    </form>
</template>

<script>
    export default {
        name: 'AddProfile',
        data(){
            return{
                name:'',
                factor1:'',
                factor2:'None',
                factor3:'None',
                factor1Preference:'-High',
                factor2Preference:'-High',
                factor3Preference:'-High',
            }
        },
        methods:{
            // When the 'Create Profile' button is clicked
            onSubmit(e){
                e.preventDefault()

                // if the profile name is not entered
                if(!this.name){
                    alert('Please add a profile name')
                    return
                }

                if(!this.factor1){
                    alert('Please rank at least one nutritional metric')
                    return
                }

                if(!this.factor2){
                    alert('Please rank your 2nd highest nutritional metric priority')
                    return
                }

                if(!this.factor3){
                    alert('Please rank your 3rd highest nutritional metric priority')
                    return
                }
                if(this.factor1 == this.factor2 || this.factor1 == this.factor3 || (this.factor2 == this.factor3 && this.factor2 != "None")) {
                    alert('Matching factor names')
                    return
                }
                if(this.factor1 == "None") {
                    this.factor1Preference = '';
                }
                if(this.factor2 == "None") {
                    this.factor2Preference = '';
                }
                if(this.factor3 == "None") {
                    this.factor3Preference = '';
                }
                // 'save' the data that the user inputs
                // Randomize the id number
                const newProfile = {
                    // id: Math.floor(Math.random() * 100000),
                    name: this.name,
                    factor1: this.factor1.concat(this.factor1Preference),
                    factor2: this.factor2.concat(this.factor2Preference),
                    factor3: this.factor3.concat(this.factor3Preference),
                }

                // send the custom user input to the parent by providing the event name to add a profile and the data that the user inputs
                this.$emit('add-profile', newProfile)

                // initialize the fields back to empty to take in new data
                this.name = ''
                this.factor1 = ''
                this.factor2 = 'None'
                this.factor3 = 'None'
                this.factor1Preference = '-High'
                this.factor2Preference = '-High'
                this.factor3Preference = '-High'
            }
        }
    }
</script>

// styles for the add profile form
<style scoped>
input, select, option{
    color:black
}

.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.btn {
  display: inline-block;
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
