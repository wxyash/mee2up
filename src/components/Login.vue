<template>
 <v-container>
 <transition mode="out-in" enter-active-class="animated fadeIn"
 leave-active-class="animated fadeOut">
 <v-layout row v-if="selected" >
  <v-flex xs5 offset-xs3>
      <v-card>
       <v-card-title primary-title>
                <div class="headline">Login</div>
       </v-card-title>
     <v-layout row>
      <v-flex xs2>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          prepend-icon="account_box"
          name="input-1"
          label="Email"
          :type="'email'"
          v-model="email"          
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          prepend-icon="lock"
          name="input-1"
          label="Password"
          :type ="'password'"
          v-model="password"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <br>
    <v-layout>
        <v-flex xs12 offset-xs2 ><v-btn class="secondary" >Login</v-btn></v-flex>
    </v-layout>
    <br>
    <v-flex xs12 offset-xs2>
           <span class="registered">
           <v-btn @click="selected=!selected" flat color="orange darken-2">Don't have an account? <span class="registered"> Register!</span></v-btn>
           </span>
       </v-flex>
    <br>
   </v-card>
  </v-flex>
      
  </v-layout>
    <v-layout row v-if="!selected" >
  <v-flex xs5 offset-xs3>
      <v-card >
       <v-card-title primary-title>
                <div class="headline">SignUp</div>
       </v-card-title>
        <v-layout row>
      <v-flex xs2>
      </v-flex>
      <v-flex xs8>
        <v-alert v-if="error" :value="true" dismissible :type="errorClass">
          {{errorMessage}}
        </v-alert>
        <br>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          prepend-icon="account_box"
          name="input-1"
          label="Email"
          :type="'email'"
          v-model="email"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          prepend-icon="lock"
          name="input-1"
          label="Password"
          :type="'password'"
          v-model="password"      
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2>
      </v-flex>
      <v-flex xs8>
        <v-text-field 
          prepend-icon="lock"
          name="input-1"
          label="Confirm Password"
          :type="'password'"  
          v-model="confirmPassword"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <br>
    <v-layout>
        <v-flex xs12 offset-xs2 ><v-btn @click="register" class="secondary" >Sign Up</v-btn></v-flex>
    </v-layout>
    <br>
     <v-layout>
       <v-flex xs12 offset-xs3>
           <span class="registered">
           <v-btn @click="selected=!selected" flat color="orange darken-2">Already Registered? <span class="registered"> Login!</span></v-btn>
           </span>
       </v-flex>
        
    </v-layout>
    
    <br>
   </v-card>
   
  </v-flex>
      
  </v-layout>
  </transition>
  
  
   
  </v-container>
</template>

<script>
    import firebase from 'firebase'
    export default {
        data() {
            return {
                selected: true,
                error:false,
                errorMessage:'',
                errorClass:'',
                email: null,
                password: null,
                confirmPassword: null
            }
        },
        methods: {
            register(target) {
                if(this.password==null || this.confirmPassword==null || this.email==null||this.password=='' || this.confirmPassword=='' || this.email==''){
                    this.errorClass = 'error';
                    this.errorMessage = "Please input all the fields";
                    this.error=true;
                    return;
                }
                if(this.password != this.confirmPassword){
                    this.error = true;
                    this.errorMessage = "Passwords don't match."
                    this.resetAttributes();
                    return;
                }
                if(this.password.length<=6){
                    this.error = true;
                    this.errorMessage = "Passwords must be longer than 6 characters.";
                    this.resetAttributes();
                    return;
                }
               

                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
                this.resetAttributes();
                this.errorClass="success";
                this.errorMessage="Successfully Registered. Please Check Your Email.";
                }, err => {
                    console.log(err)
                    this.error = true;
                    this.errorMessage = err.message;
                })
                target.preventDefault();
                
            },
            login(target) {
                firebase.auth().signInWithEmailAndPassword(this.email, )
            },
            resetAttributes(){
                this.email = null;
                this.password = null;
                this.confirmPassword = null;
            }
        }

    }

</script>

<style scoped>


</style>
