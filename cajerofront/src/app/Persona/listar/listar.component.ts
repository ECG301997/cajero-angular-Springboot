import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas: Persona[] = [];

  
constructor( 
  private servicePerson : ServiceService,
  private toastr:ToastrService
  )
  {}
  
  ngOnInit(){
    this.getPersons();

}
getPersons(){
  this.servicePerson.getPersonas().subscribe(
    
    data =>{
      this.personas = data;
    console.log(data)
    },error=>{
      console.log(error);
    }
    )


}

delete(id : any){
  console.log("hola",id)
  this.servicePerson.delete(id).subscribe(
    data =>{
      this.personas = data;
    console.log('Usuario eliminado')
    this.toastr.warning("Se ha eliminado el usuario correctamente","Usuario eliminado")
      this.getPersons();
    },error=>{
      console.log(error);
    }
    )
}
}