export default function Presentation() {
    
 return (
   <section className="w-full max-w-fit flex flex-row justify-center mt-20 cursor-default presentationsec">
    <div className='flex flex-col'>
      <div className="presentation">
        <p className="text-white text-lg">Olá!<span className="animate-wave inline-block">👋</span> Eu sou </p>
        <span className="text-white text-6xl">Murilo Zague</span>
        <p className="text-emerald-300 text-xl animate-pulse developer">&gt; Web-Developer</p>
      </div>
      <div className="mt-6">
        <p className="mb-2">// Acesse meu perfil no GitHub:</p>
        <span className="text-indigo-600 const">let </span> 
        <span className="text-emerald-300">githubLink</span> = 
        <a 
          href="https://github.com/MuriloZague" 
          target="_blank" 
          className="text-violet-500 hover:text-blue-400 duration-500"> “github.com/MuriloZague”
        </a>
      </div>
    </div>
   </section>
 );
}