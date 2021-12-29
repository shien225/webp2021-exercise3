import { useState } from "react"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./graphql/client"
import { SearchForm } from "./components/SearchForm"
import { SearchResultField } from "./components/SearchResultField"


function Header(){
    return(
        <div>
            <header className="hero is-danger is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-2">Pokémon-First_generation</h1>
                    </div>
               </div>
            </header>
        </div>
    );
}

function PokemonInfo(){
    const [pokemonName, setpokemonName] = useState("")
    const centerStyle: React.CSSProperties = {padding: "2px 10px", textAlign: "center"}

    return(
        <div style={centerStyle}>
        <>
            <SearchForm setpokemonName={setpokemonName}></SearchForm>
            <ApolloProvider client={apolloClient}>
                {pokemonName && <SearchResultField pokemonName={pokemonName}></SearchResultField>}
            </ApolloProvider>
        </>   
        </div>
    );
}

function Footer(){
    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <p>Pokémon images are retrieved from PokeAPI</p>
                <p>
                    <a href="https://pokeapi.co/about">Donate to PokéAPI</a>
                </p>
                <p>s5420043  勝又聖</p>
                <p>日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
            </div>
        </footer>
    )
}

function App() {
    const centerStyle: React.CSSProperties = {padding: "2px 10px", textAlign: "center"}
    const titleStyle: React.CSSProperties = {margin: "10px", textAlign: "center"}

    return (
        <div>
            <Header />

        <div style={centerStyle}>
            <p>※このwebサイトはWebプログラミングの演習課題である。</p>
            <p>ポケモンの名前を入力することで、そのポケモンの基本的情報が分かるWebサイトである。</p>
            <p>入手する情報は以下の通りであり上から順に表示される。</p>
            
            <strong>
            <li>図鑑ナンバー（ポケモン図鑑)</li>
            <li>ポケモンの名前</li>
            <li>分類</li>
            <li>タイプ</li>
            </strong>

            <p>あまりポケモンを知らない人向けに制作したため、どのようなポケモンなのかが分かる情報を扱っている。</p>

            <section className="hero is-info">
                <h2 className="title is-3" style={titleStyle}>初代ポケモン(No.001～No.151)の英語名</h2>
            </section>

            <p>PokéAPIでは<strong>第1世代</strong>のポケモンのみを扱っているため、それ以降のシリーズのポケモンの名前を入力しても情報が表示されない。</p>
            <p>また<strong>英語名</strong>でないと検索しても情報が表示されない。</p>
            <p>※第1世代(初代)では151匹のポケモンが該当する(図鑑No.001~No.151)</p>
            <p>第1世代ポケモン例：ピカチュウ, イーブイ, リザードン, ニャース, カイリキー……など</p>

            <strong>
            <p>各ポケモンの英語名はこちらを参照: <a target="_blank" href="https://wiki.xn--rckteqa2e.com/wiki/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%81%AE%E5%A4%96%E5%9B%BD%E8%AA%9E%E5%90%8D%E4%B8%80%E8%A6%A7">ポケモンの外国語名一覧</a>(ポケモンWiki)</p>
            </strong>

            <section className="hero is-primary is-three-fifths">
                <h2 className="title is-3" style={titleStyle}>ポケモンの基本情報</h2>
            </section>

            <p>
                こちらのサイトを元に作成: <a target="_blank" href="https://zenn.dev/azuharu07/articles/fae5dec8f93080">"https://zenn.dev/azuharu07/articles/fae5dec8f93080"</a>
            </p> 

            <PokemonInfo />

        </div>

        <Footer />
        </div>
    );
}

export default App