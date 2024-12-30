import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">My Repair shop</h1>
          <address>
            555 Gateway Lane
            <br />
            Kfar Saba Israel 4236328
          </address>
          <p>Open dayly: 9am to 6pm</p>
          <Link className="hover:underline" href="tel:555555555">
            555555555
          </Link>
        </div>
      </main>
    </div>
  );
}
