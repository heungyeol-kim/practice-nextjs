import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => router.push("/product")}>go to product</button>
    </div>
  );
}
