import { Component, OnInit } from '@angular/core';  
import { AlertController } from '@ionic/angular';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  Jogadores: {nome: any, pontuacao: any}[];
  ID_jogador: any;

  


  constructor(private gerenciadorAlerta: AlertController)
  {
    this.Jogadores = [];
    this.ID_jogador = localStorage.getItem("ID_jogadorAtual");
    this.AtribuirValores_Jogadores();
  }

  ngOnInit() {
    
  }

  gravarChave()
  {
    localStorage.setItem("","");
  }

  exibirChave()
  {

  }

  Debug()
  {
    this.AtribuirValores_Jogadores();
  }

  AtribuirValores_Jogadores()
  {

    for (let index = 0; index < this.QuantosJogadoresExistem(); index++) {
      
      this.Jogadores.push({nome: localStorage.getItem("nome_jogador_"+ (index + 1)), pontuacao: localStorage.getItem("pontuacao_jogador_"+ (index + 1))});
    }

    for (let i = 1; i <= 10; i++) {
      if (!this.ExisteOJogador(i)) {
        this.Jogadores.push({nome: "S/N", pontuacao: "?"});
      }
      
    }

    this.Jogadores.sort((a, b) => b.pontuacao - a.pontuacao);

  }
  
  QuantosJogadoresExistem()
  {
    if (!this.ExisteOJogador(1)) {
      return 0;
    }
    let i = 1;

     while (this.ExisteOJogador(i + 1)) {
      ++i;
     }
     return i;
  }


  ExisteOJogador(idJogador: any)
  {
    if(localStorage.getItem("nome_jogador_"+ idJogador) != null)
    {
      return true;
    }
    else return false;
  }

  DefinirValorVazio(idJogador: any)
  {
    this.Jogadores[idJogador].nome = "";
    this.Jogadores[idJogador].pontuacao = "";
  }

 
}
