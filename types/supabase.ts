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
          "Active aIngredient": string | null
          Comparable: string | null
          Link: string | null
          "PDF Link": string | null
          Price: string | null
          "Product Brand": string | null
          "Product Name": string
        }
        Insert: {
          "Active aIngredient"?: string | null
          Comparable?: string | null
          Link?: string | null
          "PDF Link"?: string | null
          Price?: string | null
          "Product Brand"?: string | null
          "Product Name": string
        }
        Update: {
          "Active aIngredient"?: string | null
          Comparable?: string | null
          Link?: string | null
          "PDF Link"?: string | null
          Price?: string | null
          "Product Brand"?: string | null
          "Product Name"?: string
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
