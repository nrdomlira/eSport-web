
interface GameBannerProps {
    bannerUrl: string;
    title: string;
    _countAds: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden group">
            <img src={props.bannerUrl} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 invisible group-hover:visible'>
                <strong className='font-bold text-white block'>{props.title}</strong>
                <span className='text-zinc-400 text-sm block'>{props._countAds} anúncios</span>
            </div>
        </a>
    )
}