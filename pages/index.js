import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const images = [
  {
    id: 0,
    tag: 'Art',
    image: '1.4.jpg',
    place: 'Art Place 1',
    title: 'Artwork 1',
    description: 'This is the first art place.',
  },
  {
    id: 1,
    tag: 'Art',
    image: '2.png',
    place: 'Art Place 2',
    title: 'Artwork 2',
    description: 'This is the second art place.',
  },
  {
    id: 2,
    tag: 'Art',
    image: '3.png',
    place: 'Art Place 3',
    title: 'Artwork 3',
    description: 'This is the third art place.',
  },
  {
    id: 3,
    tag: 'Art',
    image: '4.jpg',
    place: 'Art Place 4',
    title: 'Artwork 4',
    description: 'This is the fourth art place.',
  },
  {
    id: 4,
    tag: 'Museum',
    image: '5.5.jpg',
    place: 'Museum Place 1',
    title: 'Museum 1',
    description: 'This is the first museum place.',
  },
  {
  id: 5,
    tag: 'Museum',
    image: '6.5.jpg',
    place: 'Museum Place 2',
    title: 'Museum 2',
    description: 'This is the second museum place.',
  },
  {
    id: 6,
      tag: 'Museum',
      image: '7.1.jpg',
      place: 'Museum Place 3',
      title: 'Museum 3',
      description: 'This is the thrid museum place.',
    },
    {
      id: 7,
        tag: 'Museum',
        image: '8.4.jpg',
        place: 'Museum Place 4',
        title: 'Museum 4',
        description: 'This is the fourth museum place.',
      },
    {
        id: 8,
          tag: 'Park',
          image: '8.4.jpg',
          place: 'Park Place 1',
          title: 'Park 1',
          description: 'This is the first 1 place.',
   },
  // Add more images with their respective tags, places, titles, and descriptions
  // ...
];


const tags = ['Art', 'Museum', 'Park','Local Markets'];

const IndexPage = () => {
  const [selectedTag, setSelectedTag] = useState('Art');
  const filteredImages = images.filter((image) => image.tag === selectedTag);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center space-x-2 mb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 mt-4 rounded-md ${
              selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:mx-24 mx-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div key={image.id} className="aspect-w-1 aspect-h-1">
            <Image
              src={`/images/${image.image}`}
              alt={image.tag}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            <div className="mt-4 flex justify-center">
              <Link href={`/image/${image.id}?tag=${image.tag}`} passHref>
                <LinkButton>
                  View Details
                </LinkButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LinkButton = ({ children }) => {
  return (
    <button className="px-4 py-2 bg-blue-500  text-white rounded-md">
      {children}
    </button>
  );
};

export default IndexPage;