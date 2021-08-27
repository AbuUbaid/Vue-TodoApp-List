<template>
  <div id="app">
   <!-- Navbar-->
<header class="hero">
  <div class="hero-inner">
    <h2>Well Come to my Todo Application</h2>
    <p>In this Application you are able to add, update and delete data</p>
    <div class="buttons">
      <button  class="hero-button ghost" @click="$router.push('firstapp')">View TodoApp</button><button class="hero-button ghost" @click="$router.push('newapp')">View TodoApp1</button>
    </div>
    
    
  </div>
</header>
    <router-view></router-view>
    
  </div>
</template>

<script>

//import TodoApp1 from './components/TodoApp1.vue'
//import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
 components: {
 // 'todo-app':TodoApp,
  // 'todo-app1':TodoApp1
 }
}
</script>

<style >
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #636EFD;
}

@media (min-width: 700px) {
  .hero {
    padding: 3rem;
  }
}

@media (min-width: 1200px) {
  .hero {
    padding: 6rem;
  }
}

.hero-inner {
  max-width: 900px;
  margin: auto;
}

.hero-inner p,
.hero h2 {
  color: #fff;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .buttons {
    display: grid;
    /* Wide buttons */
    grid-template-columns: 1fr 1fr;
    /* Centered, narrow buttons */
    grid-template-columns: auto auto;
    gap: 1rem;
    justify-content: center;
  }
}

.hero-button {
  background: #fff;
  color: #444;
  border: 0;
  padding: 1rem 2rem;
  display: inline-block;
  margin-top: 1rem;
}

@media (min-width: 700px) {
  .hero-button {
    margin-top: 2rem;
  }
}

.hero-button.ghost {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
}


</style>

