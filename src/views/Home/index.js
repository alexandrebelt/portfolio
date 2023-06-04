
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import './Home.css'
import Projects from '../../components/Projects'
import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function Home() {
    let scroll = new LocomotiveScroll

    useEffect(() => {
        window.addEventListener('resize', () => {
            scroll.update();
        })
    }
    )
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                mobile: true,
                direction: "horizontal"
            }}>
            <div className="main-content" data-scroll-container>
                <Projects
                    name="Luiza Bola Estudio"
                    image="https://luizabola.com/wp-content/uploads/2022/03/E0A6E1EB-22B3-47D6-9C35-E6250FC26636-e1648142434429.jpg"
                    link="https://luizabola.com/"
                />

                <Projects
                    name="Daslan"
                    image="https://cdn.shopify.com/s/files/1/0664/6395/7210/files/Foto-Daniela.png?v=1675048811&width=750"
                    link="https://daslan.com.br/"
                />

                <Projects
                    name="Deborah Lo Russo"
                    image="https://pediatradeborahlorusso.com.br/wp-content/uploads/2023/05/Banner.png"
                    link="https://pediatradeborahlorusso.com.br/"
                />

                <Projects
                    name="Talita de Paiva"
                    image="https://talitadepaiva.com.br/wp-content/uploads/2022/05/Foto-Banner-Meio-e1653333943334-1536x779.jpg"
                    link="https://talitadepaiva.com.br"
                />

                <Projects 
                name="Clinica Ativa Mais"
                image ="https://clinicaativamais.com.br/wp-content/uploads/2023/04/Foto-Carrossel-Clinica-2.png"
                link="https://clinicaativamais.com.br"
                />
                <Projects name="PROJESTO1" description="DSFAEF%EGRTIBHirerieufqerjerjqe" />

            </div>
        </LocomotiveScrollProvider>
    )
}