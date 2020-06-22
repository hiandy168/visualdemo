<template>
  <div id="app" class="viewport">
    <module1/>
    <module2/>
    <module3/>
  </div>
</template>
<script>
import module1 from "./views/module/module1"
import module2 from "./views/module/module2"
import module3 from "./views/module/module3"

export default {
  components: {
    module1,module2,module3
  }
  
}
</script>

<style>
body{
    line-height: 1.15;
    font-size: 0.5rem;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-position: 0 0 / cover;
    background-color: #101129;
}
*{
    margin: 0;
    padding: 0;
    font-weight: normal;
}
ul{
    list-style: none;
}
a{
    text-decoration: none;
}
.viewport {
    /* 限定大小 */
    min-width: 1024px;
    max-width: 1920px;
    min-height: 780px;
    margin: 0 auto;
    background: url(./assets/images/logo.png) no-repeat 0 0 / contain;
    display: flex;
    padding: 3.667rem 0.833rem 0;
}
.column{
    flex: 3;
    position: relative;
}
.column:nth-child(2){
    flex: 4;
    margin: 1.333rem 0.833rem 0;
}
.panel {
    /* 边框 */
    box-sizing: border-box;
    border: 2px solid red;
    border-image: url(./assets/images/border.png) 51 38 21 132;
    border-width: 2.125rem 1.583rem 0.875rem 5.5rem;
    position: relative;
    margin-bottom: 0.833rem;
}
.panel .inner {
    /* 装内容 */
    /* height: 60px; */
    position: absolute;
    top: -2.125rem;
    right: -1.583rem;
    bottom: -0.875rem;
    left: -5.5rem;
    padding: 1rem 1.5rem;
}
.panel h3{
    font-size: 0.833rem;
    color: #fff;
}
</style>
