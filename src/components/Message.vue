<script>
export default {
  data() {
    return {
      messages: ['Coucou',],
      count: 0,
    }
  },
  methods: {
    addMessage() {
      this.count++
      this.messages.push(this.newMessage)
      this.newMessage = ' '
    },
    // getId(msgId){
    //   return this.msgId = this.$route.params.id
    //   // const postId =this.$route.params.postId
    // }
  },
  
}
</script>

<template>

  <v-card title="Afficher un message">
    <v-divider class="border-opacity-25 ms-3 mb-1" color="info" width="200px"></v-divider>
    <v-card-subtitle class="mb-3"> Nombre de click : {{ count }} </v-card-subtitle>
    <h4 class="ms-4 mb-1"> 
      <!-- Permet l'affichage de l'id qui se trouve dans l'url sur la page -->
      {{ $route.params.id }}</h4>
    <h4 v-for="message in messages" :key="message" class="ms-4 mb-1">
      {{ message }} 
    </h4>
   
   

    <v-divider class="border-opacity-25 ms-3 mt-4 mb-2" color="info" width="200px"></v-divider>
    <v-card-actions>
      <v-text-field type="text" v-model="newMessage " label="Ecrire un message" density="compact" />
      <v-btn
        @click="addMessage"
        icon="mdi-plus"
        size="small"
        density="compact"
        color="success"
        elevation="2"
        variant="outlined"
        v-slot:append
        class="mb-4 ms-2"
      />
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
