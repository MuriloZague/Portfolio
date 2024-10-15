import GIT from '../../../icons/GITHUB.svg'
import BOOK from '../../../icons/ARTIGO.svg'
import ARTICLE from '../../../public/article/SCRSystemARTIGO.pdf'

export default function Experience() {
 return (
    <section className="w-full max-w-fit flex flex-row justify-center mt-8 cursor-default mb-6">
        <div>
        <p className="mb-3">// Experiências:</p>
            <div className="border-2 border-emerald-300 p-5 rounded-xl">
                <div className="mb-3">
                    <p className="text-3xl">// SCRSYS:</p>
                </div>
                <div>
                    <p className="text-sm text-white">
                        O SCRSystem foi desenvolvido com o objetivo de inovar o método arcaico 
                        de reserva da quadra poliesportiva da escola técnica ETEC Armando José 
                        Farinazzo por meio de um sistema que possibilita o cadastro de uma 
                        solicitação e a consulta da mesma.
                    </p>
                </div>
                <div className='mt-4 flex gap-3 exp'>
                    <a href="https://github.com/MuriloZague/SCRSYS" target='_blank'><img src={GIT} alt="" width={120} className='border-2 duration-300 rounded-full border-emerald-300 hover:scale-105'/></a>
                    <a href={ARTICLE} download="SCRSYS ARTIGO" target='_blank'><img src={BOOK} alt="" width={110} className='border-2 duration-300 rounded-full border-emerald-300 hover:scale-105'/></a>

                </div>
            </div>
        </div>
    </section>
 );
}