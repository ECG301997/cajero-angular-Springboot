package Cajero.cajero.Interface;

import Cajero.cajero.Entities.Persona;

import java.util.List;
import java.util.Map;

public interface PersonaService {
    public List<Persona>listar();
    public Persona listarId(Integer id);
    public Persona add(Persona p);

    public Persona updatepersona(Integer idMateria, Map<Object,Object> objectMap);
    public void delete(int p);

}
