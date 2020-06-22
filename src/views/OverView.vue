<template>
  <div class="overview panel">
      <div class="inner">
          <div class="item" v-for="item in overView" :key="item.id">
              <h4>{{item.number}}</h4>
              <span>
                  <i class="icon-dot" :style="item.color"></i>
                  {{item.name}}
              </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      overView: [
        {
          id: 1,
          name: "设备总数",
          number: 2190,
          color: "color: #006cff"
        },
        {
          id: 2,
          name: "季度新增",
          number: 190,
          color: "color: #6acca3"
        },
        {
          id: 3,
          name: "运营设备",
          number: 3001,
          color: "color: #6acca3"
        },
        {
          id: 4,
          name: "异常设备",
          number: 108,
          color: "color: #ed3f35"
        }
      ]
    }
  }

}
</script>

<style>
.overview{
    height: 4.583rem;
  }
  .overview .inner{
    display: flex;
    justify-content: space-between;
  }
  .overview h4{
    font-size: 1.167rem;
    padding-left: 0.2rem;
    color: #fff;
    margin-bottom: 0.333rem
  }
  .overview span{
    font-size: 0.667rem;
    color: #4c9bfd;
}
</style>