import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hangman() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-[500px] bg-indigo-200 rounded-lg p-5 shadow-lg mt-[100px]">
                <div className='flex flex-col justify-between'>
                    <div className="mb-5 text-bold text-indigo-900 font-bold">
                        Bem-vindo(a) ao Jogo da Forca! <br />
                        - Cada letra errada adiciona uma parte ao boneco, mas ao acertar a palavra, você avança no conhecimento de conceitos essenciais do desenvolvimento de software! <br />
                        - Você tem um tempo limitado para acertar a palavra. <br />
                        Boa sorte e divirta-se testando seus conhecimentos em engenharia de software! <br />
                    </div>
                    <div className=''>
                        <Link href={{
                            pathname: '/games/hangman/play',
                            query: {},
                        }}>        
                            <Button className={cn('p-6 w-full font-bold')}>Jogar</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}