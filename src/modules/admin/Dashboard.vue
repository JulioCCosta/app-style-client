
<template>
	<div class="animated fadeIn">

</div>
</template>

<script>

	export default {
		name: 'dashboard',
		components: {

		data: function () {
			return {
				releases:[],
				fetchReleases: 'Carregando...',
				locale: '',
				now:new Date().toLocaleTimeString(),
				charts:[],
			}
		},
		methods:{
		},
		created () {
			setInterval(() => {
				this.now =new Date().toLocaleTimeString()
			}, 1000)
		},
		mounted(){
		
		}
    }
    }
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
	.card{
		border: 1px solid #c8ced3 !important;
	}
</style>

