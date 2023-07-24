<template>
  <router-view />
</template>

<script>
import axios from 'axios'

export default {
  
    data: () => ({
      dialog: false,
      loading: false,
      sprin:50
    }),
    async created() {
    
  }
      ,
    methods: {
   
      required (v) {
        return !!v || 'Field is required'
      },
    },
  }
</script>
