import "./Destinations.css";

const Destinations = () => {
  const destinations = [
    {
      number: "01",
      name: "The Albanian Alps",
      description:
        "Fresh mountain air, dramatic peaks and unforgettable hiking trails.",
      tag: "Adventure",
    },
    {
      number: "02",
      name: "The Riviera",
      description:
        "Clear blue water, hidden beaches and warm Mediterranean sunsets.",
      tag: "Coast",
    },
    {
      number: "03",
      name: "Berat",
      description:
        "A timeless city of white houses, stone streets and rich culture.",
      tag: "Culture",
    },
  ];

  return (
    <main className="destinations-page">
      <header className="destinations-header">
        <span className="destinations-eyebrow">Explore with Tourice</span>
        <h1>Popular Destinations</h1>
        <p>
          Discover inspiring places, beautiful landscapes and experiences made
          for your next journey.
        </p>
      </header>

      <div className="destinations-grid">
        {destinations.map((destination) => (
          <article className="destination-card" key={destination.name}>
            <div className="destination-card-top">
              <span className="destination-number">{destination.number}</span>
              <span className="destination-tag">{destination.tag}</span>
            </div>
            <div className="destination-card-content">
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
              <button type="button" aria-label={`Explore ${destination.name}`}>
                Explore <span aria-hidden="true">&#8599;</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Destinations;
