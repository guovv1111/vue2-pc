<template>
  <div id="app" class="main">
    <!-- <div class="container">
      <div class="c">
        <div class="c-main">双飞翼布局；floaf实现，centent</div>
      </div>
      <div class="l">left</div>
      <div class="r">right</div>
    </div> -->

    <div class="container-flex">
      <div class="c">
        <div class="c-main">双飞翼布局；flex实现，centent</div>
      </div>
      <div class="l">left</div>
      <div class="r">right</div>
    </div>
    <h1>vue2</h1>
    <div>我是父组件：parent</div>
    <div>这是我的第一个子组件：{{ childOneName }}</div>
    <ChildOne ref="childone" :msg="msg" @childName="getChildName" />
    <div>这是我的第二个子组件：{{ childTwoName }}</div>
    <ChildTwo :msg="msg" @childName="getChildName2" />
    <h2>跨层级传值</h2>
    <button @click="name = 3">跨层级传值</button>
    <div class="vuex-main">
      <!-- <PageOne></PageOne> -->
      <PageTwo></PageTwo>
      <PermissionPage></PermissionPage>
      <SlotCom>
        <template v-slot:slot1="slote1value">{{ slote1value.value }}</template>
        <template #slot2="slot2value">{{ slot2value.value }}</template>
      </SlotCom>
      <button @click="handleToast">-------------显示toas---------------</button>
      <div class="inline-cell">inline</div>
      <div class="inline-block-cell">inline-block</div>
    </div>
  </div>
</template>

<script>
import ChildOne from "../components/ChildOne.vue";
import ChildTwo from "../components/ChildTwo.vue";
// import PageOne from "./pages/PageOne.vue";
import PageTwo from "./PageTwo.vue";
import PermissionPage from "./PermissionPage.vue";
import SlotCom from "../components/SlotCom.vue";

export default {
  name: "App",
  provide() {
    return {
      name: this,
      // name: () => this.name,
      // name: this.name, // provide是非响应式的 通过函数形式传参； 将this全部传入
    };
  },
  data() {
    return {
      msg: "parent",
      childOneName: "",
      childTwoName: "",
      name: "app provide",
    };
  },
  components: {
    ChildOne,
    ChildTwo,
    // PageOne,
    PageTwo,
    PermissionPage,
    SlotCom,
  },
  methods: {
    tt() {
      setTimeout(function () {
        console.log("settimeout");
        new Promise((resolve) => {
          console.log("new promise");
          resolve();
        }).then(() => {
          console.log("promise then");
        });
      }, 0);

      console.log("自执行函数");
      // var i = 10;
      for (var i = 0; i < 3; i++) {
        (function (i) {
          setTimeout(function () {
            console.log(i);
          }, i * 1000);
        })(i);
      }
    },
    getChildName(value) {
      this.childOneName = value;
      console.log(value);
    },
    getChildName2(value) {
      this.childTwoName = value;
      console.log(value);
    },
    handleToast() {
      this.$toast("success！", 4000);
    },
  },
  mounted() {
    console.log("组件对象refs=", this.$refs.childone);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main {
  height: 100vh;
  background: #ccc;
}
.vuex-main {
  background: #c8cd81;
  padding: 20px 10px;
}

.inline-block-cell {
  display: inline-block;
  background: blue;
  width: 200px;
  height: 20px;
}

.inline-cell {
  display: inline;
  background: green;
  width: 200px;
  height: 20px;
  padding: 20px;
  margin: 20px;
}

/* .container {
  width: 100vw;
}
.container > div {
  float: left;
}
.c {
  width: 100vw;
  height: 100vh;
  background: pink;
}
.c-main {
  padding: 0 200px;
} */
/* .l {
  width: 200px;
  height: 100vh;
  background: blue;
  margin-left: -100%;
}
.r {
  width: 200px;
  height: 100vh;
  background: green;
  margin-left: -200px;
} */
.container-flex {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: 20px;
}
.container-flex .c {
  height: 100vh;
  flex-grow: 1;
  background: pink;
  order: 1;
}
.container-flex .l {
  width: 200px;
  height: 100vh;
  background: blue;
}
.container-flex .r {
  width: 200px;
  height: 100vh;
  background: green;
  order: 3;
}
</style>
