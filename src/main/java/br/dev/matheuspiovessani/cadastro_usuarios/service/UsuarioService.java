package br.dev.matheuspiovessani.cadastro_usuarios.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.dev.matheuspiovessani.cadastro_usuarios.model.Usuario;
import br.dev.matheuspiovessani.cadastro_usuarios.repository.UsuarioRepository;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository){
        this.repository = repository;
    }
    
    public List<Usuario> listarTodos(){
        return repository.findAll();
    }

    public Usuario salvarUsuario(Usuario usuario){
        if(repository.existsByEmail(usuario.getEmail())){
            throw new RuntimeException("E-mail já cadastrado!");
        }
        if(repository.existsByCpf(usuario.getCpf())){
            throw new RuntimeException("CPF já cadastrado!");
        }
        return repository.save(usuario);
    }

    public void deletar(Long id){
        repository.deleteById(id);
    }
}   
