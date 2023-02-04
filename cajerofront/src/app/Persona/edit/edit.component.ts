import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { ListarComponent } from '../listar/listar.component';
import { saldoFin } from 'src/app/Modelo/Persona';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  personaForm: FormGroup;
  lista!: ListarComponent;
  id: number | any
  saldo: number | any
  saldoFinal: number | any

  constructor(private fb: FormBuilder,
    private router: Router,
    private servicePerson: ServiceService,
    private aRouter: ActivatedRoute,
    private toastr:ToastrService
  ) {
    this.personaForm = this.fb.group({

      saldo: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.saldo = this.aRouter.snapshot.paramMap.get('saldo');
  }
  ngOnInit() {
    this.capture()

  }

  capture() {
    let valorRetiro = this.personaForm.get('saldo')?.value;

    return valorRetiro
  }

  Editar() {

    let valorRetiro = this.capture()
    console.log(valorRetiro)
    if (valorRetiro > this.saldo) {
      this.toastr.error("No posee los fondos necesarios","Saldo insuficiente")
    } else {
      this.saldoFinal = this.saldo - valorRetiro

      const saldo: saldoFin = {
        saldo: this.saldoFinal
      }

      this.servicePerson.update(this.id, saldo).subscribe(
        data => {
          this.toastr.error(" se ha realizado retiro realizado de manera exitosa","Retiro realizado")
          this.router.navigate(["/listar"])
        }, error => {
          console.log(error)
        }
      );
    }
  }

}

