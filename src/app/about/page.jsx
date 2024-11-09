// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function About() {
//   return (
//     <div className="container">
//       {/* <Navbar /> */}

//       <main>
//         <h2>About Us</h2>
//         <p>Welcome to our Flower Collection! We offer a variety of beautiful flowers for any occasion. Our goal is to bring nature closer to you.</p>
//       </main>

//       {/* <Footer /> */}
//     </div>
//   );
// }

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

export default function About() {
  const flowers = [
    {
      id: 1,
      name: 'Rose',
      images: ['/rose1.jpg', '/rose2.jpg'],
      description:
        'The rose is a type of flowering shrub. Its name comes from the Latin word Rosa. Roses are known for their beautiful scent and vibrant colors, often symbolizing love and romance.',
    },
    {
      id: 2,
      name: 'Lily',
      images: ['/lily1.jpg', '/lily2.jpg'],
      description:
        'Lilies are tall perennials that can grow up to six feet in height. Known for their large, trumpet-shaped flowers, lilies are often associated with purity and refined beauty.',
    },
    {
      id: 3,
      name: 'Tulip',
      images: ['/tulip1.jpg', '/tulip2.jpg'],
      description:
        'Tulips are one of the most popular spring flowers. Originating from Central Asia, these flowers come in many colors and are known for their cup-like shape.',
    },
    {
      id: 4,
      name: 'Sunflower',
      images: ['/sun1.jpg', '/sun2.jpg'],
      description:
        'Sunflowers are known for their large flower heads and bright yellow petals. They are native to North America and symbolize adoration, loyalty, and longevity.',
    },
    {
      id: 5,
      name: 'Orchid',
      images: ['/orchid1.jpg', '/orchid2.jpg'],
      description:
        'Orchids are exotic flowers that come in a variety of colors and shapes. They symbolize love, luxury, beauty, and strength, and are often used as ornamental plants.',
    },
  ];

  return (
    <div className="container">
      {/* <Navbar /> */}

      <main>
        <h2>About Our Flowers</h2>
        {flowers.map((flower) => (
          <div key={flower.id} className="flower-section">
            <h3>{flower.name}</h3>
            <div className="flower-images">
              <img src={flower.images[0]} alt={`${flower.name} image 1`} />
              <img src={flower.images[1]} alt={`${flower.name} image 2`} />
            </div>
            <p>{flower.description}</p>
          </div>
        ))}
      </main>

      {/* <Footer /> */}
    </div>
  );
}