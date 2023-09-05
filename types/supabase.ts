export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      fbn_products: {
        Row: {
          active_ingredient: string | null
          Comparable: string | null
          pdf_link: string | null
          price: string | null
          product_brand: string | null
          product_link: string | null
          product_name: string
        }
        Insert: {
          active_ingredient?: string | null
          Comparable?: string | null
          pdf_link?: string | null
          price?: string | null
          product_brand?: string | null
          product_link?: string | null
          product_name: string
        }
        Update: {
          active_ingredient?: string | null
          Comparable?: string | null
          pdf_link?: string | null
          price?: string | null
          product_brand?: string | null
          product_link?: string | null
          product_name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
