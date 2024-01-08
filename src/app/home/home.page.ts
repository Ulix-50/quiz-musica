import { Component } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { IonicModule, NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nomeJogador:any;
  chave_IDJogador: any;
  constructor(private gerenciadorAlerta: AlertController, private gerenciadorNav: NavController) {
    this.nomeJogador = "";
    localStorage.removeItem("ID_jogadorAtual");
  }



  async exibirAlertComInput_Nome() {
    const alert = await this.gerenciadorAlerta.create({
      header: 'Antes de começar, digite seu nome:',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Digite seu nome',
        },  
      ],
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            this.DefinirDados_Jogador(data.nome);
            this.gerenciadorNav.navigateForward('pergunta01');
          },
        },
      ],
    });
  
    await alert.present(); 
  }

  DefinirDados_Jogador(dadosJogador: any)
  {
    let i = 1;
    do {
      if (localStorage.getItem("nome_jogador_"+i) == null) {
        this.chave_IDJogador = "jogador_"+i;
        localStorage.setItem("nome_"+this.chave_IDJogador, dadosJogador);
        localStorage.setItem("ID_jogadorAtual", this.chave_IDJogador);
        console.log("Chave: " + this.chave_IDJogador);
        break;
      }
      else i++;
    } while (localStorage.getItem("nome_jogador_" + (i - 1)) != null);
    
    localStorage.setItem("pontuacao_"+this.chave_IDJogador, "10");
  }

  async exibirCreditos() {
    const alert = await this.gerenciadorAlerta.create({
      header: '👥Créditos:',
      subHeader: 'Maravilhosamente feito por:',
      message: 'Maria Luiza (36360) e Ulisses Cardoso (36347)',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        },
      ],
    });
  
    await alert.present(); 
  }

  async exibirTutorial() {
    const alert = await this.gerenciadorAlerta.create({
      header: '💭Como se joga?',

      message: 'Veja um frame de um MV (music video) e escolha a alternativa correta.',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        },
      ],
    });
  
    await alert.present(); 
  }


}
