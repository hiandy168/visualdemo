<template>
  <div class="sales panel">
    <div class="inner">
      <div class="caption">
        <h3>{{title}}</h3>
        <a
          href="javascript:;"
          v-for="item in type"
          :key="item.id"
          :class="{active: item.isActive}"
          :data-type="item.type"
          @click="change(item)"
        >{{item.name}}</a>
      </div>
      <div class="chart">
        <div class="label">单位:万</div>
        <div class="line" id="saleLine"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "销售额统计",
      type: [
        {
          id: 1,
          name: "年",
          type: "year",
          isActive: true
        },
        {
          id: 2,
          name: "季",
          type: "quarter",
          isActive: false
        },
        {
          id: 3,
          name: "月",
          type: "month",
          isActive: false
        },
        {
          id: 4,
          name: "周",
          type: "week",
          isActive: false
        }
      ],
      option: {
        //鼠标提示工具
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          // 类目类型
          type: "category",
          // x轴刻度文字
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisTick: {
            show: false //去除刻度线
          },
          axisLabel: {
            color: "#4c9bfd" //文本颜色
          },
          axisLine: {
            show: false //去除轴线
          },
          boundaryGap: false //去除轴内间距
        },
        yAxis: {
          // 数据作为刻度文字
          type: "value",
          axisTick: {
            show: false //去除刻度线
          },
          axisLabel: {
            color: "#4c9bfd" //文本颜色
          },
          axisLine: {
            show: false //去除轴线
          },
          boundaryGap: false //去除轴内间距
        },
        //图例组件
        legend: {
          textStyle: {
            color: "#4c9bfd" // 图例文字颜色
          },
          right: "10%" //距离右边10%
        },
        // 设置网格样式
        grid: {
          show: true, // 显示边框
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          borderColor: "#012f4a", // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
        series: [
          {
            name: "预期销售额",
            // 数据
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            // 图表类型
            type: "line",
            // 圆滑连接
            smooth: true,
            itemStyle: {
              color: "#00f2f1" // 线颜色
            }
          },
          {
            name: "实际销售额",
            // 数据
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            // 图表类型
            type: "line",
            // 圆滑连接
            smooth: true,
            itemStyle: {
              color: "#ed3f35" // 线颜色
            }
          }
        ]
      },
      saleNumber: {
        year: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
          [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
          [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
          [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
          [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
          [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
          [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
      }
    };
  },
  mounted() {
    let ec = this.$echarts.init(document.getElementById("saleLine"));
    ec.setOption(this.option);
  },
  methods: {
    change(param) {
      for (const item of this.type) {
        if (item.type === param.type) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      }

      const key = this.saleNumber[param.type];
      this.option.series[0].data = key[0];
      this.option.series[1].data = key [1];

      let ec = this.$echarts.init(document.getElementById("saleLine"));
      ec.setOption(this.option);

    }
  }
};
</script>

<style>
.sales {
  height: 10.333rem;
}
.sales .caption {
  display: flex;
  line-height: 1;
}
.sales h3 {
  height: 0.75rem;
  padding-right: 0.75rem;
  border-right: 0.083rem solid #00f2f1;
}
.sales a {
  padding: 0.167rem;
  font-size: 0.667rem;
  margin: -0.125rem 0 0 0.875rem;
  border-radius: 0.125rem;
  color: #0bace6;
}
.sales a.active {
  background-color: #4c9bfd;
  color: #fff;
}
.sales .inner {
  display: flex;
  flex-direction: column;
}
.sales .chart {
  flex: 1;
  padding-top: 0.6rem;
  position: relative;
}
.sales .label {
  position: absolute;
  left: 1.75rem;
  top: 0.75rem;
  color: #4996f5;
  font-size: 0.583rem;
}
.sales .line {
  width: 100%;
  height: 100%;
}
</style>