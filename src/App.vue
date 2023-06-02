<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <nav>
         <router-link to="/Calculate">calculate</router-link>
         <br>
         <router-link to="/Message/:id">message</router-link>
       </nav>
  <RouterView />
</template>

<style scoped>

</style>

