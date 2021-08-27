<template>

  <div class="container">
    <h2 class="text-center mt-5">My Vue Todo App</h2>
    <br> 
 
  <div>
     Name: <input  v-model="users.name" type="text" placeholder="Enter Name" class="form-control ">
    
    Email: <input  v-model="users.email"  type="text" placeholder="Enter email" class="form-control">
    
     Phone: <input v-model="users.phone"  type="text" placeholder="Enter phone" class="form-control">
     <br>
     
  </div>
  <div class="text-center mt-2">
     <button class="btn btn-warning round-0" @click="addUser();">{{flag ? 'UpdateTask': 'AddTask'}}</button>
  </div>

  <div class="text-success" v-if="delflag">Deleted Successfully!!</div>
  <div class="text-success" v-if="upflag">Updated Successfully!!</div>
  <div class="text-danger" v-if="flag2">Please fill all fields!!</div>
 


<table-1  v-bind:data="users" @changeUser="updateUser($event)"></table-1>


 </div>
</template>

<script>
import Table1 from './Table.vue'


export default {
  name: 'Add',
  components: {
     Table1,
  },
  props: {
    msg: String
  },
 data() {
   return {
     name:'',
     email:'',
     phone: '',
     flag: false,
     delflag : false,
     upflag : false,
     flag2 : false,
     editTask: null,
     users: [
       {
        name: 'Shirley Wehner',
        email: 'maxwell.jacobs@example.com',
        phone: '0333456788'

       },
        {
         name: 'Carmela Grant',
        email: 'albert.cummings@example.com',
        phone: '0308234577'
       },
       {
        name: 'Amparo Carter',
        email: 'delilah14@example.com',
        phone: '03456789900'

       },
        {
         name: 'Flavio Roob',
        email: 'mrunte@example.com',
        phone: '042-6789900'
       },
        {
         name: 'Piper Turner',
        email: 'hansen.marcia@example.com',
        phone: '03457890666'
       },

     ]
   }
 },
 methods: {
   addUser() {
     if(this.editTask == null){
       this.users.push({
         name: this.name,
         email: this.email,
         phone: this.phone
       });
       this.name= '';
       this.email = '';
       this.phone = '';
     }else{
       this.users[this.editTask].name =this.users.name;
       this.users[this.editTask].email = this.users.email;
       this.users[this.editTask].phone = this.users.phone;
      
      this.users.name ='';
      this.users.email ='';
      this.users.phone ='';
      this.upflag = true;
      this.editTask = null;
      this.flag = false;
      
       
     }
   },

   updateUser:function(updatedUser) {

         this.users.name = updatedUser[0].name;
         this.users.email = updatedUser[0].email;
         this.users.phone = updatedUser[0].phone;
          this.editTask = updatedUser[1];
         console.log("event call");
         this.flag = true;
         console.log(updatedUser);
         console.log(this.editTask);
         console.log(updatedUser[0].name);
   },
  
  
 }
}
</script>

<style scoped>

</style>
