export interface PageHistoryEntry {
    id: number;
    page: string;
  }
  
  export interface UserEditHistoryEntry {
    id: number;
    timestamp: string;
    changes: {
      nome?: string;
      sobrenome?: string;
      telefone?: string;
      celular?: string;
      cep?: string;
      endereco?: string;
      numero?: string;
      email?: string;
      nomeUsuario?: string;
    };
  }