"use client";

import Image from 'next/image';
import { ArrowBlock, ImageItem } from './styles';
import CardHover from './CardHover';

const ServiceCard = ({
  imgPath,
  title,
  color,
}: {
  imgPath: string;
  title: string;
  color: string;
}) => {
  return (
    <ImageItem>
      <Image src={imgPath} alt="Service1" width={275} height={275} priority />
      <CardHover title={title} color={color} />
      <ArrowBlock className="linkArrow"></ArrowBlock>
    </ImageItem>
  );
};

export default ServiceCard;
