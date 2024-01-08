import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonicModule, NavController} from '@ionic/angular';

@Component({
  selector: 'app-pergunta-final',
  templateUrl: './pergunta-final.page.html',
  styleUrls: ['./pergunta-final.page.scss'],
})
export class PerguntaFinalPage implements OnInit {
 
  alternativas: any;
  ID_jogador: any;
  pontuacao: any;


  constructor(private gerenciadorAlerta: AlertController, private gerenciadorNav: NavController) {
    this.ID_jogador = localStorage.getItem("ID_jogadorAtual");
   }

  ngOnInit() {
    
  }

  ExibirMensagem()
  {
    if (this.RespostaEstaCorreta()) {
      this.ExibirAlerta_ResultadoFinal();
    }
    else
    {
      this.DiminuirPontuacao();
      this.ExibirAlerta_ResultadoFinal();

    }
  }

  RespostaEstaCorreta()
  {
    if (this.alternativas == "correto") return true;    

    return false;
  }

  Debug()
  {
  }

  async ExibirAlerta_ResultadoFinal()
  {
    const alerta = await this.gerenciadorAlerta.create(
      {
        header: "Parabéns Por ter chego até o final. Muito obrigado por ter jogado nosso jogo😄",
        subHeader: "Agora você pode ver seu resultado no ranking",
        message: "Gostaria de ver seu resultado no ranking ou gostaria de sair?",
        buttons: [
          {
            text: 'Ver posição no ranking',
            handler: (data) => {
              this.gerenciadorNav.navigateForward('ranking');
            },
          },
          {
            text: 'Sair',
            handler: (data) => {
              this.gerenciadorNav.navigateForward('home');
            },
          }
        ],
        
      }
    )

    alerta.present();
  }

  DiminuirPontuacao()
  {
    this.pontuacao = localStorage.getItem("pontuacao_"+this.ID_jogador);
    this.pontuacao = parseInt(this.pontuacao) - 1;
    localStorage.setItem("pontuacao_"+this.ID_jogador, String(this.pontuacao));
  }
  
  async Confirmar_Saida(){
    const alerta = await this.gerenciadorAlerta.create(
      {
        header: "Tem certeza que deseja sair?",
        message: "Seu progresso não será recuperado após isto.",
        buttons: [
          {
            text: 'Sim',
            handler: (data) => {

              this.gerenciadorNav.navigateForward('home');
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel'
          }
        ],
        
      }
    )

    alerta.present();
  }

}
