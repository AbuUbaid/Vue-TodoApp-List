<template>
<div>

    
  <!-- input table -->

  <table class="table table-bordered mt-5">
  <thead>
    <tr class="text-center bg-info" >
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact.No</th>
      <th scope="col" class="text-center">#</th>
      <th scope="col" class="text-center">#</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in data" :key="index" >
      <td>{{user.name}}{{user.title}}</td>
      <td>{{user.email}}{{user.status}}</td>
      <td>{{user.phone}}{{user.donBy}}</td>
      <td>
        <div class="text-center" @click="editUser(index);" v-on:click="updateUser(index)">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td><div class="text-center " @click="deleteUser(index);" >
          <span class="fa fa-trash"></span>
        </div>
        </td>
    </tr>
    
  </tbody>
</table>

</div>
  
</template>

<script>
export default({
   name:'List', 
   components: {
     
   },
  props:['data'],

  
data() {
return {
  name:'',
  email:'',
  phone: '',
  editTask: null,
  arrayObj: [],
  myData: [],
  flag: false
}

},
  methods:{
    deleteUser(index) {
    // this.data.splice(index,2);
    this.data.splice(index,1);
   },
   editUser(index) {
     this.name = this.data[index].name;
     this.email = this.data[index].email;
     this.phone = this.data[index].phone;
     this.editTask = index;
    if(this.editTask != null){
       this.editTask = null;
       
    }
   },
   updateUser: function(index) {
     this.arrayObj[0] =  this.data[index];
     this.arrayObj[1] = index;
     this.$emit('changeUser', this.arrayObj);
   },

   recieveData: function($event){
     this.myData = $event;
     console.log("data received..");
     console.log(this.myData);
   }
   
  
    

   
  }
  

})
</script>

