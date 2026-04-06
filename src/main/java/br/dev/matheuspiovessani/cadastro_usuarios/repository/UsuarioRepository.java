package br.dev.matheuspiovessani.cadastro_usuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.dev.matheuspiovessani.cadastro_usuarios.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsByEmail(String name);
    boolean existsByCpf(String cpf);
    
}
