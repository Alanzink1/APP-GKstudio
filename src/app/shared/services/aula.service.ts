import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AulaService {


   aulas:any = [
    { 
      id: 1, 
      nome: 'pw', 
      hora_inicio: "14:00", 
      hora_fim: "15:00", 
      data: "15/12/2024", 
      professor: "Giovanni", 
      sala: "lab", 
      qtd: 5,
      aluno: [
        { id: 1, nome: "Diogo", aceite: false },
        { id: 2, nome: "Ana", aceite: true },
        { id: 3, nome: "Carlos", aceite: true },
        { id: 4, nome: "Beatriz", aceite: false },
        { id: 5, nome: "Eduardo", aceite: true }
      ] 
    },
    { 
      id: 2, 
      nome: 'mat', 
      hora_inicio: "09:00", 
      hora_fim: "10:00", 
      data: "15/12/2024", 
      professor: "Maria", 
      sala: "101", 
      qtd: 5,
      aluno: [
        { id: 6, nome: "Fernanda", aceite: true },
        { id: 7, nome: "Gabriel", aceite: true },
        { id: 8, nome: "Juliana", aceite: false },
        { id: 9, nome: "Ricardo", aceite: true },
        { id: 10, nome: "Sofia", aceite: true }
      ] 
    },
    { 
      id: 3, 
      nome: 'hist', 
      hora_inicio: "10:00", 
      hora_fim: "11:00", 
      data: "15/12/2024", 
      professor: "José", 
      sala: "102", 
      qtd: 5,
      aluno: [
        { id: 1, nome: "Diogo", aceite: false },
        { id: 2, nome: "Ana", aceite: true },
        { id: 3, nome: "Carlos", aceite: true },
        { id: 4, nome: "Beatriz", aceite: false },
        { id: 5, nome: "Eduardo", aceite: true }
      ] 
    },
    { 
      id: 4, 
      nome: 'química', 
      hora_inicio: "11:00", 
      hora_fim: "12:00", 
      data: "15/12/2024", 
      professor: "Luciana", 
      sala: "103",
      qtd: 5,
      aluno: [
        { id: 6, nome: "Fernanda", aceite: false },
        { id: 7, nome: "Gabriel", aceite: true },
        { id: 8, nome: "Juliana", aceite: true },
        { id: 9, nome: "Ricardo", aceite: false },
        { id: 10, nome: "Sofia", aceite: true }
      ] 
    },
    { 
      id: 5, 
      nome: 'física', 
      hora_inicio: "13:00", 
      hora_fim: "14:00", 
      data: "15/12/2024", 
      professor: "Rafael", 
      sala: "104", 
      qtd: 5,
      aluno: [
        { id: 1, nome: "Diogo", aceite: true },
        { id: 2, nome: "Ana", aceite: false },
        { id: 3, nome: "Carlos", aceite: true },
        { id: 4, nome: "Beatriz", aceite: true },
        { id: 5, nome: "Eduardo", aceite: false }
      ] 
    },
    { 
      id: 6, 
      nome: 'inglês', 
      hora_inicio: "15:00", 
      hora_fim: "16:00", 
      data: "15/12/2024", 
      professor: "Cláudia", 
      sala: "105",
      qtd: 5,
      aluno: [
        { id: 6, nome: "Fernanda", aceite: true },
        { id: 7, nome: "Gabriel", aceite: false },
        { id: 8, nome: "Juliana", aceite: true },
        { id: 9, nome: "Ricardo", aceite: true },
        { id: 10, nome: "Sofia", aceite: false }
      ] 
    },
    { 
      id: 7, 
      nome: 'geografia', 
      hora_inicio: "16:00", 
      hora_fim: "17:00", 
      data: "15/12/2024", 
      professor: "Marcos", 
      sala: "106", 
      qtd: 5,
      aluno: [
        { id: 1, nome: "Diogo", aceite: true },
        { id: 2, nome: "Ana", aceite: false },
        { id: 3, nome: "Carlos", aceite: true },
        { id: 4, nome: "Beatriz", aceite: false },
        { id: 5, nome: "Eduardo", aceite: true }
      ] 
    },
    { 
      id: 8, 
      nome: 'artes', 
      hora_inicio: "17:00", 
      hora_fim: "18:00", 
      data: "15/12/2024", 
      professor: "Paula", 
      sala: "107", 
      qtd: 5,
      aluno: [
        { id: 6, nome: "Fernanda", aceite: false },
        { id: 7, nome: "Gabriel", aceite: true },
        { id: 8, nome: "Juliana", aceite: true },
        { id: 9, nome: "Ricardo", aceite: false },
        { id: 10, nome: "Sofia", aceite: true }
      ] 
    },
    { 
      id: 9, 
      nome: 'ed.física', 
      hora_inicio: "08:00", 
      hora_fim: "09:00", 
      data: "15/12/2024", 
      professor: "Eduardo", 
      sala: "108",
      qtd: 5, 
      aluno: [
        { id: 1, nome: "Diogo", aceite: true },
        { id: 2, nome: "Ana", aceite: true },
        { id: 3, nome: "Carlos", aceite: false },
        { id: 4, nome: "Beatriz", aceite: true },
        { id: 5, nome: "Eduardo", aceite: false }
      ] 
    },
    { 
      id: 10, 
      nome: 'programação', 
      hora_inicio: "15:00", 
      hora_fim: "16:00", 
      data: "15/12/2024", 
      professor: "Giovanni", 
      sala: "lab", 
      qtd: 5,
      aluno: [
        { id: 6, nome: "Fernanda", aceite: true },
        { id: 7, nome: "Gabriel", aceite: false },
        { id: 8, nome: "Juliana", aceite: true },
        { id: 9, nome: "Ricardo", aceite: true },
        { id: 10, nome: "Sofia", aceite: false }
      ] 
    }
  ];
  
    
    // { 
    //   id: 10, 
    //   nome: "Sofia", 
    //   aulas: [
    //     { id: 10, nome: 'programação', hora_inicio: "15:00", hora_fim: "16:00", data: "15/12/2024", professor: "Giovanni", aceite: true, sala: "lab" }
    //   ] 
    // }
  

  constructor() { }
}
