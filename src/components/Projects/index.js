import { useEffect } from "react"


export default function Projects(props) {
    useEffect(()=>{
        let sections = document.querySelectorAll('.section');
        for(let i = 0; i < sections.length; i++){
            let section = sections[i];
            let content = section.querySelector('.inside-content')
            
            section.addEventListener('mouseover', ()=>{
                content.classList.add('active')
            })
            section.addEventListener('mouseout', ()=>{
                content.classList.remove('active')
            })
        }
    })
    return (
        <section className="section" data-scroll-section data-scroll-speed="3">
            <a className="site-link" href={props.link}>
            <div className="section-container">
                <img className="proj-image" src={props.image} alt={props.name} />
                <div className="inside-content">
                    <h2>{props.name}</h2>
                </div>
            </div>
            </a>
        </section>

    )
}