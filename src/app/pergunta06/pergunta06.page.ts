import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonicModule, NavController} from '@ionic/angular';

@Component({
  selector: 'app-pergunta06',
  templateUrl: './pergunta06.page.html',
  styleUrls: ['./pergunta06.page.scss'],
})
export class Pergunta06Page implements OnInit {

 
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
      this.ExibirAlerta_Resultado("Resposta Correta", "Muito bom! Agora prossiga.");
    }
    else
    {
      this.DiminuirPontuacao();
      this.ExibirAlerta_Resultado("Resposta ERRADA", "Agora você tem " + this.pontuacao + " pontos. Mas não desanime! Continue jogando!");
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

  async ExibirAlerta_Resultado(textoTitulo: any, textoMensagem: any)
  {
    const alerta = await this.gerenciadorAlerta.create(
      {
        header: textoTitulo,
        message: textoMensagem,
        buttons: [
          {
            text: 'OK',
            handler: (data) => {
              this.gerenciadorNav.navigateForward('pergunta07');
            },
          },
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
