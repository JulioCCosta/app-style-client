
<template>
	<div class="card-header">
		<div class="d-flex bd-highlight">
			<div class="p-2 w-100 bd-highlight">
				<div class="row">
					<i class="fas fa-users fa-3x text-muted"></i>
					<div class="align-self-center ml-2">
						<h4 class="card-title mb-0">{{module.name}}</h4>
						<div class="small text-muted">{{module.description}}</div>
					</div>
				</div>
			</div>
			<div class="p-2 flex-shrink-1 d-flex align-items-center bd-highlight">
				<b-button
					@click="linkTo()"
					variant="success btn-pill float-sm-left"
					v-b-tooltip.hover=""
					:title="'Adicionar novo ' + resource"
				>
					<i class="fas fa-plus-circle"></i>
				</b-button>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    name: "PanelHead",
    props: ['module'],
    methods:{
      linkTo(){
         this.$router.push('/admin/associados/adicionar');
      },
    },
    computed:{
      resource: function(){
         return this.module.name.slice(0, -1);
      }
    }
  }
</script>
