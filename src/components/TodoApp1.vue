<template>

  <div class="container">
    <h2 class="text-center mt-5 bg-">My Vue Todo TodoApp1</h2>
    <br> 
 
  <div>
     Task: <input  v-model="tasks.title" type="text" placeholder="Enter title" class="form-control ">
    
     status: <input  v-model="tasks.status"  type="text" placeholder="Enter status" class="form-control">
    
     donBy: <input v-model="tasks.donBy"  type="text" placeholder="Enter donBy" class="form-control">
     <br>
  
  </div>
  <div class="text-center mt-2">
     <button class="btn btn-warning round-0" @click="addUser();">{{flag ? 'UpdateTask': 'AddTask'}}</button>
  </div>

  <div class="text-success" v-if="delflag">Deleted Successfully!!</div>
  <div class="text-success" v-if="upflag">Updated Successfully!!</div>
  <div class="text-danger" v-if="flag2">Please fill all fields!!</div>
<table-1 v-bind:data="tasks"></table-1>


 </div>
</template>

<script>
import Table1 from './Table.vue'


export default {
  name: 'Add',
  components: {
     Table1,
  },
 data() {
   return {
     title:'',
     status:'',
     donBy: '',
     flag: false,
     delflag : false,
     upflag : false,
     flag2 : false,
     editTask: null,
     tasks: [
       {
        title: 'Build this app in one hour.',
        status: 'in-progress',
        donBy: 'Ali Khan'

       },
        {
         title: 'Steal Bananas from the store',
        status: 'to-do',
        donBy: 'Charlie'
       },
       {
        title: 'Make two cup of tea in 10 minutes.',
        status: 'in-progress',
        donBy: 'Ahsan Bhai'

       },
        {
         title: 'Run and win',
        status: 'to-do',
        donBy: 'Erik'
       },

     ]
   }
 },
 methods: {
   addUser() {
     if(this.editTask == null){
       this.tasks.push({
         title: this.title,
         status: this.status,
         donBy: this.donBy
       });
       this.title= '';
       this.status = '';
       this.donBy = '';
     }else{
       this.tasks[this.editTask].title =this.tasks.title;
       this.tasks[this.editTask].status = this.tasks.status;
       this.tasks[this.editTask].donBy = this.tasks.donBy;
      
      this.tasks.title ='';
      this.tasks.status ='';
      this.tasks.donBy ='';
      this.upflag = true;
      this.editTask = null;
      this.flag = false;
      
       
     }
   },

   updateUser:function(updatedUser) {

         this.tasks.title = updatedUser[0].title;
         this.tasks.status = updatedUser[0].status;
         this.tasks.donBy = updatedUser[0].donBy;
          this.editTask = updatedUser[1];
         console.log("event call");
         this.flag = true;
         console.log(updatedUser);
         console.log(this.editTask);
         console.log(updatedUser[0].title);
   },
  
 }
}
</script>

<style scoped>

</style>
