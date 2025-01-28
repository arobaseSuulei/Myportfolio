import { Badge, Flex } from "@radix-ui/themes";

export default function Academic() {
    return (
        <div className={'flex flex-col gap-8 py-12 p-4'}>


            <h1 className={'flex  font-semibold sm:text-2xl text-xl '}>
                Parcours Académique
            </h1>

            <nav className={'flex justify-between'}>
                <p className={'font-semibold opacity-60'}>2024-present</p>
                <p className={'font-semibold'}>1ere Année IIR</p>
            </nav>

            <nav className={'flex justify-between'}>
                <p className={'font-semibold opacity-60'}>2023-2024</p>
                <p className={'font-semibold'}>2e Année Prépa</p>
            </nav>

            <nav className={'flex justify-between'}>
                <p className={'font-semibold opacity-60'}>2022-2023</p>
                <p className={'font-semibold'}>1ere Année Prépa </p>
            </nav>
        </div>
    );
}
