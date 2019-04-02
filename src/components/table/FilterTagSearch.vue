
<template>
	<div class="col-sm-12 d-none d-md-block">
		<b-form @submit.prevent="" class="d-none d-md-block" inline>
			<div class="row">
				<div class="col-10">
					<filter-bar class="float-left"></filter-bar>
					<div class="d-flex justify-content-start">
						<b-form-radio-group
							id="btnradios2"
							buttons
							class="btn-group btn-group-toggle ml-3"
							button-variant="outline-success"
							size="md"
							v-model="selected"
							:options="filters.options"
							name="radioBtnOutline">
						</b-form-radio-group>
					</div>
				</div>
			</div>
		</b-form>
	</div>
</template>
<script>
    export default {
        name: "FilterTagSearch",
        props: {
            filters: {
                type: Object,
                default () {
                    return {}
                }
            },
        },
        data(){
            return{
                selected: this.filters.selected
            }
        },
        watch:{
            selected: function(){
                this.emit();
            }
        },
        methods:{
            emit: function(){
                this.$emit('input', this.selected)
            }
        }
    }
</script>
<style scoped>
</style>
