'use client';

import Image from 'next/image';
import { ImageItem, ServiceDescription } from './styles';

const ServiceCard = ({
  imgPath,
  title,
}: {
  imgPath: string;
  title: string;
}) => {
  return (
    <ImageItem>
      <Image src={imgPath} alt="Service1" width={275} height={275} priority />
      <ServiceDescription>{title}</ServiceDescription>
    </ImageItem>
  );
};

export default ServiceCard;
