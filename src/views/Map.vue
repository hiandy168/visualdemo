<template>
  <div class="map">
    <h3>
      <span class="icon-cube"></span>
      设备数据统计
    </h3>
    <div class="chart">
      <div class="geo"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.map {
  height: 24.1rem;
  margin-bottom: 0.833rem;
  display: flex;
  flex-direction: column;
}
.map h3 {
  line-height: 1;
  padding: 0.667rem 0;
  margin: 0;
  font-size: 0.833rem;
  color: #fff;
}
.map .icon-cube {
  color: #68d8fe;
}
.map .chart {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.05);
}
.map .geo {
  width: 100%;
  height: 100%;
}
</style>