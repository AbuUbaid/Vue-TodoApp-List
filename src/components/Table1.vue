<template>
   
  <div>
   
  <div class="text-center mt-5 bt-5 bg-primary"><h3>This is the second table..</h3></div>
    
      <FirstTable @dataReceive="table1Data($event)"></FirstTable>
</div>
  
</template>
<script>
import FirstTable from './Table.vue'
export default {
    name: 'TBL1',
     components: {
        FirstTable
     },
     data() {
       return {
           myData:[]
       }
     },

   table1Data: function(event){
    
      this.myData = event;
      }
    
}
</script>
