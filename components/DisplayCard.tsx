export const DisplayCard = ({ data, username }: any) => {
    return (
        <div className="w-[800px] h-[500px] border rounded-lg">
            <div className="flex justify-between p-4">
                <div className="flex justify-between gap-2 rounded-lg items-center border p-2 text-xl font-bold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                        />
                    </svg>

                    <a href={`https://leetcode.com/${username}`} target="_blank">
                        {username}
                    </a>
                </div>
                <div className="p-2 text-xl gap-2 font-semibold flex justify-between">
                    <div>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp" height={30} width={30} alt="" />
                    </div>
                    <div>
                        Leetcode Analytics
                    </div>
                </div>
            </div>
        </div>
    )
}
