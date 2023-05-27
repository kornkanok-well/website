import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const images = [
  {
    id: 0,
    tag: 'Art',
    image: '1.png',
    place: 'Art Place 1',
    title: 'Artwork 1',
    description: 'This is the first art place.',
  },
  {
    id: 1,
    tag: 'Art',
    image: '1.1.png',
    place: 'Art Place 2',
    title: 'Artwork 2',
    description: 'This is the second art place.',
  },
  // Add more images with their respective tags, places, titles, and descriptions
  // ...
];


const tags = ['Art', 'Museum', 'Park', 'Library', 'Local Markets', 'Other Activities'];

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
            className={`px-4 py-2 rounded-md ${
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
            <div className="mt-2 flex justify-center">
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
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
      {children}
    </button>
  );
};

export default IndexPage;
