<template>
  <div>
      <h1>Este es un componente de prueba</h1>
      <pp :mensaje="'Hola soy un mensaje nuevo'"></pp>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import pp from '@/components/pp.vue';
    @Component(
        {
            components : {
                pp
            }
        }
    )
export default class Coto extends Vue {}
</script>

<style>

</style>