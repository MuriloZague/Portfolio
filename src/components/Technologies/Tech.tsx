type TechProps = {
    name: String;
    icons: Array<{ src: string; width: number}>;
}

export default function Tech({name, icons}: TechProps) {
 return (
  <section className="w-full max-w-fit flex flex-row justify-center mt-8 cursor-default">
    <div className="mt-2">
    <p className="mb-3">// {name}:</p>
    <div className='flex gap-3'>
        {icons.map((icon, index) => (
            <img
                key={index}
                src={icon.src}
                width={icon.width}
                className='border-2 duration-300 rounded-full border-emerald-300 hover:scale-105'
            />
        ))}
    </div>
    </div>
  </section>
 );
}