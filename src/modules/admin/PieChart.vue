
<script>
	import { Pie } from 'vue-chartjs'

	export default {
		extends: Pie,
		props:{
			data:{
				type: Array,
				default () {
					return {}
				}
			},
			labels:{
				type: Array,
				default () {
					return {}
				}
			},
			options:{
				type: Object,
				default () {
					return {
						legend: {
							display: true,
							position:'bottom',
						},
						responsive: true,
						maintainAspectRatio: true
					}
				}
			}
		},
		data(){
			return{
				initialData: this.data,
				initialLabels: this.labels,
				backgrounds :[
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#dd2d95',
					'#dd2d95',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#dd2d95',
					'#dd2d95',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#dd2d95',
					'#dd2d95',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#dd2d95',
					'#dd2d95',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#dd2d95',
					'#dd2d95',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#41B883',
					'#E46651',
					'#00D8FF',
					'#DD1B16',
					'#33dd3a',
					'#0d38dd',
					'#ddd21b',
					'#dd7b23',
					'#dd2013',
					'#57a2dd',
					'#dd2d95',
					'#dd2d95',
					'#dd8950'
				]
			}
		},
		methods:{
			getBackgroundColors(){
				return this.backgrounds.slice(this.initialLabels.length)
			}
		},
		mounted () {
			this.renderChart({
				labels: this.initialLabels,
				datasets: [
					{
						backgroundColor: this.getBackgroundColors(),
						data: this.initialData
					}
				]
			}, this.options
		)}
	}
</script>
