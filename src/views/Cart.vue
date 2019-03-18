<template>
  <div class="cart">
    <p v-for="item in items" :key="item.id">{{ item.title }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';

const cartModule = namespace('cart');

@Component({})
export default class Cart extends Vue {
  @cartModule.State items;
}
</script>
