// next
import Image from "next/image";

const Writing = () => {
    const articles = [
        {
            title: "Community Economies",
            date: "January 13, 2023",
            link: "https://mirror.xyz/0xreklaw.eth/UYcuB0_aFwT2AUvD5fXqcBnoH-k_ZgYRUQA-y2dvCVo",
            logo: "https://pbs.twimg.com/profile_images/1483877855586963459/VVWXmSVk_400x400.jpg"
        }
    ]
    return (
        <>
            <h2>Thoughts & Writing</h2>
            {articles.map((article, index) => {
                return (
                    <div className="resumeItem" key={index}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Image src={article.logo} width="40" height="40" style={{ borderRadius: "4px" }} />
                            <div style={{ marginLeft: "0.75rem" }}>
                                <a href={article.link}>{article.title}</a>
                            </div>
                        </div>
                        <div>
                            <p className="display-none-phone">{article.date}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Writing;