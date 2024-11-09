import About from './about/page';
import Contact from './contact/page';

export default function Home() {
  const flowers = [
    { id: 1, name: 'Rose', image: '/rose.jpg' },
    { id: 2, name: 'Lily', image: '/lily.jpg' },
    { id: 3, name: 'Tulip', image: '/tulip.jpg' },
    { id: 4, name: 'Sunflower', image: '/sunflower.jpg' },
    { id: 5, name: 'Orchid', image: '/orchids.jpg' },
  ];

  return (
    <div className="container">

      <main>
        <h2>Our Beautiful Flowers</h2>
        <div className="flower-grid">
          {flowers.map((flower) => (
            <div key={flower.id} className="flower-card">
              <img src={flower.image} alt={flower.name} />
              <h3>{flower.name}</h3>
            </div>
          ))}
        </div>
      </main>

     <About />
     <Contact />
    </div>
  );
}
