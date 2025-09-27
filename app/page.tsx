import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center mjustify-center px-4 bg-amber-300">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Better-Auth Tutorial
        </h1>
        <p className="text-muted-foreground mt-3 text-base text-balance sm:text-lg">
          Learn how to handle authentication in Next.js using Better-Auth with
          this tutorial by{" "}
          <Link
            href="https://www.youtube.com/c/codinginflow?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Coding in Flow
          </Link>
        </p>
        <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
