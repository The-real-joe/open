"use client";
import React, { useEffect, useState } from "react";
import { Database } from "@/../types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

type FBNProduct = Database["public"]["Tables"]["fbn_products"]["Row"];

export const revalidate = 0;

export default function Page({ params }: { params: { productName: string } }) {
  const supabase = createClientComponentClient<Database>();
  const [product, setProduct] = useState<FBNProduct>();

  useEffect(() => {
    async function getProduct(name: string) {
      try {
        const { data, error } = await supabase
          .from("fbn_products")
          .select()
          .eq("product_name", name)
          .single();
        if (error) {
          throw error;
        }
        const product = data;
        console.log(product);
        setProduct(product);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }
    getProduct(params.productName);
  }, [params.productName]);

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm m-auto">
        <h1 className="text-6xl font-bold text-center mb-6">
          {product?.product_name}
        </h1>
        <Link href={product?.product_link || ""}>Product Link</Link>
        <br />
        <Link href={product?.pdf_link || ""}>Label PDF</Link>
        <br />
        <h3>Active Ingredients</h3>
        <p>
          {product?.price} {product?.active_ingredient}
        </p>
      </div>
    </main>
  );
}
