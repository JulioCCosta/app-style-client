<template>
  <div class="flex-row mt-5  y-3 align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="5">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-muted">Entre com suas credenciais</p>
										<b-input-group
											class="mb-4"
											label-for="email"
										>
										 <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
											<b-form-input
												placeholder="Email"
												name="email"
												autocomplete="email"
												type="email"
												required="required"
												id="email"
												:state="state"
												v-model="email" trim />
										</b-input-group>
									<b-input-group
										class="mb-3"
										label-for="password"
									>
									 <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
										<b-form-input
											placeholder="Senha"
											name="password"
											required="required"
											autocomplete="current-password"
											id="password"
											type="password"
											v-model="password"
											:state="state" />
									
									</b-input-group>
                  <b-row>
                    <b-col cols="6">
											<button-spinner
												:is-loading="isLoading"
												type="submit"

												:disabled="isLoading"
												:status="status">
												<span	>Login</span>
											</button-spinner>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>            
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
	import ButtonSpinner from 'vue-button-spinner';

	export default {
  name: 'Login',
	components:{ButtonSpinner},
  data(){
      return {
				isLoading: false,
				status: '',
      	invalid: null,
        email: '',
        password:''
      }
  },
  methods:{    
    login: function () {
			const { email, password } = this;
			console.log(email,password);
			this.isLoading = true
      let self = this
			self.null()
				
			this.$store.dispatch("login", { email, password })
				.then(() => {
					
					self.success()
        	setTimeout(function () {
						self.$router.push('/admin/teste');
						debugger;
					}, 500)
      }).catch(function () {
				
				self.fail()
			})
    },
		fail: function () {
			this.invalid = false
			this.isLoading = false
			this.status = false
			setTimeout(() => { this.status = '' }, 2000)
		},
		null: function(){
			this.invalid = null
			this.status = ''
		},
		success: function () {
			console.log(this.invalid,this.isLoading,this.status);
			this.invalid = true
			this.isLoading = false
			this.status = true
		}
  },
	computed: {
		state() {
			return this.invalid
		},
		
	
		invalidFeedback() {
			return 'Email ou senha incorretos !'
		}
	},
}
</script>
