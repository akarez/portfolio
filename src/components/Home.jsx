import Profile from '/assets/background_bw.jpg';

function Home() {
  return (
    <div
      className="relative h-dvh bg-cover bg-center"
      style={{ backgroundImage: `url(${Profile})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25" />

      <div className="absolute bottom-0 left-0 p-8 md:p-16 text-left">
        <p className="text-gray-100 md:text-4xl text-3xl font-medium uppercase mb-3 tracking-tight">
          Microelectronics Engineer &amp;
        </p>
        <p className="text-gray-100 md:text-4xl text-3xl font-medium uppercase tracking-tight md:ml-32 ml-8 md:mb-16 mb-8">
          Edge Computing Researcher
        </p>
      </div>
    </div>
  );
}

export default Home;
