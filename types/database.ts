export interface Contact {
  id: string;
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
  created_at: string;
  leido: boolean;
}

export interface ContactInsert {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: Contact;
        Insert: ContactInsert;
        Update: Partial<Contact>;
      };
    };
  };
}

export interface User {
  id: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
