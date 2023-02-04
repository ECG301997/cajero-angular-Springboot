package Cajero.cajero.Interface;

import Cajero.cajero.Entities.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;
import java.util.List;

public interface PersonaRepositorio extends JpaRepository<Persona, Integer> {

}
