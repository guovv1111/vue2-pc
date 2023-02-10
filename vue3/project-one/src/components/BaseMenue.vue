<template>
  <div>
    <div v-for="(item, index) in data" :key="index">
      <div style="margin-left: 20px" @click.stop="handleTreeItem(item)">
        {{ item.name }}
        <BaseMenue
          v-if="item?.children?.length"
          :data="item.children"
          @tree-click="handleTreeItem"
        ></BaseMenue>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';

defineProps({
  data: [],
  age: Number
});

const emit = defineEmits(['tree-click']);

function handleTreeItem(item) {
  emit('tree-click', item);
}
</script>
