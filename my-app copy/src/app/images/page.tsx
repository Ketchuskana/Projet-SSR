"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Images() {
    const [images, setImages] = useState<{ id: string; url: string }[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
          const response = await fetch('/api/images');
          const data = await response.json();
          setImages(data);
        };
    
        fetchImages();
      }, []);

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id}>
            <Image src={image.url} alt="Uploaded Image" width={500} height={300} />
          </div>
        ))}
      </div>
        </>
    )
}