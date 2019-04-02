
<template>
	<div>
		<b-card :header="`<i class='icon-chart'></i>  ${name}`">
			<b-row>
				<b-col v-if="side === 'right'" sm="12"  :lg="collun()">
					<b-card class="mb-0">
						<div class="h4 m-0">{{total}}</div>
						<div>{{name}}</div>
						<div class="chart-wrapper">
							<PieChart :options="options" v-if="chart === 'pie'" :labels="label()" :data="data()" chartId="card-chart-02"/>
						</div>
						<small class="text-muted">{{description}}</small>
					</b-card>
				</b-col>
				<b-col sm="12" :lg="collun()">
					<ul class="horizontal-bars px-0 py-2 type-2">
						<div class="progress-group" v-for="object in objects">
							<div class="progress-group-header">
								<i v-if="object.icon" :class="object.icon" class="progress-group-icon"></i>
								<span class="title">{{object.title}}</span>
								<span class="ml-auto font-weight-bold">{{object.value}} <span class="text-muted small">({{switchPoint(object.percent)}}%)</span></span>
							</div>
							<div class="progress-group-bars">
								<b-progress height={} class="progress-xs" :value="switchPoint(object.percent)" :variant="variant(object.percent)"></b-progress>
							</div>
						</div>
					</ul>
				</b-col>
				<b-col v-if="side === 'left'" sm="12" :lg="collun()">
					<b-card class="mb-0">
						<div class="h4 m-0">{{total}}</div>
						<div>{{name}}</div>
						<div class="chart-wrapper">
							<PieChart :options="options" v-if="chart === 'pie'" :labels="label()" :data="data()" chartId="card-chart-02"/>
						</div>
						<small class="text-muted">{{description}}</small>
					</b-card>
				</b-col>
			</b-row>
			<br/>
		</b-card>
	</div>
</template>
<script>
	import PieChart from './PieChart'
	export default {
		props: ['chartObject'],
		name: 'Chart',
		components: {
			PieChart
		},
		data: function () {
			return {
				chart: this.chartObject.chart,
				options: this.chartObject.options,
				side: this.chartObject.side,
				name: this.chartObject.name,
				total: this.chartObject.total,
				description: this.chartObject.description,
				objects: this.chartObject.objects,
				full: this.chartObject.full || false
			}
		},
		methods: {
			collun(){
				return this.full === true ? '12' : '6';
			},
			switchPoint(str){
				return parseFloat(str.replace(',' , '.'))
			},
			label(){
				return this.objects.map(function (obj) {
					return obj.title.substring(0, 70);
				})
			},
			data(){
				return this.objects.map(function (obj) {
					return obj.value
				})
			},
			variant (value) {
				value = this.switchPoint(value)
				let $variant
				if (value <= 25) {
					$variant = 'info'
				} else if (value > 25 && value <= 50) {
					$variant = 'success'
				} else if (value > 50 && value <= 75) {
					$variant = 'warning'
				} else if (value > 75 && value <= 100) {
					$variant = 'danger'
				}
				return $variant
			}
		}
	}
</script>
<style>
	/* IE fix */
	#card-chart-01, #card-chart-02 {
		width: 100% !important;
	}
</style>
