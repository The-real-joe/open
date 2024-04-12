"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Comments } from "../components/Comments";
import { supabase } from "@/lib/supabase/server";

export const revalidate = 0;

export default function Page({ params }: { params: { productName: string } }) {
  const supabase = createClientComponentClient<Database>();
  const [product, setProduct] = useState<FBNProduct>();
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    async function getProduct(name: string) {
      try {
        const nameDecoded = decodeURIComponent(name);
        console.log("Fetching product:", nameDecoded, params.productName);
        const { data, error } = await supabase
          .from("fbn_products")
          .select()
          .eq("product_name", nameDecoded)
          .single();
        if (error) {
          throw error;
        }
        const product = data;
        console.log(product);
        setProduct(product);

        // Fetch comments for the product
        const { data: commentsData, error: commentsError } = await supabase
          .from("comments")
          .select("post_id, nickname, payload, created_at, id, published, email")
          .eq("post_id", product.id)
          .order("created_at", { ascending: true });

        if (commentsError) {
          throw commentsError;
        }
        setComments(commentsData || []);
      } catch (error) {
        console.log("Error fetching product or comments: ", error);
      }
    }
    getProduct(params.productName);
  }, [params.productName]);

  return (
    <main className="h-screen flex items-center justify-center">
      {product && (
        <div className="z-10 max-w-5xl w-full items-center font-mono text-sm m-auto">
          <h1 className="text-6xl font-bold text-center mb-6">
            {product?.product_name}
          </h1>
          <Link
            className="text-3xl font-bold text-center mb-6"
            href={product?.product_link || ""}
          >
            Product Link
          </Link>
          <br />
          <Link
            className="text-3xl font-bold text-center mb-6"
            href={product?.pdf_link || ""}
          >
            Label PDF
          </Link>
          <br />
          <h3 className="text-3xl font-bold text-center mb-6">
            Active Ingredients
          </h3>
          <p className="text-3xl font-bold text-center mb-6">
            {product?.price} {product?.active_ingredient}
          </p>
          {/* Pass comments as a prop */}
          {comments.length > 0 && (
	<>
	  <h2 size="3xl" className="mt-12">
	    What people are saying
    </h2>
    {comments.map((comment, index) => (
      <div className="p-6 border my-4" key={index}>
				<header className="text-sm">
		      {`Posted by ${comment.nickname} on ${new Date(
	          comment.created_at
          ).toLocaleTimeString("en-US", {
	          year: "numeric",
            month: "short",
            day: "numeric",
          })}`}
        </header>
        <p className="mt-4">{comment.payload}</p>
      </div>
    ))}
  </>
)}
          <Comments id={product.id} uid={product.uid} comments={comments} />
        </div>
      )}
    </main>
  );
}
