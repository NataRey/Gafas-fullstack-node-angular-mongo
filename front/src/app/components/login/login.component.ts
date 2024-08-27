import { Component} from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Credential } from '../../interfaces/credential';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentialForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required),
  });

  handleSubmit(){
   // console.log(this.credentialForm);
   if(this.credentialForm.valid){
    const username = this.credentialForm.value.username;
    const password = this.credentialForm.value.password;

    
      if(typeof username === 'string' && typeof password === 'string'){
        const credential: Credential={
          username,
          password,
      }
      
    };
   }else{
    console.log('Error invalid form');
   }
  };
}
