<template>
  <div>
    <slot name="slot1" :value="date1" :age="age1"></slot>
    <slot name="slot2" :value="date2"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date1: "我是插槽1",
      date2: "我是插槽2",
      age1: 18,
    };
  },
};
</script>
