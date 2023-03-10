import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService }  from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona'
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ListarComponent } from '../listar/listar.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  personaForm:FormGroup;
  lista!: ListarComponent;
  
  
  constructor(private fb: FormBuilder,
    private router:Router,
    private servicePerson:ServiceService,
    private toastr:ToastrService
    ){
    this.personaForm = this.fb.group({
      id:['',Validators.required],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      saldo:['',Validators.required]
    })
  }

  
  ngOnInit(){
    
  }

  Guardar(){
     const personas:Persona = {
      id: this.personaForm.get('id')?.value,
      nombres: this.personaForm.get('nombres')?.value,
      apellidos: this.personaForm.get('apellidos')?.value,
      saldo: this.personaForm.get('saldo')?.value,
    }
    this.servicePerson.add(personas).subscribe(
      data=>{
        this.toastr.success("La persona se ha registrado exitosamente","Persona registrada")
        this.router.navigate(["/listar"])
    },error=>{
      this.toastr.error("La persona no se ha podido registrar","Error al añadir persona")
    })
  }

}

