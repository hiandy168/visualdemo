<template>
  <div class="top panel">
    <div class="inner">
      <div class="all">
        <h3>{{whole.title}}</h3>
        <ul>
          <li v-for="item in whole.data" :key="item.id">
            <i :class="item.rankLogo" :style="{color: item.isColor}"></i>
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="province">
        <h3>
          {{province.title}}
          <i class="date">{{province.desc}}</i>
        </h3>
        <div class="data">
          <ul class="sup">
            <li
              v-for="item in province.data"
              :key="item.id"
              @click="change(item)"
              :class="{active: item.isActive}"
            >
              <span>{{item.name}}</span>
              <span>
                {{item.value}}
                <s :class="item.flag"></s>
              </span>
            </li>
          </ul>
          <ul class="sub">
            <!-- <li><span>数据</span><span> 数据<s class="icon-up"></s></span></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whole: {
        title: "全国热榜",
        data: [
          {
            id: 1,
            name: "可爱多",
            isColor: "#d93f36",
            rankLogo: "icon-cup1"
          },
          {
            id: 2,
            name: "娃哈哈",
            isColor: "#68d8fe",
            rankLogo: "icon-cup2"
          },
          {
            id: 3,
            name: "喜之郎",
            isColor: "#4c9bfd",
            rankLogo: "icon-cup3"
          }
        ]
      },
      province: {
        title: "各省热销",
        desc: "// 近一周 //",
        data: [
          {
            id: 1,
            name: "北京",
            value: 25179,
            flag: "icon-up",
            isActive: false,
            data: [
              { name: "可爱多", num: "9,086" },
              { name: "娃哈哈", num: "8,341" },
              { name: "喜之郎", num: "7,407" },
              { name: "八喜", num: "6,080" },
              { name: "小洋人", num: "6,724" },
              { name: "好多鱼", num: "2,170" },
              { name: "好多鱼", num: "2,170" }
            ]
          },
          {
            id: 2,
            name: "河北",
            value: 23252,
            flag: "icon-down",
            isActive: false,
            data: [
              { name: "可爱多1", num: "9,086" },
              { name: "娃哈哈1", num: "8,341" },
              { name: "喜之郎1", num: "7,407" },
              { name: "八喜1", num: "6,080" },
              { name: "小洋人1", num: "6,724" },
              { name: "好多鱼1", num: "2,170" },
              { name: "好多鱼1", num: "2,170" }
            ]
          },
          {
            id: 3,
            name: "上海",
            value: 20760,
            flag: "icon-up",
            isActive: false,
            data: [
              { name: "可爱多2", num: "9,086" },
              { name: "娃哈哈2", num: "8,341" },
              { name: "喜之郎2", num: "7,407" },
              { name: "八喜2", num: "6,080" },
              { name: "小洋人2", num: "6,724" },
              { name: "好多鱼2", num: "2,170" },
              { name: "好多鱼2", num: "2,170" }
            ]
          },
          {
            id: 4,
            name: "江苏",
            value: 23252,
            flag: "icon-down",
            isActive: false,
            data: [
              { name: "可爱多3", num: "9,086" },
              { name: "娃哈哈3", num: "8,341" },
              { name: "喜之郎3", num: "7,407" },
              { name: "八喜3", num: "6,080" },
              { name: "小洋人3", num: "6,724" },
              { name: "好多鱼3", num: "2,170" },
              { name: "好多鱼3", num: "2,170" }
            ]
          },
          {
            id: 5,
            name: "山东",
            value: 20760,
            flag: "icon-down",
            isActive: false,
            data: [
              { name: "可爱多4", num: "9,086" },
              { name: "娃哈哈4", num: "8,341" },
              { name: "喜之郎4", num: "7,407" },
              { name: "八喜4", num: "6,080" },
              { name: "小洋人4", num: "6,724" },
              { name: "好多鱼4", num: "2,170" },
              { name: "好多鱼4", num: "2,170" }
            ]
          }
        ]
      }
    };
  },
  methods: {
    change(param) {
      let html = "";
      
      for (const item of this.province.data) {
        if (param.id === item.id) {
          console.log("---------进入----------------");
          item.isActive = true;
          param.data.forEach(ob => {
            html +=
              `<li><span>` +
              ob.name +
              `</span><span>` +
              ob.num +
              `<s class="icon-up"></s></span></li>`;
          });
          this.$(".sub").html(html);
        } else {
          item.isActive = false;
        }
      }
    }
  },
  mounted () {
    let html = "";
    //设置排名第一的省份高亮
    this.province.data[0].isActive = true;
    //并设置对应的右侧数据显示
    this.province.data[0].data.forEach(ob => {
            html +=
              `<li><span>` +
              ob.name +
              `</span><span>` +
              ob.num +
              `<s class="icon-up"></s></span></li>`;
          });
    this.$(".sub").html(html);
    
  }
};
</script>

<style>
.top {
  height: 11.8rem;
}
.top .inner {
  display: flex;
}
.top .all {
  display: flex;
  flex-direction: column;
  width: 7rem;
  color: #4c9bfd;
  font-size: 0.6rem;
  vertical-align: middle;
}
.top .all ul {
  padding-left: 0.5rem;
  margin-top: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top .all li {
  overflow: hidden;
}
.top .all [class^="icon-"] {
  font-size: 1.5rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}
.top .province {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.top .province i {
  padding: 0 0.5rem;
  margin-top: 0.208rem;
  float: right;
  font-style: normal;
  font-size: 0.583rem;
  color: #0bace6;
}
.top .province s {
  display: inline-block;
  transform: scale(0.8);
  text-decoration: none;
}
.top .province .icon-up {
  color: #dc3c33;
}
.top .province .icon-down {
  color: #36be90;
}
.top .province .data {
  flex: 1;
  display: flex;
  margin-top: 0.6rem;
}
.top .province ul {
  flex: 1;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.top .province ul li {
  display: flex;
  justify-content: space-between;
}
.top .province ul span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.top .province ul.sup {
  font-size: 0.583rem;
}
.top .province ul.sup li {
  color: #4995f4;
  padding: 0.5rem;
}
.top .province ul.sup li.active {
  color: #a3c6f2;
  background-color: rgba(10, 67, 188, 0.2);
}
.top .province ul.sub {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.5rem;
  background-color: rgba(10, 67, 188, 0.2);
}
.top .province ul.sub li {
  color: #52ffff;
  padding: 0.417rem 0.6rem;
}
.clock {
  position: absolute;
  top: -1.5rem;
  right: 1.667rem;
  font-size: 0.833rem;
  color: #0bace6;
}
.clock i {
  margin-right: 5px;
  font-size: 0.833rem;
}
@media screen and (max-width: 1600px) {
  .top span {
    transform: scale(0.9);
  }
  .top .province ul.sup li {
    padding: 0.4rem 0.5rem;
  }
  .top .province ul.sub li {
    padding: 0.23rem 0.5rem;
  }
  .quarter span {
    transform: scale(0.9);
  }
}
</style>