<script>
export default {
  data() {
    return { }
  },
  props:{
    label:{
        type: String,
        require: true
    },
    value:{
        type:String,
        require:true
    }
  },
}
</script>
<template>
    <div>
        <button>{{ label }}</button>
    </div>
</template>

<style>
</style>