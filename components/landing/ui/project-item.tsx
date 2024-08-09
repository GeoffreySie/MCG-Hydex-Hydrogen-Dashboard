import Image, { StaticImageData } from 'next/image';
import InvertedButton from './inverted-button';

interface ProjectItemProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  imageClassNames?: string;
  imagePosition?: 'left' | 'right';

}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, imageSrc, imageAlt, imageClassNames = '',imagePosition = 'right'}) => {
  return (
    <div className='px-12 py-4 grid grid-cols-2 mt-12 gap-12'>

      {imagePosition === 'left' && (
        <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageSrc.width}  
        height={imageSrc.height} 
        className={` ${imageClassNames}`}
        />
      )}

      <div className='py-8'>
        <h1 className='text-3xl font-bold text-green-800'>
          {title}
        </h1>
        <p className='text-lg text-gray-600 mt-6'>
          {description}
        </p>

        <div className='flex flex-row mt-6'>
          <InvertedButton text='Learn more' />
        </div>
      </div>

      {imagePosition === 'right' && (
        <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageSrc.width}  
        height={imageSrc.height} 
        className={`${imageClassNames}`}
        />
      )}
      
    </div>
  );
};

export default ProjectItem;