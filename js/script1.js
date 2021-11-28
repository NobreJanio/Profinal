class Cursos {

    constructor() {

        this.id = 1;
        this.arrayCursos = []
        
       }
    
    salvar() {
        let cursos = this.lerDados();
       
        
        

      
        if(this.validaCampos(cursos)) {
           this.adicionar(cursos);
          
            
        }
        
        this.listaTabela();
        thid
    }

     listaTabela(){
       let tbody = document.getElementById('tbody');
       tbody.innerText = '';

       for(let i = 0; i < this.arrayCursos.length; i ++) {
           let tr = tbody.insertRow();

           let td_id = tr.insertCell();
           let td_curso = tr.insertCell();
           let td_descricao = tr.insertCell();
           let td_imagem = tr.insertCell();
           let td_professor = tr.insertCell();
           let td_link = tr.insertCell();
           let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayCursos[i].id;
            td_curso.innerText = this.arrayCursos[i].nomeCursos;
            td_descricao.innerText = this.arrayCursos[i].nomeDes; 
            
            td_professor.innerText = this.arrayCursos[i].nomeProf;
            td_link.innerText = this.arrayCursos[i].nomeAces; 
            

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';
            td_acoes.appendChild(imgEdit);

            let imgDelete = document.createElement('img')
            imgDelete.src ='img/delete.png';
            td_acoes.appendChild(imgDelete)

            let imgEdit1 = document.createElement('img')
            imgEdit1.src = 'img/fina.jpg';
            td_imagem.appendChild(imgEdit1);

       }
    }

    adicionar(cursos) {
        this.arrayCursos.push(cursos);
        this.id++;
    }

    lerDados() {
        let cursos = {}

        cursos.id = this.id
        cursos.nomeCursos = document.getElementById('cursos').value;
        cursos.nomeDes = document.getElementById('cursos').value;
        cursos.nomeImg = document.getElementById('cursos').value;
        cursos.nomeProf = document.getElementById('cursos').value;
        cursos.nomeAces = document.getElementById('cursos').value;
        cursos.nomeAco = document.getElementById('cursos').value;
        

        return cursos
    }

   

   

    validaCampos(cursos) {
        let msg = '';
        
       if(cursos.nomeCursos == '') { 
           msg += '- Informe o curso \n';
    }

        if(cursos.nomeDes == '') {
            msg += '-Informe a descrição \n';
        }

        if(cursos.nomeImg == '') { 
            msg += '- Informe a imagem \n';
        }

        if(cursos.nomeProf == '') { 
            msg += '- Informe o nome do professor \n';
        }

        if(cursos.nomeLink== '') { 
            msg += '- Informe o link \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true
    }
    
    cancelar() {
        document.getElementByAll('cursos').value = '';

       
    }

}

var cursos = new Cursos();


