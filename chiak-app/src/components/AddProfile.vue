<template>
    <form @submit="onSubmit" class="add-form">

        <!--Profile input label  -->
        <div class="form-control">
        <label>Profile</label>
        <input 
        type="text" 
        v-model="name" 
        name="name" 
        placeholder="New Profile Name" />
        </div>

        <!-- Rank 1 dropdown -->
        <div class="form-control">
        <label>Rank 1 Nutritional Metric:</label>
        <select v-model="rank_1">
            <option value="Price - Low">Price - Low</option>
            <option value="Price - High">Price - High</option>
            <option value="Energy - Low">Energy - Low</option>
            <option value="Energy - High">Energy - High</option>
            <option value="Protein - Low">Protein - Low</option>
            <option value="Protein - High">Protein - High</option>
            <option value="Fats - Low">Fats - Low</option>
            <option value="Fats - High">Fats - High</option>
            <option value="Cholesterol - Low">Cholesterol - Low</option>
            <option value="Cholesterol - High">Cholesterol - High</option>
            <option value="Carbohydrate - Low">Carbohydrate - Low</option>
            <option value="Carbohydrate - High">Carbohydrate - High</option>
            <option value="Dietary Fibre - Low">Dietary Fibre - Low</option>
            <option value="Dietary Fibre - High">Dietary Fibre - High</option>
            <option value="Sodium - Low">Sodium - Low</option>
            <option value="Sodium - High">Sodium - High</option>
            <option value="Calcium - Low">Calcium - Low</option>
            <option value="Calcium - High">Calcium - High</option>
        </select>
        </div>

        <!-- Rank 2 dropdown -->
        <div class="form-control">
        <label>Rank 2 Nutritional Metric:</label>
        <select v-model="rank_2">
            <option value="Price - Low">Price - Low</option>
            <option value="Price - High">Price - High</option>
            <option value="Energy - Low">Energy - Low</option>
            <option value="Energy - High">Energy - High</option>
            <option value="Protein - Low">Protein - Low</option>
            <option value="Protein - High">Protein - High</option>
            <option value="Fats - Low">Fats - Low</option>
            <option value="Fats - High">Fats - High</option>
            <option value="Cholesterol - Low">Cholesterol - Low</option>
            <option value="Cholesterol - High">Cholesterol - High</option>
            <option value="Carbohydrate - Low">Carbohydrate - Low</option>
            <option value="Carbohydrate - High">Carbohydrate - High</option>
            <option value="Dietary Fibre - Low">Dietary Fibre - Low</option>
            <option value="Dietary Fibre - High">Dietary Fibre - High</option>
            <option value="Sodium - Low">Sodium - Low</option>
            <option value="Sodium - High">Sodium - High</option>
            <option value="Calcium - Low">Calcium - Low</option>
            <option value="Calcium - High">Calcium - High</option>
            <option value="None">None</option>
        </select>
        </div>

        <!-- Rank 3 dropdown -->
        <div class="form-control">
        <label>Rank 3 Nutritional Metric:</label>
        <select v-model="rank_3">
            <option value="Price - Low">Price - Low</option>
            <option value="Price - High">Price - High</option>
            <option value="Energy - Low">Energy - Low</option>
            <option value="Energy - High">Energy - High</option>
            <option value="Protein - Low">Protein - Low</option>
            <option value="Protein - High">Protein - High</option>
            <option value="Fats - Low">Fats - Low</option>
            <option value="Fats - High">Fats - High</option>
            <option value="Cholesterol - Low">Cholesterol - Low</option>
            <option value="Cholesterol - High">Cholesterol - High</option>
            <option value="Carbohydrate - Low">Carbohydrate - Low</option>
            <option value="Carbohydrate - High">Carbohydrate - High</option>
            <option value="Dietary Fibre - Low">Dietary Fibre - Low</option>
            <option value="Dietary Fibre - High">Dietary Fibre - High</option>
            <option value="Sodium - Low">Sodium - Low</option>
            <option value="Sodium - High">Sodium - High</option>
            <option value="Calcium - Low">Calcium - Low</option>
            <option value="Calcium - High">Calcium - High</option>
            <option value="None">None</option>
        </select>
        </div>

        <div class="form-control form-control-check">
            <label>Set As Preset</label>
            <input type="checkbox" v-model="select" name="select" />
        </div>

        <input type="submit" value="Create Profile" class="btn btn-block" />
    </form>
</template>

<script>
    export default {
        name: 'AddProfile',
        data(){
            return{
                name:'',
                rank_1:'',
                rank_2:'',
                rank_3:'',
                select: false
            }
        },
        methods:{
            // When the 'Create Profile' button is clicked
            onSubmit(e){
                e.preventDefault()

                // if the profile name is not entered
                if(!this.name){
                    alert('Please add a profile')
                    return
                }

                if(!this.rank_1){
                    alert('Please rank at least one nutritional metric')
                    return
                }

                if(!this.rank_2){
                    alert('Please rank your 2nd highest nutritional metric priority')
                    return
                }

                if(!this.rank_3){
                    alert('Please rank your 3rd highest nutritional metric priority')
                    return
                }

                // 'save' the data that the user inputs
                // Randomize the id number
                const newProfile = {
                    id: Math.floor(Math.random() * 100000),
                    name: this.name,
                    rank_1: this.rank_1,
                    rank_2: this.rank_2,
                    rank_3: this.rank_3,
                    select: this.select,
                }

                // send the custom user input to the parent by providing the event name to add a profile and the data that the user inputs
                this.$emit('add-profile', newProfile)

                // initialize the fields back to empty to take in new data
                this.name = ''
                this.rank_1 = ''
                this.rank_2 = ''
                this.rank_3 = ''
                this.select = false
            }
        }
    }
</script>

// styles for the add profile form
<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
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
