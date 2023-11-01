
export default function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex align-center justify-between p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="header-logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex ">
          <li className="mr-30  ">
            <img width={18} height={18} src="/img/cart.svg" alt="img-cart" />
            <span>1205 руб</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="img-user" />
          </li>
        </ul>
      </header>
      <div className="content  p-40">
        <h1 className="mb-40 ">Все кроссовоки</h1>

        <div className="d-flex justify-between ">

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="card-icon" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center " >
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 c</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="card-icon" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="card-icon" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center " >
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 c</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="card-icon" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="card-icon" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center " >
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 c</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="card-icon" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="card-icon" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center " >
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 c</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="card-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
