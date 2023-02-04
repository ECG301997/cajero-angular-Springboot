package Cajero.cajero.Entities;

import jakarta.persistence.*;


@Entity
@Table(name="Clientes")
    public class Persona {

    @Id
    @Column
    private int id;
    @Column
    private String nombres;
    @Column
    private String apellidos;
    @Column
    private double saldo;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
}
