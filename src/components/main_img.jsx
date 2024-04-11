import Picture1 from './images/1.gif'

function MainImg() {

  return (
    <div className="main-container">
      <div className="main-sticky">
        <div className="element">
            <div className="image-container">
              <img className="main-image" src={Picture1} alt="img" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainImg
