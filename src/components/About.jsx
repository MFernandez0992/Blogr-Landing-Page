const About = () => {
  return (
    <section className="pt-24 h-[700px] m-auto bg-illustration-editor-desktop bg-no-repeat bg-60 bg-right-center px-24">
        <h2 className="text-3xl font-overpass text-center text-primary-veryDarkBlue font-bold">Designed for the future</h2>

        <div className="flex flex-col gap-14 my-20">
            <div className="textContainer">
                <h3 className="titleH2">Introducing an extensible editor</h3>
                <p className="parrafo">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.</p>
            </div>

            <div className="textContainer">
                <h3 className="titleH2">Robust content management</h3>
                <p className="parrafo">Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
        </div>
    </section>
  )
}

export default About