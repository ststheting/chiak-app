<template>
    <form @submit="onSubmit" class="add-form">

    <!--Profile input label  -->
    <div class="form-control">
      <label>Profile</label>
      <input type="text" v-model="name" name="name" placeholder="New Profile Name" />
    </div>

    <!-- Sugar Level input label -->
    <div class="form-control">
      <label>Sugar Level</label>
      <input
        type="text"
        v-model="sugar_lvl"
        name="sugar_lvl"
        placeholder="Input Sugar Level"
      />
    </div>

    <!-- Calorie input label -->
    <div class="form-control">
      <label>Calorie</label>
      <input
        type="text"
        v-model="calorie"
        name="calorie"
        placeholder="Input Calorie Content"
      />
    </div>

    <!-- Protein input label -->
    <div class="form-control">
      <label>Protein</label>
      <input
        type="text"
        v-model="protein"
        name="protein"
        placeholder="Input Protein Content"
      />
    </div>

    <!-- Price input label -->
    <div class="form-control">
      <label>Price</label>
      <input
        type="text"
        v-model="price"
        name="price"
        placeholder="Input Price"
      />
    </div>

    <!-- <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div> -->

    <input type="submit" value="Create Profile" class="btn btn-block" />
  </form>
</template>

<script>
    export default {
        name: 'AddProfile',
        data(){
            return{
                name:'',
                sugar_lvl:'',
                calorie:'',
                protein:'',
                price:''
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault()

                if(!this.name){
                    alert('Please add a profile')
                    return
                }

                // Randomize the id number
                const newProfile = {
                    id: Math.floor(Math.random() * 100000),
                    name: this.name,
                    sugar_lvl: this.sugar_lvl,
                    calorie: this.calorie,
                    protein: this.protein,
                    price: this.price,
                }

                this.$emit('add-profile', newProfile)

                this.name = ''
                this.sugar_lvl = ''
                this.calorie = ''
                this.protein = ''
                this.price = ''

            }
        }
    }
</script>

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
