import React from 'react'
import profile from '@/public/images/profile.png'
import { InfiniteMovingImages } from './ui/infinitely-moving-images';

const items = [
    {
        imageSrc: 'https://cdn.brandfetch.io/aws.com/w/144/h/144',
        imageAlt: "AWS Logo",
    },

    {
        imageSrc: 'https://cdn.brandfetch.io/fraunhoferventure.de/w/144/h/144',
        imageAlt: "Fraunhoferventure Logo",
    },
    {
        imageSrc: 'https://cdn.brandfetch.io/pmemtl.com/w/144/h/144/logo',
        imageAlt: "Logos by PME MTL Logo",
    },
    {
        imageSrc: 'https://cdn.brandfetch.io/cranfield.ac.uk/w/144/h/144/theme/light/logo',
        imageAlt: "Logos by Cranfield University Logo",
    },
    {
        imageSrc: 'https://cdn.brandfetch.io/unece.org/w/470/h/144/logo',
        imageAlt: "UNECE Logo",
    },
    {
        imageSrc: 'https://cdn.brandfetch.io/etp-logistics.eu/w/144/h/144',
        imageAlt: "ALICE Logo",
    },
    {
        imageSrc: 'https://cdn.brandfetch.io/elupeg.com/w/144/h/28/logo',
        imageAlt: "Elupeg Logo",
    },
    {
        imageSrc: 'https://cdn.brandfetch.io/cam.ac.uk/w/400/h/400',
        imageAlt: "university of cambridge logo",
    },
    {
        imageSrc: 'https://cdn.brandfetch.io/barclays.co.uk/w/512/h/85/logo',
        imageAlt: "barclays logo",
    },
    {
        imageSrc: 'https://cdn.brandfetch.io/acceleris.com/w/400/h/400',
        imageAlt: "KPMG & acceleris logo",
    },
  ];

const Companies = () => {
  return (
    <div>
        <InfiniteMovingImages items={items} direction="left" speed="normal" pauseOnHover={false}/>
    </div>
  )
}

export default Companies