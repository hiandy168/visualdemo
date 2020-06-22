<template>
  <div class="column">
    <Order/>
    <SaleValue/>
    <Quarter/>
    <Rank/>
  </div>
</template>

<script>
import Order from "../Order"
import SaleValue from "../SaleValue"
import Quarter from "../ChannelQuarter"
import Rank from "../Rank"

export default {
  components: {
    Order,SaleValue,Quarter,Rank
  }
}
</script>