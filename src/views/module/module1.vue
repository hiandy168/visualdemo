<template>
  <div class="column">
    <OverView/>
    <Monitor/>
    <Pointer/>
  </div>
</template>

<script>
import OverView from "../OverView"
import Monitor from "../Monitor"
import Pointer from "../Pointer"

export default {
  components: {
    OverView,Monitor,Pointer
  }
}
</script>