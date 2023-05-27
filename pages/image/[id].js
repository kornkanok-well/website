import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const images = [
  {
    id: 0,
    tag: 'Art',
    images: ['1.png', '1.1.1.png', '1.2.png'],
    place: 'Art Place 1',
    title: 'Artwork 1',
    description: 'This is the first art place.',
  },
  {
    id: 1,
    tag: 'Art',
    images: ['2.png'],
    place: 'Art Place 2',
    title: 'Artwork 2',
    description: 'This is the second art place.',
  },
  // Add more images with their respective tags, places, titles, and descriptions
  // ...
];

const ImageDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTitleVisible = window.scrollY > 100;
      setTitleVisible(isTitleVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const image = images.find((img) => img.id === Number(id));

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {titleVisible && <h1 className="fixed top-0 left-0 right-0 text-center bg-white py-4">{image.title}</h1>}
      <div className="flex justify-center">
        <div className="max-w-3xl">
          <div className="flex items-center justify-center mb-4">
            {image.images.map((img, index) => (
              <div key={index} className="mx-2">
                <Image
                  src={`/images/${img}`}
                  alt={image.title}
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1>{image.title}</h1>
            <p>{image.description}</p>
            <p>Location: {image.place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailPage;
