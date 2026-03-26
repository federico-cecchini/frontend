function Card({text, author, role, image}) {
    return(
        <div className="dark:bg-dark-secondary-bg p-8 dark:text-white text-black flex flex-col rounded-2xl h-72 w-72 justify-between shadow-lg border dark:border-0">
            <p className="dark:text-white text-black !text-opacity-55 line-clamp-3">{text}</p>
            <section className="flex items-center gap-4">
                <img src={image} alt={author} className="w-10 h-10" referrerPolicy="no-referrer"/>
                <div>
                    <h2 className="font-semibold truncate w-36">{author}</h2>
                    <h3 className="dark:text-white text-black !text-opacity-55 font-medium">{role}</h3>
                </div>
            </section>
        </div>
    )
}

export default Card