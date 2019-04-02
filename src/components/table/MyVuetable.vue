
<!--suppress ES6ShorthandObjectProperty -->
<template>
 <div class="card">
  <slot></slot>
 </div>
</template>
<script>
 export default {
  name: 'TableTemplate',
 }
</script>
<style>
	.vuetable-empty-result{
		height: 60px;
		font-size: large;
	}
	.vuetable-empty-result{
		vertical-align: middle !important;
	}
</style>
