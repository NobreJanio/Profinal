class Cursos {

    constructor() {

        this.id = 1;
        this.arrayCursos = []
        this.editID = null;
       }
    
    salvar() {
        let cursos = this.lerDados();
      if(this.validaCampos(cursos))      
        if(this.editID == null) {
                this.adicionar(cursos); 
            } else {
                this.atualizar(this.editID)
            }
      
         
           
        
        
        this.listaTabela();
        this.cancelar();
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
            imgEdit.setAttribute("onclick", "cursos.preparaEdit("+JSON.stringify(this.arrayCursos[i])+")");

            let imgDelete = document.createElement('img')
            imgDelete.src = 'img/delete.png'
            imgDelete.setAttribute("onclick", "cursos.deletar("+this.arrayCursos[i].id+")");
            

            let imgEdit1 = document.createElement('img')
            imgEdit1.src = 'img/fina.jpg';
            
            td_imagem.appendChild(imgEdit1);
            td_acoes.appendChild(imgDelete)
            td_acoes.appendChild(imgEdit);
       }
    }

    adicionar(cursos) {
        this.arrayCursos.push(cursos);
        this.id++;
    }

    atualizar(id, cursos) {
        for (let i = 0;i < this.arrayCursos.length; i++)
            if(this.arrayCursos[i].id == id) {
                    this.arrayCursos[i].nomeCursos = cursos.nomeCursos;
                    this.arrayCursos[i].nomeCursos = cursos.nomeDes;
                    this.arrayCursos[i].nomeCursos = cursos.nomeImg;
                    this.arrayCursos[i].nomeCursos = cursos.nomeProf;
                    this.arrayCursos[i].nomeCursos = cursos.nomeAces;
            }


    }

    preparaEdit(dados) {
        this.editID = dados.id;

        document.getElementById('cursos').value = dados.nomeCursos;
        document.getElementById('cursos').value = dados.nomeDes;
        document.getElementById('cursos').value = dados.nomeImg;
        document.getElementById('cursos').value = dados.nomeProf;
        document.getElementById('cursos').value = dados.nomeAces;
        
        document.getElementById('btn1').innerText = 'Atualizar'


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

        document.getElementById('btn1').innerText = 'Salvar';
        this.editID = null

       
    }

    deletar (id) {
        //if(confirm('Deseja realmente deletar o curso do ID ' + id))
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayCursos.length; i++)
        if(this.arrayCursos[i].id == id) {
            this.arrayCursos.splice(i, 1);
            tbody.deleteRow(i);
        }
        
        
    }


}

var cursos = new Cursos();


