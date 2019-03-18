<template>
  <div class="products">
    <div v-for="product in products" :key="product.id">
      <p>{{ product.title }}</p>
      <button @click="addToCart(product)">ADD</button>
    </div>
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

const productsModule = namespace('products');

@Component({})
export default class Products extends Vue {
  @productsModule.State products;

  created() {
    this.$store.dispatch('products/getAllProducts');
  }

  addToCart(product) {
    this.$store.dispatch('cart/addProduct', product);
  }
}
</script>
