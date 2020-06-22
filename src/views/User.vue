<template>
  <div class="users panel">
    <div class="inner">
      <h3>全国用户总量统计</h3>
      <div class="chart">
        <div class="bar" id="userBar"></div>
        <div class="data">
          <div class="item">
            <h4>120,899</h4>
            <span>
              <i class="icon-dot" style="color: #ed3f35"></i>
              用户总量
            </span>
          </div>
          <div class="item">
            <h4>248</h4>
            <span>
              <i class="icon-dot" style="color: #eacf19"></i>
              本月新增
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        // 工具提示
        tooltip: {
          // 触发类型  经过轴触发axis  经过轴触发item
          trigger: "item",
          // 轴触发提示才有效
          axisPointer: {
            // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果
            type: "shadow"
          }
        },
        // 图表边界控制
        grid: {
          // 距离 上右下左 的距离
          left: "0",
          right: "3%",
          bottom: "3%",
          top: "5%",
          // 大小是否包含文本【类似于boxsizing】
          containLabel: true,
          //显示边框
          show: true,
          //边框颜色
          borderColor: "rgba(0, 240, 255, 0.3)"
        },
        // 控制x轴
        xAxis: [
          {
            // 使用类目，必须有data属性
            type: "category",
            // 使用 data 中的数据设为刻度文字
            data: [
              "上海",
              "广州",
              "北京",
              "深圳",
              "合肥",
              "杭州",
              "厦门",
              "济南",
              "成都",
              "重庆"
            ],
            // 刻度设置
            axisTick: {
              // true意思：图形在刻度中间
              // false意思：图形在刻度之间
              alignWithLabel: false,
              show: false
            },
            //文字
            axisLabel: {
              color: "#4c9bfd"
            }
          }
        ],
        // 控制y轴
        yAxis: [
          {
            // 使用数据的值设为刻度文字
            type: "value",
            axisTick: {
              // true意思：图形在刻度中间
              // false意思：图形在刻度之间
              alignWithLabel: false,
              show: false
            },
            //文字
            axisLabel: {
              color: "#4c9bfd"
            },
            splitLine: {
              lineStyle: {
                color: "rgba(0, 240, 255, 0.3)"
              }
            }
          }
        ],
        // 控制x轴
        series: [
          {
            // series配置
            // 颜色
            itemStyle: {
              // 提供的工具函数生成渐变颜色
              color: this.$echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00fffb" }, // 0 起始颜色
                  { offset: 1, color: "#0061ce" } // 1 结束颜色
                ]
              )
            },
            // 图表数据名称
            name: "用户统计",
            // 图表类型
            type: "bar",
            // 柱子宽度
            barWidth: "60%",
            // 数据
            data: [
              2100,
              1900,
              1700,
              1560,
              1400,
              900,
              750,
              600,
              480,
              240
            ]
          }
        ]
      }
    };
  },
  mounted() {
    const ec = this.$echarts.init(document.getElementById("userBar"));
    ec.setOption(this.option)
  }
};
</script>

<style>
.users {
  height: 14.167rem;
  display: flex;
}
.users .chart {
  display: flex;
  margin-top: 1rem;
}
.users .bar {
  width: 24.5rem;
  height: 10rem;
}
.users .data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
  background-image: url(../assets/images/rect.png);
  background-size: cover;
}
.users h4 {
  margin-bottom: 0.5rem;
  font-size: 1.167rem;
  color: #fff;
}
.users span {
  display: block;
  color: #4c9bfd;
  font-size: 0.667rem;
}
</style>