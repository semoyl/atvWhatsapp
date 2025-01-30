/*******************************************************************
 * Objetivo: Criar funções para manipular os dados de uma lista de contatos
 * Data: 30/01/2024
 * Autor: Gustavo Rocha Gomes
 * Versão: 1.0
 *******************************************************************/

const  arquivo_contatos = require('./contatos')
const listaContatos = arquivo_contatos.contatos['whats-users']

const listaContatoNumero = function(numero){

    let usuario = {
                    numero: numero,
                    informacoes: []
                    
                }
    let status = false

    listaContatos.forEach(function(busca){
        if(busca.number == numero){
            status = true
            informacoes = {
                nome: busca.account,
                dataCriacao: busca['created-since'],
                id: busca.id
            }
            usuario.informacoes.push(informacoes)
        }
    })

    if(status == true){
        return usuario
    }else{
        return status
    }
}

const listaInfoAlt = function(numero){

    let infos = {
                    numero: numero,
                    informacoesAlternativas: []
    }
    let status = false

   listaContatos.forEach(function(busca){
    if(busca.number == numero){
        status = true
        infoManda = {
            nickname: busca.nickname,
            fotoDePerfil: busca['profile-image'],
            background: busca.background
        }
        infos.informacoesAlternativas.push(infoManda)
    }
})
    if(status == true){
        return infos
    }else{
        return status
    }
}

const listaDeContatos = function(numero){

    let contatos = {
                    numero: numero,
                    contatos: []
                }
    let status = false
        
    listaContatos.forEach(function(busca){
        busca.contacts.forEach(function(busca2){
            if(busca.number == numero){
                status = true
                informations = {
                    nomeUsuario: busca.account,
                    nomeContato: busca2.name,
                    fotoContato: busca2.image,
                    descricaoContato: busca2.description
                }
                contatos.contatos.push(informations)
            }

        })
    })
    if(status == true){
        return contatos
    }else{
        return status
    }
}

const listaDeConversas = function(numero){

    let contatosConversas = {
                                numero: numero,
                                conversas: []
    }

    let status = false

    listaContatos.forEach(function(busca){
        busca.contacts.forEach(function(busca2){
            if(busca.number == numero){
                status = true
                convos = {
                            nomeContato: busca2.name,
                            mensagens: busca2.messages
                        }
            contatosConversas.conversas.push(convos)
            }
        })
    })

    if(status == true){
        return contatosConversas
    }else{
        return status
    }
}

const listaUsuarioContato = function(nomeUsuario, nomeContato){

    let conversa = {
                        nomeUsuario: nomeUsuario,
                        nomeContato: nomeContato,
                        conversas: []
    }

    let status = false

    listaContatos.forEach(function(busca){
        busca.contacts.forEach(function(busca2){

                if(busca.account == nomeUsuario && busca2.name == nomeContato){
                    status = true
                    conversas2 = {
                                    conversa: busca2.messages
                                }
                    conversa.conversas.push(conversas2)
                }
            
        })
    })

    if(status == true){
        return conversa
    }else{
        return status
    }

}

console.log(listaUsuarioContato('Bernardo Xavier Ribeiro', 'José Maria da Silva'))
