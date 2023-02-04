package Cajero.cajero.Services;

import Cajero.cajero.Entities.Persona;
import Cajero.cajero.Interface.PersonaRepositorio;
import Cajero.cajero.Interface.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.util.ReflectionUtils;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class PersonaServiceImp implements PersonaService {
    @Autowired
    private PersonaRepositorio repositorio;

    public PersonaServiceImp(PersonaRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    @Override
    public List<Persona> listar() {
        return repositorio.findAll();
    }

    @Override
    public Persona listarId(Integer id) {
        return repositorio.findById(id).get();
    }


    @Override
    public Persona add(Persona p) {
        return repositorio.save(p);
    }

    @Override
    public Persona updatepersona(Integer id, Map<Object, Object> objectMap) {
        Persona prod= repositorio.findById(id).get();
        objectMap.forEach((key, value) ->{
            Field field= ReflectionUtils.findField(Persona.class, (String) key);
            field.setAccessible(true);
            ReflectionUtils.setField(field, prod, value);
        });
        return  repositorio.save(prod);
    }

    @Override
    public void delete(int id) {
        repositorio.deleteById(id);
    }
}
