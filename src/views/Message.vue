<script>
import Message from '../components/Message.vue';
export default {
  data() {
    return {
      messages: [],
      count: 0
    }
  },
  components: {
    Message
  },
  
}
</script>


<template>
    <main>
        <div>
            <Message/>
        </div>
    </main>
</template>