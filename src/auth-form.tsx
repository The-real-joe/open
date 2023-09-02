"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../types/supabase";

export default function AuthForm(props: { view: any }) {
  const supabase = createClientComponentClient<Database>();

  // Use window.location.origin to get the current platform's URL
  const currentPlatformURL =
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000";

  return (
    <Auth
      supabaseClient={supabase}
      view={props.view}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={true}
      providers={["google"]}
      redirectTo={`${currentPlatformURL}/auth/callback`}
    />
  );
}
