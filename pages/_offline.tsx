import Head from "next/head";

const Fallback = () => (
  <>
    <Head>
      <title>Retrieve XC</title>
    </Head>
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-md px-10 flex flex-col justify-center space-y-4">
        <h1 className="text-white font-extrabold whitespace-nowrap text-5xl lg:text-6xl tracking-tight text-center">
          Retrieve XC
        </h1>
        <img src="/static/images/logo.png" />
      </div>
    </div>
  </>
);

export default Fallback;
