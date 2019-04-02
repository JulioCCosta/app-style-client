
<template>
	<div>
		<div class="filter-bar">
			<div class="form-inline">
				<div class="form-group d-flex">
					<div class="input-group">
						<div class="input-group-prepend ">
							<span class="input-group-text">Buscar</span>
						</div>
						<input type="text" v-model="filterText" class="form-control" @keyup.enter="doFilter" placeholder="Digite...">
						<div class="input-group-append">
							<button @click="doFilter" type="button" class="btn btn-primary">
								<i class="fas fa-search"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        filterText: ''
      }
    },
    methods: {
      doFilter () {
        this.$events.fire('filter-set', this.filterText)
      },
    }
  }
</script>
