import Image from 'next/image'

const About = () => {
  return (
      <section className='about h-screen flex items-center justify-start bg-cover text-white px-10' style={{backgroundImage: "url('/cosmetic 3.jpg')"}}>
      <Image 
        src="/cosmetic 3.jpg" 
        alt="Cosmetic Product" 
        width={500} 
        height={500} 
        />
      
    

            <div className='bg-black bg-opacity-60 p-8 rounded.md max-w-lg'>
                <h2 className='text-4xl font-bold mb-4' data-aos= "fade-up">About Us</h2>
                <p> Welcome to Cosmetic World,The best cosmetic products are those that combine high-quality ingredients with effective performance. Leading skincare brands like La Mer and Estée Lauder offer luxurious moisturizers and serums that hydrate and rejuvenate the skin, while makeup products from Fenty Beauty and Charlotte Tilbury enhance natural beauty with long-lasting, versatile formulations. For hair care, brands like Olaplex and Kerastase provide transformative treatments that restore and nourish. These products not only deliver visible results but also prioritize skin health, ensuring that beauty routines are both indulgent and effective. </p>
            </div>
          
        </section>
  );
};

export default About;
