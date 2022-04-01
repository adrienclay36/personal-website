import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-primaryFont bg-gradient-to-b from-gray-50 to-gray-300 w-full h-full">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
