<template>
  <div class="column">
    <Map/>
    <User/>
  </div>
</template>

<script>
import Map from "../Map"
import User from "../User"

export default {
  components: {
    Map,User
  }
}
</script>