type InfoProps = {
    texts: Array<{ title: String; link: String; href: string}>
  };

export default function InfoText({texts}: InfoProps ){
    
 return (
   <section>
    
      {texts.map((text, index) => (

        <div className="mb-1" key={index}>
          <span className="text-indigo-600 const">const </span>
          <span className="text-emerald-300">{text.title}</span> = 
        <a 
          href={text.href}
          className="text-violet-500 hover:text-blue-400 duration-500" 
          target="_blank"> "{text.link}"
        </a>
      </div>
      ))}
        
   </section>
 );
}