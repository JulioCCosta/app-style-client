
<template>
	<b-card :header="`<i class='icon-calendar'></i> Anivesariantes de hoje: ${ new Date().toLocaleDateString() }`">
		<b-table v-if="tableItems.length > 0" class="mb-0 table-outline" responsive="md" hover :items="tableItems" :fields="tableFields" head-variant="light">
			<div slot="foto" class="avatar icon-" slot-scope="item">
				<img :src="item.value" class="img-avatar" alt="">
			</div>
			<div slot="nome" slot-scope="item">
				<div>{{item.value}}</div>
			</div>
			<div slot="deficiencias" slot-scope="item">
				<div  v-for="(obj , id) in item.value" :id="id" >
					<b-badge class="mr-1"variant="warning">{{ obj.codigo + '-'+ obj.nome }}</b-badge>
				</div>
			</div>
			<div slot="data_de_nascimento" slot-scope="item">
				{{ nascimento(item.value) }}
			</div>
			<div slot="status" slot-scope="item">
				<b-badge :variant="labelStatus(item.value)">{{item.value}}</b-badge>
			</div>
		</b-table>
		<div class="text-center" v-if="tableItems.length === 0">
			<p class="h5 text-muted">Não há aniversarinates hoje</p>
		</div>
	</b-card>
</template>
<script>
	import Resource from '../../resource'
	export default {
		name: "Aniversariantes",
		data(){
			return{
				tableItems: [],
				tableFields: {
					foto: {
						label: '<i class="icon-people"></i>',
						class: 'text-center'
					},
					nome: {
						label: 'Associado'
					},
					deficiencias: {
						label: 'Deficiências'
					},
					data_de_nascimento: {
						label: 'Nascimento',
						variant: 'success'
					},
					status: {
						label: 'Status',
						class: 'text-center'
					}
				}
			}
		},
		methods: {
			labelStatus(val){
				if (val === 'ativo')
					return 'success'
				else
					return 'danger'
			},
			nascimento(date){
				let hoje = new Date(),
					ano  = hoje.getFullYear();
					let ano_nascimento  = date[0]+date[1]+date[2]+date[3];
					let idade = ano - ano_nascimento;
				return date[8]+date[9]+"/"+date[5]+date[6]+"/"+date[0]+date[1]+date[2]+date[3]+ " - " + idade + " anos";
			}
		},
		mounted(){
			Resource.index('aniversariantes?periodo=hoje').then(data => {
				this.tableItems = data
			})
		}
	}
</script>
