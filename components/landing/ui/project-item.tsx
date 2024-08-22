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
    <div className=' lg:px-12 py-4 grid grid-cols-1 md:grid-cols-2 mt-12 gap-12 justify-items-center'>

      {imagePosition === 'left' && (
        <div className='flex flex-col justify-center items-center max-w-[32rem]'>
          <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageSrc.width}  
          height={imageSrc.height} 
          className={` ${imageClassNames}`}
          />
        </div>
      )}

      <div className='py-8'>
        <h1 className='text-2xl lg:text-3xl font-bold text-green-800'>
          {title}
        </h1>
        <p className='md:text-lg text-gray-600 mt-6'>
          {description}
        </p>

        <div className='flex flex-row mt-6'>
          <InvertedButton text='Learn more' />
        </div>
      </div>

      {imagePosition === 'right' && (
        <div className='flex flex-col justify-center items-center max-w-[32rem]'>
          <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageSrc.width}  
          height={imageSrc.height} 
          className={`${imageClassNames}`}
          />
        </div>
      )}
      
    </div>
  );
};

export default ProjectItem;