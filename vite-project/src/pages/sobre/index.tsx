import { Link } from "react-router-dom" // npm i react-router-dom
import Layout from "../../components/layout"
import Topo from "../../components/footer"

export default function Sobre() {
    return (
        <>
        <Topo />
        <Layout>
            <h1>Desenvolvido por Letícia</h1>
            <div>
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Numquam ut aliquid at vero eius
                et ab, doloremque voluptate, dolore
                cumque assumenda iure asperiores
                voluptatum pariatur qui illo,
                hic dignissimos reprehenderit.
            </div>
            <Link to="/">Voltar para Home</Link>
        </Layout>
     </>   
    )
}