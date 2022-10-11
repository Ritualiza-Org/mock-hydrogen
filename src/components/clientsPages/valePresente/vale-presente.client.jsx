import {useState} from 'react';

import Styles from './vale-presente.module.css';
import imgProduto from '../../../routes/images/vale-presente.webp';
import {Image} from '@shopify/hydrogen';

function ValePresente() {
  // const {fetchAllProducts, products, checkout, addItemToCheckout,removeLineItem} = useContext(AppContext);
  const dataAtual = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1 < 10
      ? '0' + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1
  }-${
    new Date().getDate() < 10
      ? '0' + new Date().getDate()
      : new Date().getDate()
  }`;
  const [value, setValue] = useState(100);
  const [qtd, setQtd] = useState(1);
  const [paraQuem, setParaQuem] = useState('Para outra pessoa');
  const [dadosDestinatario, setDadosDestinatario] = useState({
    nome: '',
    email: '',
    data: dataAtual,
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={Styles.main}>
      <form className={Styles.formInicial} onSubmit={handleSubmit}>
        <div className={Styles.divImage}>
          <Image
            src={imgProduto}
            alt="Imagem Produto"
            width={600}
            height={600}
          />
        </div>

        <div className={Styles.divEsquerda}>
          <h1 className={Styles.title}> Vale-presente digital </h1>
          <h2 className={Styles.value}>
            {' '}
            {value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </h2>
          <p className={Styles.description}>
            {' '}
            Escolha um valor e escreva uma mensagem personalizada para que o
            vale-presente tenha a sua cara.{' '}
          </p>
          <div className={Styles.divValue}>
            <p className={Styles.textoValue}>Valor</p>
            <div className={Styles.divSpansValue}>
              <button
                type="button"
                className={Styles.spanValues}
                onClick={() => setValue(100)}
              >
                {' '}
                R$ 100{' '}
              </button>
              <button
                type="button"
                className={Styles.spanValues}
                onClick={() => setValue(150)}
              >
                {' '}
                R$ 150{' '}
              </button>
              <button
                type="button"
                className={Styles.spanValues}
                onClick={() => setValue(200)}
              >
                {' '}
                R$ 200{' '}
              </button>
              <button
                type="button"
                className={Styles.spanValues}
                onClick={() => setValue(250)}
              >
                {' '}
                R$ 250{' '}
              </button>
              <button
                type="button"
                className={Styles.spanValues}
                onClick={() => setValue(300)}
              >
                {' '}
                R$ 300{' '}
              </button>
              <button
                type="button"
                className={Styles.spanValues}
                onClick={() => setValue(350)}
              >
                {' '}
                R$ 350{' '}
              </button>
            </div>
          </div>

          <div className={Styles.divTotalQtd}>
            <p className={Styles.textoQtd}>Quantidade</p>
            <div className={Styles.divQtd}>
              <button
                type="button"
                className={Styles.buttonqtd}
                onClick={() => setQtd(qtd - 1)}
                disabled={qtd === 1}
              >
                {' '}
                -{' '}
              </button>
              <span className={Styles.buttonqtd}> {qtd} </span>
              <button
                type="button"
                className={Styles.buttonQtd}
                onClick={() => setQtd(qtd + 1)}
              >
                {' '}
                +{' '}
              </button>
            </div>
          </div>

          <div className={Styles.totalParaQuem}>
            <p className={Styles.textoParaQuem}>Para quem é o vale-presente?</p>
            <div className={Styles.divParaQuem}>
              <button
                type="button"
                className={Styles.buttonParaQuem}
                onClick={() => setParaQuem('Para outra pessoa')}
              >
                {' '}
                Para outra pessoa{' '}
              </button>
              <button
                type="button"
                className={Styles.buttonParaQuem}
                onClick={() => setParaQuem('Para mim')}
              >
                {' '}
                Para mim{' '}
              </button>
            </div>
          </div>

          {paraQuem === 'Para outra pessoa' && (
            <div className={Styles.divDadosDestinatario}>
              <label htmlFor="email" className={Styles.inputEmail}>
                Email do destinatário
                <input
                  id="email"
                  type="email"
                  value={dadosDestinatario.email}
                  onChange={({target}) =>
                    setDadosDestinatario({
                      ...dadosDestinatario,
                      email: target.value,
                    })
                  }
                />
              </label>

              <label htmlFor="nome" className={Styles.inputEmail}>
                Nome do destinatário
                <input
                  id="nome"
                  type="text"
                  value={dadosDestinatario.nome}
                  onChange={({target}) =>
                    setDadosDestinatario({
                      ...dadosDestinatario,
                      nome: target.value,
                    })
                  }
                />
              </label>

              <label htmlFor="email" className={Styles.inputData}>
                Data de Entrega
                <input
                  id="email"
                  type="date"
                  value={dadosDestinatario.data}
                  onChange={({target}) =>
                    setDadosDestinatario({
                      ...dadosDestinatario,
                      data: target.value,
                    })
                  }
                />
              </label>

              <label htmlFor="mensagem" className={Styles.areaMensagem}>
                Nome do destinatário
                <textarea
                  id="mensagem"
                  type="text"
                  value={dadosDestinatario.mensagem}
                  onChange={({target}) =>
                    setDadosDestinatario({
                      ...dadosDestinatario,
                      mensagem: target.value,
                    })
                  }
                />
              </label>
            </div>
          )}

          <button type="submit">Comprar</button>

          {/* <Link href={`/`}><a className={Styles.seeMore}>Voltar a Loja</a></Link> */}
        </div>
      </form>
    </main>
  );
}

export default ValePresente;
