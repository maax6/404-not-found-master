import scarecrow from './Scarecrow.png'

export default function Error() {
  return (
    <div className='wrapper-404'>
      <header className="notFound">
        <strong>404 NOT FOUND</strong>
      </header>
      <div id="flex">
        <div className="scarecrow">
          <img className="scarecrow__img" src={scarecrow} alt="épouvantail" />
        </div>
        <section className="sec">
          <h1 id="badNews"> I have bad news for you</h1>
          <p className="sec__p">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <a href="/" className="return__btn">
            <span className="return__btn__txt">BACK TO HOMEPAGE</span>
          </a>
        </section>
      </div>
      <p className="text-footer">created by ⌘ Maxime - devChallenges.io</p>
    </div>
  )
}
