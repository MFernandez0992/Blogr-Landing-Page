const Info = () => {
  return (
    <section className="flex flex-row-reverse py-48 bg-illustration-laptop-desktop bg-no-repeat bg-60 bg-left-center">
        <div className="flex flex-col gap-14 w-1/2">
            <div className="textContainer">
                <h3 className="titleH2">Free, open, simple</h3>
                <p className="parrafo">Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
            </div>

            <div className="textContainer">
                <h3 className="titleH2">Powerful tooling</h3>
                <p className="parrafo">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.</p>
            </div>
        </div>    
    </section>
  )
}

export default Info