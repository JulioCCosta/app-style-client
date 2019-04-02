
<template>
	<div>
		<b-card header="<div class='d-flex align-items-center'><i class='text-muted fas mr-1 fas fa-chart-pie'></i>Contadores</div>">
			<b-row>
				<b-col sm="12" lg="12">
					<b-row>
						<b-col v-for="(dt, id) in data" :key="id" lg="2" cols="6"  sm="4">
							<Callout :variant="dt.variant">
								<small class="text-muted">{{dt.title}}</small><br>
								<strong class="h4">{{dt.total}}</strong>
							</Callout>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>
<script>
	import Resource from '../../resource'
	import { Callout } from '@coreui/vue'
	import Counter from './Counter'
	export default {
			name: "Counters",
			components: {Callout , Counter},
			data(){
				return {
					data:[]
				}
			},
		methods:{
			variant (value) {
				let $variant
				if (value <= 1000) {
					$variant = 'info'
				} else if (value > 1000 && value <= 5000) {
					$variant = 'success'
				} else if (value > 5000 && value <= 10000) {
					$variant = 'warning'
				} else if (value > 15000 && value <= 30000) {
					$variant = 'danger'
				}
				return $variant
			}
		},
		mounted(){
			Resource.index('counters').then(response => {
				this.data = response
			})
		}
	}
</script>
