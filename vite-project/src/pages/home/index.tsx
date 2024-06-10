import { Link } from "react-router-dom"
import ButtonFatec from "../../components/buttonfatec/ButtonFatec"
import InputFatec from "../../components/inputFatec"
import Layout from "../../components/layout"
import Topo from "../../components/footer"
import CheckBox from "../../components/checkbox"
//import LargeWithAppLinksAndSocial from "../../components/footer"

export default function Home() {
    return (
        <>
        <Topo />
        <Layout>
            <div>
                <p>Lista de tarefas</p>
                <hr />
                <p>Inserir nova tarefa
                    <InputFatec
                    placeHolder="Digite o título da tarefa"
                    defaultValue="" type="text" /><br />
                    <CheckBox />
                    <ButtonFatec label="Inserir" type="button" />
                </p>
                <p>
                Tarefa 1
                <ButtonFatec label="pendente" type="button" />
                <ButtonFatec label="excluir" type="button" />
                </p>
                <p>
                Tarefa 2
                <ButtonFatec label="pendente" type="button" />
                <ButtonFatec label="excluir" type="button" />
                </p>
                <p>
                Tarefa 3
                <ButtonFatec label="pendente" type="button" />
                <ButtonFatec label="excluir" type="button" />
                </p>
                <hr />
                <Link to="/sobre">Sobre</Link>
            </div>
        </Layout>
        </>
    )
}