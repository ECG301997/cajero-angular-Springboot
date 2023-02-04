package Cajero.cajero.Controller;

import Cajero.cajero.Entities.Persona;
import Cajero.cajero.Interface.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/api/usuarios")
@RestController
public class Controller {
    @Autowired
    PersonaService service;

    @GetMapping()
    public List<Persona> listar(){
        return service.listar();
    }
    @GetMapping("/{id}")
        public Persona getById(@PathVariable("id") int id){
         return service.listarId(id);
        }


       @PostMapping()
        public Persona addUser(@RequestBody Persona persona){
        return service.add(persona);
       }

    @PatchMapping("/{id}")
    public Persona updateUser(@PathVariable("id")int id , @RequestBody Map<Object, Object> objectMap ){
        return service.updatepersona(id,objectMap);
    }


        @DeleteMapping("/{id}")
    public void DeleteById(@PathVariable("id") int id){
        service.delete(id);
    }
}
