import scarecrow from './Scarecrow.png';

export default function Error() {
   return (
      <div className="errContainer">
         <header className="notFound">
            <strong>404 NOT FOUND</strong>
         </header>
         <main>
            <div className="scarecrow">
               <img className='scarecrow__img' src={scarecrow} alt="épouvantail" />
            </div>
            <section className='sec'>
               <h1> I have bad news for you</h1>
               <p>The page you are looking for might be removed or is temporarily unavailable</p>
               <a href="/" className="return">
                  <span className="return__txt">BACK TO HOMEPAGE</span>
               </a>
            </section>
         </main>

      </div>
   )
}
