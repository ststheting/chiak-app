<template>
    <form @submit="onSubmit" class="mb-10 border-4 px-10 pb-10 rounded-lg">

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
        <select class="rounded-md p-1 border-2 mt-3" v-model="factor1">
            <option value="Price-Low">Price-Low</option>
            <option value="Price-High">Price-High</option>
            <option value="Protein-Low">Protein-Low</option>
            <option value="Protein-High">Protein-High</option>
            <option value="Fats-Low">Fats-Low</option>
            <option value="Fats-High">Fats-High</option>
            <option value="Fibre-Low">Fibre-Low</option>
            <option value="Fibre-High">Fibre-High</option>
            <option value="Sodium-Low">Sodium-Low</option>
            <option value="Sodium-High">Sodium-High</option>
            <option value="Sugar-Low">Sugar-Low</option>
            <option value="Sugar-High">Sugar-High</option>
        </select>
        </div>

        <!-- Rank 2 dropdown -->
        <div class="form-control">
        <label>Rank 2 Nutritional Metric:</label>
        <select class="rounded-md p-1 border-2 mt-3" v-model="factor2">
            <option value="Price-Low">Price-Low</option>
            <option value="Price-High">Price-High</option>
            <option value="Protein-Low">Protein-Low</option>
            <option value="Protein-High">Protein-High</option>
            <option value="Fats-Low">Fats-Low</option>
            <option value="Fats-High">Fats-High</option>
            <option value="Fibre-Low">Fibre-Low</option>
            <option value="Fibre-High">Fibre-High</option>
            <option value="Sodium-Low">Sodium-Low</option>
            <option value="Sodium-High">Sodium-High</option>
            <option value="Sugar-Low">Sugar-Low</option>
            <option value="Sugar-High">Sugar-High</option>
            <option value="None" selected="selected">None</option>
        </select>
        </div>

        <!-- Rank 3 dropdown -->
        <div class="form-control">
        <label>Rank 3 Nutritional Metric:</label>
        <select class="rounded-md p-1 border-2 mt-3" v-model="factor3">
            <option value="Price-Low">Price-Low</option>
            <option value="Price-High">Price-High</option>
            <option value="Protein-Low">Protein-Low</option>
            <option value="Protein-High">Protein-High</option>
            <option value="Fats-Low">Fats-Low</option>
            <option value="Fats-High">Fats-High</option>
            <option value="Fibre-Low">Fibre-Low</option>
            <option value="Fibre-High">Fibre-High</option>
            <option value="Sodium-Low">Sodium-Low</option>
            <option value="Sodium-High">Sodium-High</option>
            <option value="Sugar-Low">Sugar-Low</option>
            <option value="Sugar-High">Sugar-High</option>
            <option value="None">None</option>
        </select>
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

                // 'save' the data that the user inputs
                // Randomize the id number
                const newProfile = {
                    id: Math.floor(Math.random() * 100000),
                    name: this.name,
                    factor1: this.factor1,
                    factor2: this.factor2,
                    factor3: this.factor3,
                }

                // send the custom user input to the parent by providing the event name to add a profile and the data that the user inputs
                this.$emit('add-profile', newProfile)

                // initialize the fields back to empty to take in new data
                this.name = ''
                this.factor1 = ''
                this.factor2 = ''
                this.factor3 = ''
            }
        }
    }
</script>

// styles for the add profile form
<style scoped>
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
